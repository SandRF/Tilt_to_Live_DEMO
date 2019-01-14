class SoundManager {
    // 音频文档 https://goo.gl/TtBvQp
    private static _manager: SoundManager;
    public static get Instance() {
        if (!SoundManager._manager) {
            SoundManager._manager = new SoundManager();
        }
        return SoundManager._manager;
    }

    //菜单界面音乐的对象以及加载状态
    private menuMusic: egret.Sound;
    private menuMusic_channel: egret.SoundChannel;
    private ismenuMsuciComplete: boolean = false;

    //TODO 游戏背景音乐--playBGM , stopBGM

    //TODO 各种音效--playEffect , stopEffect

    /**是否播放音乐 */
    private _isMusicOn: boolean;
    /**是否播放音效 */
    private _isEffectOn: boolean;
    /**是否开启振动 */
    private _vibrator: boolean;

    public constructor() {
        this.menuMusic = new egret.Sound();
        this.menuMusic.load("resource/assets/Game/sound/classic_theme.mp3");
        this.menuMusic.addEventListener(egret.Event.COMPLETE, () => {
            this.ismenuMsuciComplete = true;
        }, this);
    }

    /**播放菜单界面背景音乐 */
    public playMenuMusic() {
        if (this.ismenuMsuciComplete && this.isMusicOn && this.menuMusic_channel == null) {
            this.menuMusic_channel = this.menuMusic.play(0, 0);
            //TODO 设置音量,从本地读取
            this.menuMusic_channel.volume = 1
        }
    }
    /**停止菜单界面背景音乐 */
    public stopMenuMusic() {
        if (this.menuMusic_channel) {
            this.menuMusic_channel.stop();
            this.menuMusic_channel = null;
        }
    }

    //TODO 补全游戏BGM控制方法
    /**播放游戏BGM */
    public playBGM() {

    }
    /**关掉游戏BGM */
    public stopBGM() {

    }

    //TODO 可能需要根据传入的参数来播放对应的音效
    /** 播放游戏音效 */
    public playEffect() {

    }
    /**关掉(重置?)游戏音效 */
    public stopEffect() {

    }


    //存储设置到本地

    //背景音乐
    public get isMusicOn() {
        let ret = egret.localStorage.getItem("isMusicOn");
        if (ret == "true" || !ret) {
            this._isMusicOn = true;
        } else {
            this._isMusicOn = false;
        }
        return this._isMusicOn;
    }

    public set isMusicOn(b: boolean) {
        this._isMusicOn = b;
        egret.localStorage.setItem("isMusicOn", b.toString());

        //TODO 现在是设置了就播放,需要修改
        if (b) {
            //播放声音
            this.playMenuMusic();
        } else {
            //关闭声音
            this.stopMenuMusic();
        }

    }

    //音效
    public get isEffectOn() {
        let ret = egret.localStorage.getItem("isEffectOn");
        if (ret == "true" || !ret) {
            this._isEffectOn = true;
        } else {
            this._isEffectOn = false;
        }
        return this._isEffectOn;
    }

    public set isEffectOn(b: boolean) {
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
    }


    //振动
    public get isVibrator() {
        let ret = egret.localStorage.getItem("isVibrator");
        if (ret == "true" || !ret) {
            this._vibrator = true;
        } else {
            this._vibrator = false;
        }
        return this._vibrator;
    }

    public set isVibrator(b: boolean) {
        this._vibrator = b;
        egret.localStorage.setItem("isVibrator", b.toString());
        //TODO 在需要调用振动的方法中,先判断振动开关
    }
}   