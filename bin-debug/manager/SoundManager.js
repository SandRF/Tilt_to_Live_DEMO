var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundManager = (function () {
    function SoundManager() {
        var _this = this;
        this.ismenuMsuciComplete = false;
        this.menuMusic = new egret.Sound();
        this.menuMusic.load("resource/assets/Game/sound/mainmenuloop.mp3");
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
    /**播放菜单界面背景音乐 */
    SoundManager.prototype.playMenuMusic = function () {
        if (this.ismenuMsuciComplete && this.isMusicOn && this.menuMusic_channel == null) {
            this.menuMusic_channel = this.menuMusic.play(0, 0);
            //TODO 设置音量,从本地读取
            this.menuMusic_channel.volume = 1;
        }
    };
    /**停止菜单界面背景音乐 */
    SoundManager.prototype.stopMenuMusic = function () {
        if (this.menuMusic_channel) {
            this.menuMusic_channel.stop();
            this.menuMusic_channel = null;
        }
    };
    //TODO 补全游戏BGM控制方法
    /**播放游戏BGM */
    SoundManager.prototype.playBGM = function () {
    };
    /**关掉游戏BGM */
    SoundManager.prototype.stopBGM = function () {
    };
    //TODO 可能需要根据传入的参数来播放对应的音效
    /** 播放游戏音效 */
    SoundManager.prototype.playEffect = function () {
    };
    /**关掉(重置?)游戏音效 */
    SoundManager.prototype.stopEffect = function () {
    };
    Object.defineProperty(SoundManager.prototype, "isMusicOn", {
        //存储设置到本地
        //背景音乐
        get: function () {
            var ret = egret.localStorage.getItem("isMusicOn");
            if (ret == "true" || !ret) {
                this._isMusicOn = true;
            }
            else {
                this._isMusicOn = false;
            }
            return this._isMusicOn;
        },
        set: function (b) {
            this._isMusicOn = b;
            egret.localStorage.setItem("isMusicOn", b.toString());
            //TODO 现在是设置了就播放,需要修改
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
    Object.defineProperty(SoundManager.prototype, "isEffectOn", {
        //音效
        get: function () {
            var ret = egret.localStorage.getItem("isEffectOn");
            if (ret == "true" || !ret) {
                this._isEffectOn = true;
            }
            else {
                this._isEffectOn = false;
            }
            return this._isEffectOn;
        },
        set: function (b) {
            this._isEffectOn = b;
            egret.localStorage.setItem("isEffectOn", b.toString());
            //TODO 现在是设置了就播放,需要修改
            // if (b) {
            //     //播放声音
            //     this.playMenuMusic();
            // } else {
            //     //关闭声音
            //     this.stopMenuMusic();
            // }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isVibrator", {
        //振动
        get: function () {
            var ret = egret.localStorage.getItem("isVibrator");
            if (ret == "true" || !ret) {
                this._vibrator = true;
            }
            else {
                this._vibrator = false;
            }
            return this._vibrator;
        },
        set: function (b) {
            this._vibrator = b;
            egret.localStorage.setItem("isVibrator", b.toString());
            //TODO 在需要调用振动的方法中,先判断振动开关
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
