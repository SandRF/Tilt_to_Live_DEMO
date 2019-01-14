class Options extends eui.Component {

    public btn_music: Btn_option;
    public btn_effect: Btn_option;
    public btn_vibrator: Btn_option;
    public btn_return: eui.Image;


    public constructor() {
        super();
        this.skinName = "OptionsSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {
        this.btn_music.init("musicOn_png", "musicOff_png");
        this.btn_effect.init("soundOn_png", "soundOff_png");
        //TODO 振动按钮素材待替换
        this.btn_vibrator.init("musicOn_png", "musicOff_png");

        //音乐开关
        this.btn_music.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SoundManager.Instance.isMusicOn = !SoundManager.Instance.isMusicOn;
            this.btn_music.changeState(SoundManager.Instance.isMusicOn);
        }, this);
        //音效开关
        this.btn_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
            // this.btn_music.changeState(SoundManager.Instance.isEffect);
        }, this);
        //振动开关
        this.btn_vibrator.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            // SoundManager.Instance.isEffect = !SoundManager.Instance.isEffect;
            // this.btn_music.changeState(SoundManager.Instance.isEffect);
        }, this);
        //返回按钮
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SenceManager.Instance.removeSence(SenceManager.Instance.options);
        }, this);
    }
}