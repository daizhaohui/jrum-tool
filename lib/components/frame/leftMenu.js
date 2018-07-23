import React,{Component} from 'react';
import FrameStyle from './frameStyle';
import {Icon} from 'antd';
import {Functions} from '../../common/const'
import LeftMenuItems from './LeftMenuItems';
import classNames from 'classnames';

const MenuIconStyle = {
    fontSize:28
}

const LeftMenuItemStyle = {
    width:FrameStyle.DefaultWidthHeight.LeftMenuWidth,
    height:44,
    display:'flex',
    justifyContent: 'center',
    paddingTop:'10px',
    color:'#9499a2'
}

class LeftMenuItem extends Component{
    constructor(props){
        super(props);
    }

    menuClick = ()=>{
        const {name,onClick} = this.props;
        onClick && onClick(name);
    }

    render() {
        let {icon,name,selectedKey} = this.props;
        return (
            <div onClick={this.menuClick} style={LeftMenuItemStyle}>
                <span className={classNames({iconSelected:selectedKey===name},'icon','iconfont',`${icon}`)}></span>
            </div>
        );
    }
}

export default class LeftMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey:''
        }
    }

    menuClick = (key)=>{
        let {onClick}  = this.props;
        this.setState({
            selectedKey:key
        });
        onClick && onClick(key);
    }

    render(){
        return (
            <div style={FrameStyle.LeftMenu}>
            {
                LeftMenuItems.map(item=>{
                    return (
                        <LeftMenuItem name={item.key} key={item.key} onClick={this.menuClick} icon={item.icon} selectedKey={this.state.selectedKey}/>
                    );
                })
            }
            </div>
        );
    }
}