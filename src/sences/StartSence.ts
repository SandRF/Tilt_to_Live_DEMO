class StartSence extends eui.Component {

    public btn_newgame: eui.Image;
    public btn_options: eui.Image;
    public btn_highscores: eui.Image;

    public constructor() {
        super();
        this.skinName = "StartSenceSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {

        //测试 播放音乐 menu
        SoundManager.Instance.playMenuMusic();

        //添加按钮的点击事件
        this.btn_newgame.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SenceManager.Instance.addSence(SenceManager.Instance.gameSence);
            SenceManager.Instance.removeSence(this);
        }, this);

        this.btn_options.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

        }, this);

        //测试用
        this.btn_highscores.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SoundManager.Instance.isMusic = !SoundManager.Instance.isMusic;
        }, this);
    }
}