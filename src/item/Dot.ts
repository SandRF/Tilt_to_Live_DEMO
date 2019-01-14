class Dot extends eui.Component {
    speed: number;

    public constructor() {
        super();
        this.speed = 1;
        this.skinName = "DotSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {
        //测试用的初始坐标
        this.x = 0;
        this.y = 0;
        // this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    }



    /**
     * 追踪箭头
     */
    public Track() {
        let offsetX: number = SenceManager.Instance.gameSence.player.x - this.x;
        let offsetY: number = SenceManager.Instance.gameSence.player.y - this.y;
        let rad: number = Math.atan2(offsetY, offsetX);
        let speedX = Math.cos(rad) * this.speed;
        let speedY = Math.sin(rad) * this.speed;

        // //需要移动到的坐标
        this.x += speedX;
        this.y += speedY;
    }

    //每帧更新
    public frame() {
        this.Track();
    }
}   