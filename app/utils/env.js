const args = process.argv;
const result = {
    isDebug: false,
    port: 8080
};

var i,
    len,
    index;
len = args.length;
for (i = 0; i < len; i++) {
    index = args[i].indexOf('--debug');
    if (index >= 0) {
        result.isDebug = true;
        try{
            result.port = parseInt(args[i].slice(index+7).trim());
        }catch(err){
            console.log(err);
        }
        break;
    }
}

module.exports = result;