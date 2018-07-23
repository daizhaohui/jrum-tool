import React, {
    Component
} from 'react';
import LeftMenu from './leftMenu';
import LeftMenuContent from './leftMenuContent';
import StatusBar from './statusBar';
import WorkPlace from './wokplace';
import Console from './console';
import FrameStyle from './frameStyle';
import AppStore from '../../store/appStore';
import DomUtil from '../../utils/domUtil';
import TabTest from '../workplace/test';
import EventBus from '../../common/eventBus';
import {Commands,CommandCenter} from '../../command/index'
import _ from 'lodash';

const Fixed_Blank = 100;
export default class MainFrame extends Component {
    constructor(props) {
        super(props);
        this.isDragging = false;
        this.isColResized = false;
        this.isRowResized = false;
        this.oldConsoleHeight = FrameStyle.DefaultWidthHeight.ConsoleHeight;
        this.winSizeChanaged = this.winSizeChanaged.bind(this);
        this.state = {
            leftMenuContentWidth:0,
            consoleHeight:FrameStyle.DefaultWidthHeight.ConsoleHeight,
            consoleWidth:0,
            selectedKey:'',
            currentTab:1,
            workpalceTabItems:[{
                ID:1,
                title:"test1",
                content:TabTest
            },{
                ID:2,
                title:"test2",
                content:()=><div  style={{color:'red'}}>test2</div>
            },{
                ID:3,   
                title:"test3",
                content:()=><div  style={{color:'blue'}}>test3</div>
            },{
                ID:4,
                title:"test4",
                content:()=><div  style={{color:'blue'}}>test4</div>
            },{
                ID:5,
                title:"test5",
                content:()=><div  style={{color:'blue'}}>test5</div>
            },{
                ID:6,
                title:"test6",
                content:()=><div  style={{color:'blue'}}>test6</div>
            }]
        }
    }

    closeAllTabs = ()=>{
        this.setState({
            workpalceTabItems:[],
            currentTab:''
        });
    }

    closeTab = (tabID)=>{
       var items = _.filter(this.state.workpalceTabItems,item=>item.ID!==tabID);
       this.changeTabs(items);  
    }

    closeOtherTabs = (tabID)=>{
        var items = _.filter(this.state.workpalceTabItems,item=>item.ID===tabID);
        this.changeTabs(items);
    }

    closeToRightTabs = (tabID)=>{
        var items;
        items = _.slice(this.state.workpalceTabItems,0,_.findIndex(this.state.workpalceTabItems,item=>item.ID===tabID)+1);
        this.changeTabs(items);
    }

    changeTabs=(items)=>{
        var index;
        index = _.findIndex(items,item=>item.ID===this.state.currentTab);
        if(index>=0){
            this.setState({
                workpalceTabItems:items
            });
        } else {
            this.setState({
                workpalceTabItems:items,
                currentTab:items.length>0?items[items.length-1].ID:''
            });
        }     
    }

    componentDidMount(){
        window.addEventListener("resize",this.winSizeChanaged);
        window.addEventListener("mouseup",this.documentMouseUp)
        CommandCenter.command(Commands.Tabs.CloseAll).register(this.closeAllTabs)
        CommandCenter.command(Commands.Tabs.Close).register(this.closeTab)
        CommandCenter.command(Commands.Tabs.CloseOthers).register(this.closeOtherTabs)
        CommandCenter.command(Commands.Tabs.CloseToRight).register(this.closeToRightTabs)

        this.setState({
            workplaceWidth:this.domElement.clientWidth - FrameStyle.DefaultWidthHeight.LeftMenuWidth-this.state.leftMenuContentWidth
        })
    }

    componentWillUnmount(){
        window.removeEventListener("resize",this.winSizeChanaged);
        window.removeEventListener("mouseup",this.documentMouseUp);
    }

    tabsOnchange(tabs){
        this.setState({
            workpalceTabItems:tabs
        });
    }

    domRef = (dom)=>{
        this.domElement = dom;
    }

    winSizeChanaged = ()=>{
        var maxWidth,
            maxHeight;
        maxWidth = this.getMaxLeftMenuContextWidth();
        maxHeight = this.getMaxConsoleHeight();

        maxWidth = maxWidth < Fixed_Blank ? Fixed_Blank : maxWidth;
        maxHeight = maxHeight < Fixed_Blank ? Fixed_Blank : maxHeight;
        if(this.state.leftMenuContentWidth>=maxWidth){
            this.changeLeftMenuContentWidth(maxWidth);
        } else {
            this.setState({
                workplaceWidth:this.domElement.clientWidth-FrameStyle.DefaultWidthHeight.LeftMenuWidth-this.state.leftMenuContentWidth
            });
        }
        if(this.state.consoleHeight>=maxHeight){
            this.changeConsoleHeight(maxHeight);
        }
    }

