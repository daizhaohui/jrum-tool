const subscribe_commands = {

};

class Command {
    constructor(name){
        this.name = name;
        this.func = null;
    }

    /**
     * 执行命令
     */
    execute(){
        if(this.func===null){
           throw new Error(`命令：${this.name}还没有注册!`);
        }
        this.func.apply(null,Array.prototype.slice.call(arguments))
        return this;
    }

    /**
     * 注册命令
     */
    register(func){
        this.func = func;
        return this;
    }
}

export default class CommandCenter{

    static command(name){
        if(!subscribe_commands[name]){
            subscribe_commands[name] = new Command(name);
        }
        return subscribe_commands[name];
    }
}