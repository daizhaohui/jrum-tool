import React,{Component} from 'react';
import FrameStyle from './frameStyle';
import LeftMenuItems from './LeftMenuItems';

export default class LeftMenuContent extends Component{
    constructor(props){
        super(props);
    }

    setDomRef = (ref)=>{
        this.props.setRef(ref);
    }

    render(){
        let {width,selectedKey} = this.props;
        let menuStyle = {
            ...FrameStyle.LeftMenuContent,
            width:`${width}px`,
            height:'100%',
            background:'#20252c',
            color:'white'
        };
        let contentStyle = {
            width:`${width}px`,
            height:'100%'
        }
        
        return (
            <div style={menuStyle} ref={this.setDomRef}>
                {
                    LeftMenuItems.map(item=>{
                        let MenuItem = item.component;
                        let cStyle = {
                            ...contentStyle,
                            display: selectedKey===item.key?'block':'none'
                        }
                        return (
                            <div style={cStyle} key={item.key}>
                                <MenuItem />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}