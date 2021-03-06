var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Tool = (function () {
    function Tool() {
    }
    /**
     * 获取DirectX坐标系弧度
     */
    Tool.getAngelByUI = function (_start, _end) {
        var distance = egret.Point.distance(_start, _end); //两点间的距离
        var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
        if (point.x == 0 && point.y > 0) {
            //return Math.PI * 0.5*(180/Math.PI);弧度转角度   弧度**(180/Math.PI);
            return Math.PI * 0.5; //弧度
        }
        else if (point.x == 0 && point.y < 0) {
            return Math.PI * 1.5;
        }
        else if (point.x > 0 && point.y >= 0) {
            return Math.atan(Math.abs(point.y / point.x));
        }
        else if (point.x < 0 && point.y >= 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5);
        }
        else if (point.x > 0 && point.y < 0) {
            return Math.atan(point.y / point.x); //对于Egret而言这个弧度跟OpenGL不同,大家有没有注意到？
        }
        else if (point.x < 0 && point.y < 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI);
        }
        return 0;
    };
    return Tool;
}());
__reflect(Tool.prototype, "Tool");
