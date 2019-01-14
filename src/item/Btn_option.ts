class Btn_option extends eui.Component {

    public btn_on: eui.Image;
    public btn_off: eui.Image;

    public constructor() {
        super();
        this.skinName = "Btn_optionSkin";
    }

    protected createChildren() {
        super.createChildren();
    }

    public init(on: string, off: string) {
        this.btn_on.texture = RES.getRes(on);
        this.btn_off.texture = RES.getRes(off);
    }

    public changeState(isstate: boolean) {
        if (isstate) {
            this.currentState = "ON";
        } else if (!isstate) {
            this.currentState = "OFF";
        }
    }
}