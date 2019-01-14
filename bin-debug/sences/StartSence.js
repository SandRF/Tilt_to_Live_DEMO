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
var StartSence = (function (_super) {
    __extends(StartSence, _super);
    function StartSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "StartSenceSkin";
        return _this;
    }
    StartSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    StartSence.prototype.init = function () {
        var _this = this;
        //测试 播放音乐 menu
        SoundManager.Instance.playMenuMusic();
        //添加按钮的点击事件
        this.btn_newgame.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SenceManager.Instance.addSence(SenceManager.Instance.gameSence);
            SenceManager.Instance.removeSence(_this);
        }, this);
        this.btn_options.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
        }, this);
        //测试用
        this.btn_highscores.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundManager.Instance.isMusic = !SoundManager.Instance.isMusic;
        }, this);
    };
    return StartSence;
}(eui.Component));
__reflect(StartSence.prototype, "StartSence");
