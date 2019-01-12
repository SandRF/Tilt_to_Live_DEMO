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
        //添加按钮的点击事件
        this.btn_newgame.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SenceManager.getinstance().addSence(SenceManager.getinstance().gameSence);
            SenceManager.getinstance().removeSence(this);
        }, this);

        this.btn_options.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {

        }, this);

        //测试的HomeSence
        this.btn_highscores.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
            SenceManager.getinstance().addSence(SenceManager.getinstance().homeSence);
            SenceManager.getinstance().removeSence(this);
        }, this);
    }
}