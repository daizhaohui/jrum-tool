import React,{Component} from 'react';
import FrameStyle from './frameStyle';

export default class StatusBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={FrameStyle.StatusBar}>
                
            </div>
        );
    }
}