export default class DomUtil {
  static  getElememtnPosition(obj){
    var pos = {"top":0, "left":0};
      if (obj.offsetParent){
        while (obj.offsetParent){
          pos.top += obj.offsetTop;
          pos.left += obj.offsetLeft;
          obj = obj.offsetParent;
        }
      }else if(obj.x){
        pos.left += obj.x;
      }else if(obj.x){
        pos.top += obj.y;
      }
      return {x:pos.left, y:pos.top};
  }

  static removeDom(dom) {
      if(dom && dom.parentNode){
         dom.parentNode.removeChild(dom);
      }
      dom = null;
  }

}