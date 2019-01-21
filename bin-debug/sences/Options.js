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
var Options = (function (_super) {
    __extends(Options, _super);
    function Options() {
        var _this = _super.call(this) || this;
        _this.skinName = "OptionsSkin";
        return _this;
    }
    Options.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    Options.prototype.init = function () {
        var _this = this;
        this.btn_music.init("musicOn_png", "musicOff_png");
        this.btn_effect.init("soundOn_png", "soundOff_png");
        //TODO 振动按钮素材待替换
        this.btn_vibrator.init("musicOn_png", "musicOff_png");
        //音乐开关
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundManager.Instance.isMusicOn = !SoundManager.Instance.isMusicOn;
            _this.btn_music.changeState(SoundManager.Instance.isMusicOn);
        }, this);
        //音效开关
        this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
            // this.btn_music.changeState(SoundManager.Instance.isEffect);
        }, this);
        //振动开关
        this.btn_vibrator.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
            // this.btn_music.changeState(SoundManager.Instance.isEffect);
        }, this);
        //返回按钮
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SenceManager.Instance.removeSence(SenceManager.Instance.options);
        }, this);
    };
    return Options;
}(eui.Component));
__reflect(Options.prototype, "Options");
