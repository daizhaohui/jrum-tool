import React,{Component} from 'react';
import FrameStyle from './frameStyle';
import ConsoleOutput from '../console/output';
import ConsoleToolBox from '../console/toolBox';
import { Tabs } from 'antd';
import clasnames from 'classnames';
import _ from 'lodash';
const TabPane = Tabs.TabPane;
const styles = {
    tabBarStyle:{
        color:'gray',
        height:44
    }
};
const TabsInfo = {
    Output:'OUTPUT',
    Terminal:'TERMIANL'
};
export default class Console extends Component{
    constructor(props){
        super(props);
        this.state = {
            outputHeight:100,
            consoles:['c1'],
            selectedConsole:'c1',
            toolBoxItemsInVisible:{},
            selectedTab:TabsInfo.Terminal
        }
    }

    tabChange=(key)=>{
        if(key===TabsInfo.Output){
            this.setState({
                toolBoxItemsInVisible:{
                    select:true,
                    add:true,
                    delete:true
                },
                selectedTab:key
            });
        } else {
            this.setState( {
                toolBoxItemsInVisible:{},
                selectedTab:key
            });
        }
    }

    addConsole = (key)=>{
        this.setState({
            consoles:[
                ...this.state.consoles,
                key
            ],
            selectedConsole:key
        })
    }

    removeConsole = (key)=>{
        var consoles = _.filter(this.state.consoles,item=>item!==key);
        this.setState({
            consoles:consoles,
            selectedConsole:consoles[0]
        });
    }

    foldConsole = ()=>{
        let {onChangeHeight} = this.props;
        onChangeHeight();
    }

    unfoldConsole = ()=>{
        let {onChangeHeight} = this.props;
        let height = window.document.body.clientHeight - 120;
        onChangeHeight(height);
    }


    closeConsole = ()=>{
        let {onChangeHeight} = this.props;
        onChangeHeight(0);
    }

    changeConsole = (key)=>{
        this.setState({
            selectedConsole:key
        });
    }

    clickTabOutput = ()=>{
        this.tabChange(TabsInfo.Output);
    }

    clickTabTerminal = ()=>{
        this.tabChange(TabsInfo.Terminal);
    }

    setRefDom = (ref)=>{
        this.props.setRef(ref);
    }

    render(){
        let {height} = this.props;
        let consoleStyle = {
            ...FrameStyle.Console,
            height:`${height}px`,
            borderTop: '0.5px solid #323843'
        };
    
        let outputHeight = height - styles.tabBarStyle.height;
        return (
            <div style={consoleStyle} className="console" ref={this.setRefDom}>
                <div className="consoleHeader">
                    <div className={this.state.selectedTab===TabsInfo.Output?'tabItemSelected':'tabItem'} onClick={this.clickTabOutput}>
                       {TabsInfo.Output}
                    </div>
                    <div className={this.state.selectedTab===TabsInfo.Terminal?'tabItemSelected':'tabItem'} onClick={this.clickTabTerminal}>
                        {TabsInfo.Terminal}
                    </div>
                    <ConsoleToolBox itemsInVisible={this.state.toolBoxItemsInVisible} change={this.changeConsole} add={this.addConsole} remove={this.removeConsole} fold={this.foldConsole} unfold={this.unfoldConsole} close={this.closeConsole}/>
                </div>
                <div style={{display:this.state.selectedTab===TabsInfo.Output?'block':'none',width:'100%',height:'100%'}}>
                    <div>
                    abcdefg
                    </div>
                </div>
                <div style={{display:this.state.selectedTab===TabsInfo.Terminal?'block':'none'}}>
                    {
                        this.state.consoles.map(item=><ConsoleOutput  key={item} ID={item} height={outputHeight} visible={this.state.selectedConsole===item}/>)
                    }  
                </div>
            <style jsx="true">{`
                .consoleHeader{
                    height:44px;
                    width:100%;
                    display:flex;
                    color:#75767c;
                }
                .consoleHeader .tabItem{
                    margin:0 0 0 30px;
                    line-height:44px;
                    width:80px;
                    border-bottom:none;
                    text-align:center;
                    cursor:pointer!important;
                }
                .consoleHeader .tabItem:hover{
                    color:white;
                    cursor:pointer;
                }
                .consoleHeader .tabItemSelected{
                    color:white;
                    border-bottom:1px solid  #75767c;
                    margin:0 0 0 30px;
                    line-height:44px;
                    width:80px;
                    text-align:center;
                    cursor:pointer!important;
                  }
      
            `}
            </style>
            </div>
        );
    }
}