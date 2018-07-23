import React,{Component} from 'react';
import {Terminal} from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
import * as search from 'xterm/lib/addons/search/search';
import * as webLinks from 'xterm/lib/addons/webLinks/webLinks';
import * as winptyCompat from 'xterm/lib/addons/winptyCompat/winptyCompat';
import * as attach from 'xterm/lib/addons/attach/attach';
import EventBus from '../../common/eventBus';
import {clipboard} from 'electron';
import { runInThisContext } from 'vm';
const Remote = require('electron').remote;

const Styles = {
    container:{
        color:'white'
    }
}

Terminal.applyAddon(fit);
Terminal.applyAddon(webLinks);
Terminal.applyAddon(winptyCompat);
Terminal.applyAddon(attach);
Terminal.applyAddon(search);

export default class ConsoleOutput extends Component{
    constructor(props){
        super(props);
        let {ID} = this.props;
        this.ID = ID;
        this.isFocus = false;
        this.contentMenus = new Remote.Menu();
        this.contentMenus.append(new Remote.MenuItem({
            label:"Copy",
            click:()=>{
                this.copy();
            }
        }));
        this.contentMenus.append(new Remote.MenuItem({
            label:"Paste",
            click:()=>{
                this.paste();
            }
        }));
        this.contentMenus.append(new Remote.MenuItem({
            label:"SelectAll",
            click:()=>{
                this.selectAll();
            }
        }));
        this.contentMenus.append(new Remote.MenuItem({
            type:"separator"
        }));
        this.contentMenus.append(new Remote.MenuItem({
            label:"Clear",
            click:()=>{
                this.clear();
            }
        }));
    }

    copy(){
        if(this.xterm.hasSelection()){
            clipboard.writeText(this.xterm.getSelection());
        }
    }

    paste(){
        var text = clipboard.readText();
        if(text){
            this.xterm._core.send(text);
            this.xterm.focus();
        }
    }

    selectAll(){
        this.xterm.selectAll();
    }

    clear(){
        this.xterm.clear();
    }

    resizeTerm() {
        if(this.xterm){
            var cols = parseInt((this.container.clientWidth-this.xterm._core.viewport.scrollBarWidth) / this.xterm._core.renderer.dimensions.actualCellWidth);
            cols = cols < 60 ? 60 : cols;
            this.ptyProcess.resize(cols,6);
            this.xterm.fit();
        }
    }

    setRef = (ref)=>{
        this.container = ref;
        var sellOption = {
            ...g_shellOptions,
            cols:80,
            rows:6
        }
        if(!this.xterm){
            this.ptyProcess = g_pty.spawn(g_shell, [],g_shellOptions);
            this.xterm = new Terminal();
            this.xterm.open(this.container);
            this.xterm.winptyCompatInit();
            this.xterm.webLinksInit();
            this.xterm.on("blur",()=>{
                this.isFocus = false;
            });
            this.xterm.on("focus",()=>{
                this.isFocus = true;
            });
            this.xterm.on("data",(data)=>{
                this.ptyProcess.write(data);
            });
            this.ptyProcess.on("data",(data)=>{
                this.xterm.write(data);
            });
            this.xterm.fit();
        }
    }

    componentDidMount(){
  
    }

    componentDidUpdate(){
        this.resizeTerm();
    }

    keyDown = (e)=>{
        var canBePasted,
            canBeCopied,
            canSelectAll;
            
        canBePasted = false;
        if(g_os.isMac()){
            canBePasted = e.metaKey && e.keyCode === 86;
            canBeCopied = e.metaKey && e.keyCode === 91;
            canSelectAll = e.metaKey && e.keyCode === 65;
        } else {
            canBePasted = e.ctrlKey && e.keyCode === 86;
            canBePasted = e.ctrlKey && e.keyCode === 91;
            canSelectAll = e.altKey && e.keyCode === 65;
        }
        if (canBePasted){
            this.paste();
        }
        else if(canBeCopied){
            this.copy();
        }
        else if(canSelectAll){
            this.selectAll();
        }
        
    }

    mouseDown = (e)=>{
        if(e.button===2){
            this.contentMenus.items[0].enabled = this.xterm.hasSelection();
            this.contentMenus.popup(Remote.getCurrentWindow());
        }
    }

    componentWillUnmount(){
        try{
            if(g_os.isWindow()){
                this.ptyProcess.kill();
            } else {
                this.ptyProcess.kill(0);
            }
        }catch(e){
            console.log(e);
        }
    }

    render(){
        let {height,visible} = this.props;
        let style = {
            ...Styles.container,
            height:`${height}px`,
            display:visible?'block':'none'
        }
        return (
            <div style={style} ref={this.setRef} onKeyDown={this.keyDown} onMouseDown={this.mouseDown}>
            
            </div>
        );
    }


}