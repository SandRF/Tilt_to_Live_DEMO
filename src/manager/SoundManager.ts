class SoundManager {
    // 音频文档 https://goo.gl/TtBvQp
    private static _manager: SoundManager;
    public static get Instance() {
        if (!SoundManager._manager) {
            SoundManager._manager = new SoundManager();
        }
        return SoundManager._manager;
    }

    private menuMusic: egret.Sound;
    private menuMusic_channel: egret.SoundChannel;
    private ismenuMsuciComplete: boolean = false;

    //是否在播放
    private _isMusic: boolean;


    public constructor() {
        this.menuMusic = new egret.Sound();
        this.menuMusic.load("resource/assets/Game/sound/classic_theme.mp3");
        this.menuMusic.addEventListener(egret.Event.COMPLETE, () => {
            this.ismenuMsuciComplete = true;
        }, this);
    }

    public playMenuMusic() {
        if (this.ismenuMsuciComplete && this.isMusic && this.menuMusic_channel == null) {
            this.menuMusic_channel = this.menuMusic.play(0, 0);
            //TODO 设置音量,从本地读取
            this.menuMusic_channel.volume = 1
        }
    }

    public stopMenuMusic() {
        if (this.menuMusic_channel) {
            this.menuMusic_channel.stop();
            this.menuMusic_channel = null;
        }
    }



    //存储设置到本地

    //背景音乐
    public get isMusic() {
        let ret = egret.localStorage.getItem("isMusic");
        if (ret == "true" || !ret) {
            this._isMusic = true;
        } else {
            this._isMusic = false;
        }
        return this._isMusic;
    }

    public set isMusic(b: boolean) {
        this._isMusic = b;
        egret.localStorage.setItem("isMusic", b.toString());
        if (b) {
            //播放声音
            this.playMenuMusic();
        } else {
            //关闭声音
            this.stopMenuMusic();
        }
    }
}   