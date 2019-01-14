class Tool {
    /**
     * 获取DirectX坐标系弧度
     */
    static getAngelByUI(_start: egret.Point, _end: egret.Point) {
        var distance = egret.Point.distance(_start, _end);//两点间的距离
        var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
        if (point.x == 0 && point.y > 0) {
            //return Math.PI * 0.5*(180/Math.PI);弧度转角度   弧度**(180/Math.PI);
            return Math.PI * 0.5      //弧度
        } else if (point.x == 0 && point.y < 0) {
            return Math.PI * 1.5;
        } else if (point.x > 0 && point.y >= 0) {
            return Math.atan(Math.abs(point.y / point.x));
        } else if (point.x < 0 && point.y >= 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5);
        } else if (point.x > 0 && point.y < 0) {
            return Math.atan(point.y / point.x); //对于Egret而言这个弧度跟OpenGL不同,大家有没有注意到？
        } else if (point.x < 0 && point.y < 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI);
        }
        return 0;
    }
}