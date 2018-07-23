import React,{Component} from 'react';
import FrameStyle from './frameStyle';
import classnames from 'classnames';
import {Icon} from 'antd';
import {Commands,CommandCenter} from '../../command';
const Remote = require('electron').remote;

const Styles = {
    icon:{
        fontSize: 20, 
        color: 'white',
        fontWeight: 'bold'
    },
    closeIcon:{
        fontSize: 16, 
        color: 'white',
        fontWeight: 'bold'
    }
};


class WorkPlaceTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing:false,
            showClose:false
        }
    }

    componentDidMount(){
        let {tabID} = this.props;
        this.WorkPlaceTabMenu = new Remote.Menu();
        this.WorkPlaceTabMenu.append(new Remote.MenuItem({
            label:"Close",
            click:()=>{
                CommandCenter.command(Commands.Tabs.Close).execute(tabID);
            }
        }));
        this.WorkPlaceTabMenu.append(new Remote.MenuItem({
            label:"Close Others",
            click:()=>{
                CommandCenter.command(Commands.Tabs.CloseOthers).execute(tabID);
            }
        }));
        this.WorkPlaceTabMenu.append(new Remote.MenuItem({
            label:"Close to the right",
            click:()=>{
                CommandCenter.command(Commands.Tabs.CloseToRight).execute(tabID);
            }
        }));
        this.WorkPlaceTabMenu.append(new Remote.MenuItem({
            label:"Close All",
            click:()=>{
                CommandCenter.command(Commands.Tabs.CloseAll).execute();
            }
        }));
    }

    close = (e)=>{
        this.props.closeTab(this.getTabInfo());
        e.preventDefault();     
    }

    mouseUp = (e)=>{
        if(e.button === 1){
           clearInterval(this.longPressTimer);
        }
    }

    mouseDown = (e)=>{
        var timeStart,
            position;
        
        position = {clientX:e.clientX,clientY:e.clientY};
        //鼠标右键
        if(e.button === 2){
            this.WorkPlaceTabMenu.popup(Remote.getCurrentWindow());
        } else if(e.button===0){
            timeStart = Date.now();
            this.longPressTimer = setInterval(()=>{
                if(Date.now()-timeStart>200){
                    this.props.tabClick(this.getTabInfo());
                    clearInterval(this.longPressTimer);
                    this.props.onDragTabStart(position,this.getTabInfo());
                }
                
            },50)
        }
        return false;
    }

    mouseOut = (e)=>{
        this.setState({
            showClose:false
        });
        e.stopPropagation();
    }

    mouseOver = (e)=>{
        this.setState({
            showClose:true
        });
        this.props.onMouseOverTab(e,this.getTabInfo());
        e.stopPropagation();
    }

    getTabInfo = ()=>{
        return {
            ID:this.props.tabID,
            isEditing:this.state.isEditing,
            dom:this.dom
        };
    }

    setRef = (ref)=>{
        this.dom = ref;
    }
    
    render(){
        let {title,fileIcon,selected} = this.props;
        let editStyle,closeStyle;
        editStyle = {
            ...Styles.closeIcon,
            display:this.state.isEditing&&!this.state.showClose?'block':'none'
        };
        closeStyle = {
            ...Styles.closeIcon,
            display:(!this.state.isEditing && selected)||this.state.showClose?'block':'none'
        };
        return( 
            <div  data-tab={this.props.tabID}  ref={this.setRef} className="workplace-tab" style={{background:selected?'#272c35':'#20252c'}} onMouseUp={this.mouseUp}  onMouseDown={this.mouseDown}  onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <div className="workplace-tab-filetype">
                    <Icon type="file-unknown" style={Styles.icon} />
                </div>
                <div className={classnames({"workplace-tab-selected":selected},"workplace-tab-title")}>
                    {title}
                </div>
                <div className="workplace-tab-close" onClick={this.close}>
                    <Icon type="close" style={closeStyle}/>
                    <Icon type="edit" style={editStyle}/>
                </div>
            </div>
        );
    }
}

class WorkPlaceTabContent extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let {Content,selected} = this.props;
        let style = {
            display:selected?'block':'none'
        }
        return(
            <div className="workplace-tabcontent"  style={style}>
                <Content />
            </div>
        );
    }
}
class WorkPlaceToolBox extends Component{
    constructor(props){
        super(props);        
    }

    componentDidMount(){
        this.initMenu();
    }

    initMenu(){
        var _this = this;
        this.ToolBoxMenu = new Remote.Menu();
        this.ToolBoxMenu.append(new Remote.MenuItem({
            label:"Close All",
            click:()=>{
                CommandCenter.command(Commands.Tabs.CloseAll).execute();
            }
        }))
    }

