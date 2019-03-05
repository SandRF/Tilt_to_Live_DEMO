var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Dot = (function (_super) {
    __extends(Dot, _super);
    function Dot() {
        var _this = _super.call(this) || this;
        _this.speed = 1;
        _this.skinName = "DotSkin";
        return _this;
    }
    Dot.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    Dot.prototype.init = function () {
        //测试用的初始坐标
        this.x = 0;
        this.y = 0;
        this.distance = SenceManager.Instance.gameSence.player.height / 2 + this.height / 2;
        this.addDotEvent();
    };
    Dot.prototype.addDotEvent = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    Dot.prototype.removeDotEvent = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    /**
     * 追踪箭头
     */
    Dot.prototype.Track = function () {
        var playerX = SenceManager.Instance.gameSence.player.x;
        var playerY = SenceManager.Instance.gameSence.player.y;
        var offsetX = playerX - this.x;
        var offsetY = playerY - this.y;
        var rad = Math.atan2(offsetY, offsetX);
        var speedX = Math.cos(rad) * this.speed;
        var speedY = Math.sin(rad) * this.speed;
        // //需要移动到的坐标
        this.x += speedX;
        this.y += speedY;
        if (offsetX <= this.distance && offsetY <= this.distance) {
            var ishit = this.hitTestPoint(playerX, playerY);
            console.log(ishit);
            //发起一个事件? 游戏结束
            // GameManager.Instance.gameOver();
        }
    };
    //每帧更新 性能消耗太高了  能不能用一个帧事件把所有都更新?
    Dot.prototype.frame = function () {
        this.Track();
    };
    Dot.prototype.hitTestP = function (obj1, obj2) {
        var rect1 = obj1.getBounds(); //获取显示对象的测量边界
        var rect2 = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        //此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
        return rect1.intersects(rect2);
    };
    return Dot;
}(eui.Component));
__reflect(Dot.prototype, "Dot");
