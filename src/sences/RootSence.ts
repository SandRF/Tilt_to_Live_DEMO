class RootSence extends eui.Component {

    public img_bg: eui.Image;
    public sencesGroup: eui.Group;


    public constructor() {
        super();
        this.skinName = "RootSenceSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {
        let tw: egret.Tween = egret.Tween.get(this.img_bg, { loop: true })
        tw.to({ rotation: 360 }, 50000);

        //TODO 标记用,完成后清除
        this.sencesGroup.name = "sencesGroup"
        //设置根场景
        SenceManager.Instance._root = this.sencesGroup;

        //第一次进入rootsence,加载startsence
        SenceManager.Instance.addSence(SenceManager.Instance.startSence);
    }
}