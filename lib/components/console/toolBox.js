import React,{Component} from 'react';
import { Select,Icon } from 'antd';
import _ from 'lodash';
import StrUtil from '../../utils/strUtil';
const Option = Select.Option;

const Styles = {
    icon:{
        fontSize: 20, 
        color: 'white'
    }
};
export default class ConsoleToolBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            options:['c1'],
            upOrDownIcon:'up',
            selectOption:'c1'
        }
    }

    handleChange = (value)=>{
        this.setState({
            selectOption:value
        });
        this.props.change(value);
    }

    foldOrUnFold = ()=>{
        var icon = this.state.upOrDownIcon;
        if(icon==="up"){
            icon = "down";
            this.props.unfold();
        } else {
            icon = "up";
            this.props.fold();
        }
        this.setState({
            upOrDownIcon:icon
        });
    }

    addConsole = ()=>{
        var options,
        selectOption;
    
        options = this.state.options;
        if(options.length>=6){
            return;
        }
        selectOption = StrUtil.randomStr(9);
        options = [
            ...this.state.options,
            selectOption
        ];
        this.setState({
            options:options,
            selectOption:selectOption
        });
        this.props.add(selectOption);
    }

    removeConsole = ()=>{
        var options,
            selectOption;
        
        options = this.state.options;
        selectOption = this.state.selectOption;
        if(options.length>1){
            options = _.filter(options,item=>item!==selectOption);
            this.setState({
                options:options,
                selectOption:options[0]
            });
            this.props.remove(selectOption);
        } else {
            this.props.close();
        }
    }

    closeConsole = ()=>{
        let {close} = this.props;
        close();
    }

    mouseMove = (e)=>{
        e.target.style.cursor = 'pointer';
        e.stopPropagation();   
    }

    componentDidMount(){
 
    }

    render(){
        let {itemsInVisible} = this.props;
        return (
            <div className="consoleToolBox">
                <div  style={{display:itemsInVisible.select?'none':'block',cursor:'pointer'}} className="item" onMouseMove={this.mouseMove}>
                    <Select value={`${this.state.selectOption}`} size="small" style={{ width: 80 }} onChange={this.handleChange}>
                        {
                            this.state.options.map((item,index)=>{
                                return (
                                    <Option value={item} key={item}>{index+1}</Option>
                                );
                            })
                        }
                    </Select>
                </div>
                <div  onClick={this.addConsole} style={{display:itemsInVisible.add?'none':'block'}} className="item">
                    <Icon type="plus" style={Styles.icon}/>
                </div>
                <div  onClick={this.removeConsole} style={{display:itemsInVisible.delete?'none':'block'}} className="item">
                    <Icon type="delete" style={Styles.icon}/>
                </div>
                <div  onClick={this.foldOrUnFold} className="item">
                    <Icon type={this.state.upOrDownIcon} style={Styles.icon} />
                </div>
                <div  onClick={this.closeConsole} className="item">
                    <Icon type="close" style={Styles.icon}/>
                </div>
             <style jsx="true">{`
                    .consoleHeader .consoleToolBox{
                        flex:1;
                        height:44px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                    }

                    .consoleToolBox .item .anticon{
                        cursor:pointer!important;
                    }

                    .consoleHeader .consoleToolBox .item{
                        margin:0 10px 0 10px;
                    }
                `}
                </style>
            </div>
        )
    }


}