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
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super.call(this) || this;
        _this.isAlive = true;
        _this.skinName = "PlayerSkin";
        return _this;
    }
    Player.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    Player.prototype.init = function () {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    //检测是否碰撞到dot
    Player.prototype.isHitDot = function () {
    };
    //每帧更新
    Player.prototype.onFrame = function () {
    };
    return Player;
}(eui.Component));
__reflect(Player.prototype, "Player");
