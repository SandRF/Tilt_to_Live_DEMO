class GameSence extends eui.Component {

    public img_bg: eui.Image;
    public player: eui.Image;
    public img_broder: eui.Image;


    //存储触摸移动的初始点
    private posX: number;
    private posY: number;

    //边界四个坐标
    private broderX_left: number;
    private broderX_right: number;
    private broderY_top: number;
    private broderY_bottom: number;

    // //点
    private ex_point: egret.Point;
    private cur_point: egret.Point;

    //移动速度
    private speed: number = 2;

    //测试用
    num_frame = 0;
    num_move = 0;


    public constructor() {
        super();
        this.skinName = "GameSenceSkin";
    }

    protected createChildren() {
        super.createChildren();
        this.init();
    }

    private init() {

        this.player.anchorOffsetX = this.player.width / 2;
        this.player.anchorOffsetY = this.player.height / 2;



        //边界内左上角的本地坐标      
        let point: egret.Point = new egret.Point(21, 23);
        //算出边界四个点坐标
        this.broderX_left = this.img_broder.x + point.x;
        this.broderX_right = this.img_broder.x + this.img_broder.width - point.x;
        this.broderY_top = this.img_broder.y + point.y;
        this.broderY_bottom = this.img_broder.y + this.img_broder.height - point.y;

        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        //按钮用touchtap


    }

    private touchBegin(e: egret.TouchEvent) {
        //记录点击的位置
        this.posX = e.stageX;
        this.posY = e.stageY;

        this.ex_point = new egret.Point();
        this.cur_point = new egret.Point();

        let dot = new Dot();
        this.addChild(dot);

    }

    //TODO 跟随触摸移动 简单粗暴箭头的移动距离就是我触摸移动的距离的2倍
    //TODO 箭头指向 //旋转 以锚点为中心,顺时针旋转 //算出箭头自身的向量 move的点的向量 夹角
    private touchMove(e: egret.TouchEvent) {
        // console.log(`move:${++this.num_move}`)



        //计算移动的距离
        let offsetX: number = e.stageX - this.posX;
        let offsetY: number = e.stageY - this.posY;

        //需要移动到的坐标
        let newPosX = this.player.x + this.speed * offsetX;
        let newPosY = this.player.y + this.speed * offsetY;

        //判断是否在边界内 -是 : 赋值给player
        if (newPosX > this.broderX_left && newPosX < this.broderX_right) {
            this.player.x = newPosX;
        }
        if (newPosY > this.broderY_top && newPosY < this.broderY_bottom) {
            this.player.y = newPosY;
        }

        this.ex_point.x = this.posX;
        this.ex_point.y = this.posY;
        this.cur_point.x = e.stageX;
        this.cur_point.y = e.stageY;
        let rad = Tool.getAngelByUI(this.ex_point, this.cur_point);
        if (rad > Math.PI) {
            rad -= 2 * Math.PI
        } else if (rad < -Math.PI) {
            rad += 2 * Math.PI;
        }
        // this.player.rotation = rad / Math.PI * 180 + 90;
        // console.log(`别人封装的rad`, rad);
        // console.log(`加上偏移量`, this.player.rotation)

        let angle: number = rad / Math.PI * 180 + 90;
        this.tw_rotate(angle);
        //记录下当前的坐标
        this.posX = e.stageX;
        this.posY = e.stageY;
    }

    private touchEnd(e: egret.TouchEvent) {
        // console.log("touchend")
        // this.num_move = 0;
        // this.num_frame = 0;
        // this.removeEventListener(egret.Event.ENTER_FRAME, this.frame, this);
    }

    frame() {
        console.log(`帧: ${++this.num_frame}`);
    }

    //更新旋转tween

    private tw_rotate(angle: number) {
        egret.Tween.removeTweens(this.player);
        let tw: egret.Tween = egret.Tween.get(this.player);

        console.log(angle);
        if (angle >= 180) {
            angle -= 360 * (Math.floor(angle / 360) + 1);
        } else if (angle <= -180) {
            angle += 360 * (Math.floor(angle / -360) + 1);
        }
        console.log(`处理`, angle)
        //判断顺时针转还是逆时针转
        tw.to({ rotation: angle }, 100);
    }


    //TODO 需要一个对象池存放dot
}