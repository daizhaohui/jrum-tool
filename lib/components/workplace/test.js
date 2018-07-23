import React,{Component}  from 'react';

export default class TabTest extends Component{
    constructor(props){
        super(props);
    }

    sendMessage = ()=>{
       g_console_output.exeCommand("ls -ll");
    }

    render(){
        return (
            <div>
                <br />
                <a onClick={this.sendMessage}>sending</a>
            </div>
        );
    }


}