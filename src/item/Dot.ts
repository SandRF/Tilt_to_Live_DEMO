class Dot extends eui.Component {

    public speed: number;
    //碰撞检测的距离
    public distance: number;

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
        this.distance = SenceManager.Instance.gameSence.player.height / 2 + this.height / 2;
        this.addDotEvent();

    }

    public addDotEvent() {
        this.addEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    }

    public removeDotEvent() {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    }

    /**
     * 追踪箭头
     */
    public Track() {
        let playerX = SenceManager.Instance.gameSence.player.x;
        let playerY = SenceManager.Instance.gameSence.player.y;
        let offsetX: number = playerX - this.x;
        let offsetY: number = playerY - this.y;
        let rad: number = Math.atan2(offsetY, offsetX);
        let speedX = Math.cos(rad) * this.speed;
        let speedY = Math.sin(rad) * this.speed;
        // //需要移动到的坐标
        this.x += speedX;
        this.y += speedY;

        if (offsetX <= this.distance && offsetY <= this.distance) {
            let ishit: boolean = this.hitTestPoint(playerX, playerY)
            console.log(ishit);
            //发起一个事件? 游戏结束
            // GameManager.Instance.gameOver();
        }
    }

    //每帧更新 性能消耗太高了  能不能用一个帧事件把所有都更新?
    public frame() {
        this.Track();
    }

    public hitTestP(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        var rect1: egret.Rectangle = obj1.getBounds();//获取显示对象的测量边界
        var rect2: egret.Rectangle = obj2.getBounds();
        rect1.x = obj1.x;
        rect1.y = obj1.y;
        rect2.x = obj2.x;
        rect2.y = obj2.y;
        //此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
        return rect1.intersects(rect2);
    }
}   