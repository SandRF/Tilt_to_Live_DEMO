class Player extends eui.Component {

    isAlive: boolean = true;
    

    public constructor() {
        super();
        this.skinName = "PlayerSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    }

    //检测是否碰撞到dot
    private isHitDot(){

    }

    //每帧更新
    public onFrame() {

    }
}   