const _appData = {

};

const _indexOfItem = (data,func)=>{
    var i,
        len;
    len = data.length;
    for(i=0;i<len;i++){
        if(func(data[i])===true){
            return i;
        }
    }
    return -1;
};

class CollectionData{
    constructor(name){
        this.name = name;
    }

    addItem(item){
        var data = _appData[this.name];
        _appData[this.name] = [
            ...data,
            item
        ];
        subscribes[this.name] && subscribes[this.name](_appData[this.name]);
    }

    removeItem(func){
        var index,
            data;
        data = _appData[this.name];
        index = _indexOfItem(data,func);
        if(index===0){
            _appData[this.name] = [
                ...data.slice(1)
            ];
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
        else if(index===data.length-1){
            _appData[this.name] = [
                ...data.slice(0,index)
            ]
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        } else if(index>0) {
            _appData[this.name] = [
                ...data.slice(0,index),
                ...data.slice(index+1)
            ];
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
    }

    updateItem(item,func){
        var index,
            data;
        data = _appData[this.name];
        index = _indexOfItem(data,func);
        if(index===0){
            _appData[this.name] = [
                item,
                ...data.slice(1)
            ];
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
        else if(index===data.length-1){
            _appData[this.name] = [
                ...data.slice(0,index),
                item
            ];
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        } else if(index>0) {
            _appData[this.name] = [
                ...data.slice(0,index),
                item,
                ...data.slice(index+1)
            ];
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
        }
    }

    clear(){
        var data =  _appData[this.name];
        data.splice(0,data.length);
        subscribes[this.name] && subscribes[namthis.name](_appData[this.name]);
    }

}

class ObjectData {
    constructor(name){
        this.name = name;
    }

    updateItem(name,value){
        _appData[this.name] = {
            ..._appData[this.name],
            ...{name:value}
        };
        subscribes[this.name] && subscribes[this.name](_appData[this.name]);
    }

    reomveItem(name){
       var pName,
          data,
          newData,
          isDeleted;

       data = _appData[this.name];
       isDeleted = false;
       newData = {};
       for(pName in data){
            if(name!==pName){
                newData[name] = data[pName];
            } else {
                isDeleted = true;
            }
       }
       if(isDeleted){
            _appData[this.name] = newData;
            subscribes[this.name] && subscribes[this.name](_appData[this.name]);
       }
    }
}

const subscribes = {

};

export default class AppStore{

    static getData=(name)=>{
        if(appData.name !== undefined){
            return appData.name
        }
        return null;
    }

    static collectionData=(name)=>{
       return new CollectionData(name);
    }

    static objectData=(name)=>{
        return new ObjectData(name);
    }

    static setData=(name,value)=>{
        appData[name] = value;
    }

   static subscribe=(name,func)=>{
        subscribes[name] = func;
    }

    static emit=(name)=>{
      var func = subscribes[name];
      if(func){
          func(appData[name]);
      }
    }

}