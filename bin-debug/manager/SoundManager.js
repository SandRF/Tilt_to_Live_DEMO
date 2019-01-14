var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        var _this = this;
        this.ismenuMsuciComplete = false;
        this.menuMusic = new egret.Sound();
        this.menuMusic.load("resource/assets/Game/sound/classic_theme.mp3");
        this.menuMusic.addEventListener(egret.Event.COMPLETE, function () {
            _this.ismenuMsuciComplete = true;
        }, this);
    }
    Object.defineProperty(SoundManager, "Instance", {
        get: function () {
            if (!SoundManager._manager) {
                SoundManager._manager = new SoundManager();
            }
            return SoundManager._manager;
        },
        enumerable: true,
        configurable: true
    });
    SoundManager.prototype.playMenuMusic = function () {
        if (this.ismenuMsuciComplete && this.isMusic && this.menuMusic_channel == null) {
            this.menuMusic_channel = this.menuMusic.play(0, 0);
            //TODO 设置音量,从本地读取
            this.menuMusic_channel.volume = 1;
        }
    };
    SoundManager.prototype.stopMenuMusic = function () {
        if (this.menuMusic_channel) {
            this.menuMusic_channel.stop();
            this.menuMusic_channel = null;
        }
    };
    Object.defineProperty(SoundManager.prototype, "isMusic", {
        //存储设置到本地
        //背景音乐
        get: function () {
            var ret = egret.localStorage.getItem("isMusic");
            if (ret == "true" || !ret) {
                this._isMusic = true;
            }
            else {
                this._isMusic = false;
            }
            return this._isMusic;
        },
        set: function (b) {
            this._isMusic = b;
            egret.localStorage.setItem("isMusic", b.toString());
            if (b) {
                //播放声音
                this.playMenuMusic();
            }
            else {
                //关闭声音
                this.stopMenuMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
