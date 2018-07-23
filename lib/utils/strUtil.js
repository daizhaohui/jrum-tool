
const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhijklmnoprstuvwxyz0123456789'; 

export default class StrUtil {

    static randomStr = (len)=>{
        var result,maxPos,i;
        maxPos = $chars.length;
        result = '';
        for (i = 0; i < len; i++) {
            result += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
    　　return result;
    }
}