    click = (e)=>{
        this.ToolBoxMenu.popup(Remote.getCurrentWindow());
    }
    
    render(){      
        return (
            <div className="workplace-toolbox">
                <div className="workplace-toolbox-item" onClick={this.click}>
                    <Icon style={Styles.icon} type="ellipsis"/>
                </div>
            </div>
        );
    }
}
export default class WorkPlace extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       
    }

    tabClick = (tab)=>{
        let {currentTab,onTabChange} = this.props;
        if(tab.ID!==currentTab){
            onTabChange && onTabChange(tab);
        }
    }

    closeTab = (tab)=>{
        let {closeTab} = this.props;
        closeTab && closeTab(tab);
    }

    setRef = (ref)=>{
        this.dom = ref;
    }

    setTabTailRef = (ref)=>{
        this.tabTailDom = ref;
    }

    tabTailMouseOver = (e)=>{
        this.props.onMouseOverTab(e,{
            ID:null,
            isEditing:false,
            dom:this.tabTailDom
        });
        e.stopPropagation();
    }

    render(){
        let {tabs,currentTab,width} = this.props;
        let style = {
            width:`${width-FrameStyle.DefaultWidthHeight.WorkpalceToolBoxWidth}px`
        }
        return (
            <div className="workplace-container" ref={this.setRef}>
                <div className="workplace-header" onMouseMove={this.mouseMove} onMouseUp={this.mouseUp}>
                    <div className="workplace-tabs" style={style}>
                        {
                            tabs.map(tab=>{
                                return (
                                    <WorkPlaceTab onDragTabStart={this.props.onDragTabStart} onMouseOverTab={this.props.onMouseOverTab} tabID={tab.ID} title={tab.title} key={`t_${tab.ID}`} selected={tab.ID===currentTab} tabClick={this.tabClick} closeTab={this.closeTab}/>
                                )
                            }) 
                        }
                        <div onMouseOver={this.tabTailMouseOver} className="workplace-tab-tail" ref={this.setTabTailRef}>
                        </div>
                    </div>
                    <WorkPlaceToolBox />
                </div>
                <div className="workplace-tabcontents">
                    {
                        tabs.map(tab=>{
                            return (
                                <WorkPlaceTabContent key={`c_${tab.ID}`} ID={tab.ID} Content={tab.content} selected={currentTab===tab.ID}/>
                            )
                        })
                    }
                </div>

                <style jsx="true">{`
                    .workplace-container{
                        display:flex;
                        flex-direction:column;
                        width:100%;
                        height:100%;
                        background:#272c35;
                        position: relative;
                    }

                    .workplace-header{
                        height:44px;
                        width:100%;
                        background:#20252c;
                        border-bottom:0.5px solid #323843;
                        position:relative;
                        overflow:hidden;
                    }

                    .workplace-tabs{
                        overflow-x:auto;
                        display:flex;
                        height:44px;
                    }

                    .workplace-toolbox{
                        position:absolute;
                        right:0;
                        top:0;
                        height:44px;
                        width:${FrameStyle.DefaultWidthHeight.WorkpalceToolBoxWidth}px;
                    }

                    .workplace-toolbox-item{
                        float:right;
                        padding:13px 0 13px 0;
                    }

                    .workplace-tab{
                        display:flex;
                        align-content:center;
                        border-right:1px solid black;
                        cursor:pointer!important;
                    }

                    .workplace-tab-tail{
                         flex:1;
                    }

                    .workplace-tab-filetype{
                        width:20px;
                        padding:13px 0 13px 3px;
                        cursor:pointer!important;
                    }

                    .workplace-tab-title{
                        flex:1;
                        line-height: 44px;
                        text-align:center;
                        color:#75767c;
                        cursor:pointer!important;
                        white-space: normal;
                        width:90px;
                    }

                    .workplace-tab-selected{
                        color:white;
                    }
                    .workplace-tab-close{
                        width:20px;
                        padding:13px 0 13px 0;
                        cursor:pointer!important;
                    }

                    .workplace-tabcontents{
                        flex:1;
                        width:100%;
                        position:relative;
                    }

                    .workplace-tabcontent{
                        width:100%;
                        position:absolute;
                        background:#272c35;
                        left:0;
                        right:0;
                        bottom:0;
                        top:0;
                        margin:0;
                    }

                    .workplace-tab .anticon{
                        cursor:pointer!important;
                    }
                 `}
                </style>
            </div>
        );
    }
}