    getMaxLeftMenuContextWidth = ()=>{
        return this.domElement.clientWidth - FrameStyle.DefaultWidthHeight.LeftMenuWidth - Fixed_Blank;
    }

    getMaxConsoleHeight = ()=>{
        return this.domElement.clientHeight - FrameStyle.DefaultWidthHeight.StatusBarHeight - Fixed_Blank;
    }

    changeLeftMenuContentWidth = (width,other)=>{
        this.setState({
            leftMenuContentWidth:width,
            workplaceWidth:this.domElement.clientWidth-FrameStyle.DefaultWidthHeight.LeftMenuWidth-width,
            ...other
        });
    }

    changeConsoleHeight = (height)=>{
        let _this = this;
        this.oldConsoleHeight = height;
        this.setState({
            consoleHeight:height
        });
     }

    mouseMove = (e)=>{
        var x,
            y;
   
        x =  e.clientX - FrameStyle.DefaultWidthHeight.LeftMenuWidth;
        y =  (this.domElement.clientHeight-e.clientY) - FrameStyle.DefaultWidthHeight.StatusBarHeight;
        if(this.isDragging===true){
            if(this.isColResized){
                if(x===FrameStyle.DefaultWidthHeight.LeftMenuContentWidth/2){
                   this.changeLeftMenuContentWidth(FrameStyle.DefaultWidthHeight.LeftMenuContentWidth);
                } else if(x<=FrameStyle.DefaultWidthHeight.LeftMenuContentWidth/2){
                    this.changeLeftMenuContentWidth(0);
                } else if(x>=FrameStyle.DefaultWidthHeight.LeftMenuContentWidth/2 && x<=this.getMaxLeftMenuContextWidth()){
                    this.changeLeftMenuContentWidth(x);
                }
            } else if(this.isRowResized) {
                if(y===FrameStyle.DefaultWidthHeight.ConsoleHeight/2){
                    this.changeConsoleHeight(FrameStyle.DefaultWidthHeight.ConsoleHeight);
                 } else if(y<=FrameStyle.DefaultWidthHeight.ConsoleHeight/2){
                     this.changeConsoleHeight(0);
                 } else if(y>FrameStyle.DefaultWidthHeight.ConsoleHeight/2 && y<=this.getMaxConsoleHeight()){
                     this.changeConsoleHeight(y);
                 }
            }
        } else {
            this.isColResized =  Math.abs(x-this.leftMenuContentDom.clientWidth)<=3;
            this.isRowResized =  Math.abs(y-this.state.consoleHeight)<=3;
            if(this.isColResized) {
                e.target.style.cursor = 'col-resize';
            } else if(this.isRowResized) {
                e.target.style.cursor = 'row-resize';    
            } else {
                e.target.style.cursor = 'default';
            }
        } 
        //拖动tab //按下鼠标左键
        if(this.isDragging && this.cloneDraggedTabDom){
            e.target.style.cursor = 'default';
            this.cloneDraggedTabDom.style.left = e.clientX-this.draggingTabPostion.x + "px";
            this.cloneDraggedTabDom.style.top = e.clientY-this.draggingTabPostion.y + "px";;
        }
        e.preventDefault();
        return false;
    }

    mouseDown = (e)=>{
        this.isDragging = true;
    }

    resetDragginTabStatus = ()=>{
        //拖动tab
        DomUtil.removeDom(this.cloneDraggedTabDom);
        DomUtil.removeDom(this.coverDom);
        this.targetTab= null;
        this.draggingTab = null;
    }

    documentMouseUp = (e)=>{
        if(this.targetTab && this.draggingTab){
            this.exchangeTab(this.draggingTab.ID,this.targetTab.ID);
        }
        this.resetDragginTabStatus();
    }

    mouseUp = (e)=>{
        this.isDragging = false;  
    }

    createCoverDom = (sourceDom)=>{
        var coverDom,
            position;
        position = DomUtil.getElememtnPosition(sourceDom);
        coverDom = document.createElement("div");
        coverDom.style.opacity = 0.3;
        coverDom.style.zIndex = 666;
        coverDom.style.border = "1px solid lightgray";
        coverDom.style.position = "fixed";
        coverDom.style.background = "lightgray";
        coverDom.style.left = `${position.x}px`;
        coverDom.style.top = `${position.y}px`;
        coverDom.style.width = `${sourceDom.clientWidth}px`;
        coverDom.style.height = `${sourceDom.clientHeight}px`;
        return coverDom;
    }

