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
        this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    };
    /**
     * 追踪箭头
     */
    Dot.prototype.Track = function () {
        var offsetX = SenceManager.Instance.gameSence.player.x - this.x;
        var offsetY = SenceManager.Instance.gameSence.player.y - this.y;
        var rad = Math.atan2(offsetY, offsetX);
        var speedX = Math.cos(rad) * this.speed;
        var speedY = Math.sin(rad) * this.speed;
        // //需要移动到的坐标
        this.x += speedX;
        this.y += speedY;
    };
    //每帧更新
    Dot.prototype.frame = function () {
        this.Track();
    };
    return Dot;
}(eui.Component));
__reflect(Dot.prototype, "Dot");