    exchangeTab = (source,target)=>{
        var sIndex,tIndex,tabItems;

        tabItems = this.state.workpalceTabItems;
        if(source !==target){
            tIndex = _.findIndex(tabItems,item=>item.ID===target);
            sIndex = _.findIndex(tabItems,item=>item.ID===source);
            if(tIndex<0){
                tabItems = [
                    ...tabItems.slice(0,sIndex),
                    ...tabItems.slice(sIndex+1),
                    tabItems[sIndex]
                ]
            } else if(sIndex<tIndex) {
                tabItems = [
                    ...tabItems.slice(0,sIndex),
                    ...tabItems.slice(sIndex+1,tIndex),
                    tabItems[sIndex],
                    ...tabItems.slice(tIndex)
                ]
            } else if(sIndex>tIndex){
                tabItems = [
                    ...tabItems.slice(0,tIndex),
                    tabItems[sIndex],
                    ...tabItems.slice(tIndex,sIndex),
                    ...tabItems.slice(sIndex+1)
                ]
            }
            this.setState({
                workpalceTabItems:tabItems
            });
            
        }
    }

    mouseOverTab = (e,tab)=>{
        if(this.isDragging && this.draggingTab){
            this.targetTab = tab;
            DomUtil.removeDom(this.coverDom);
            if(this.targetTab.ID !== this.draggingTab.ID){
                this.coverDom = this.createCoverDom(tab.dom);
                document.documentElement.appendChild(this.coverDom);
            }
        }
    }

    createDraggingDom = (e,tab)=>{
        DomUtil.removeDom(this.cloneDraggedTabDom);
        this.cloneDraggedTabDom = tab.dom.cloneNode(true);
        this.draggingTabPostion = DomUtil.getElememtnPosition(tab.dom);
        this.draggingTabPostion = {x:e.clientX-this.draggingTabPostion.x,y:e.clientY-this.draggingTabPostion.y};
        this.cloneDraggedTabDom.style = "border:1px solid #343843;z-index:999;position:fixed;background:#343843;";
        document.documentElement.appendChild(this.cloneDraggedTabDom);
    }

    dragTabStart = (e,tab)=>{
        this.draggingTab = tab;
        this.createDraggingDom(e,tab);
    }

    leftMenuClick = (key)=>{
        let width = this.leftMenuContentDom.clientWidth<=0?FrameStyle.DefaultWidthHeight.LeftMenuContentWidth:this.leftMenuContentDom.clientWidth;
        let values = {};
        if(width!==this.state.leftMenuContentWidth){
            if(key!==this.state.selectedKey){
                values.selectedKey = key;
            }
            this.changeLeftMenuContentWidth(width,values);
        } else {
            if(key!==this.state.selectedKey){
                this.setState({
                    selectedKey:key
                });
            }
        }
    }

    changeHeight = (height)=>{
        if(height===undefined){
            this.setState({consoleHeight:this.oldConsoleHeight});
        } else if(height>=0){
            this.setState({consoleHeight:height});
        }  
    }

    setLeftMenuContentDom = (ref)=>{
        this.leftMenuContentDom = ref;
    }

    setConsoleDom = (ref)=>{
        this.consoleDom = ref;
    }

    handleTabChanage = (tab)=>{
        this.setState({
            currentTab:tab.ID
        });
    }

    handleCloseTab = (tab)=>{
        var items;
        items = _.filter(this.state.workpalceTabItems,item=>item.ID!==tab.ID);
        if(tab.ID===this.state.currentTab && items.length>0){
            this.setState({
                workpalceTabItems:items,
                currentTab:items[items.length-1].ID,
            });
        } else {
            this.setState({
                workpalceTabItems:items
            });
        }      
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

    render() {
        return (
            <div style={FrameStyle.Container} onMouseMove={this.mouseMove} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} ref={this.domRef}>
                <LeftMenu onClick={this.leftMenuClick}/>
                <div style={FrameStyle.InnerContainer}>
                    <LeftMenuContent width={this.state.leftMenuContentWidth} selectedKey={this.state.selectedKey} setRef={this.setLeftMenuContentDom}/>
                    <div style={FrameStyle.WorkplaceContainer} >
                        <WorkPlace tabs={this.state.workpalceTabItems} onDragTabStart={this.dragTabStart} onMouseOverTab={this.mouseOverTab} width={this.state.workplaceWidth} currentTab={this.state.currentTab} onTabChange={this.handleTabChanage} closeTab={this.handleCloseTab}/>
                        <Console height={this.state.consoleHeight}  onChangeHeight={this.changeHeight} setRef={this.setConsoleDom}/>
                    </div>
                </div>
                <StatusBar />
            </div>
        );
    }

}