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

    //点
    private ex_point: egret.Point;
    private cur_point: egret.Point;
    private ex_rad: number;

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
        this.player.rotation = -45;
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
        // console.log(`touchBegin X:`, e.stageX, `touchBegin Y:`, e.stageY);
        //记录点击的位置
        this.posX = e.stageX;
        this.posY = e.stageY;

        this.ex_point = new egret.Point();
        this.cur_point = new egret.Point();
    }

    //TODO 跟随触摸移动 简单粗暴箭头的移动距离就是我触摸移动的距离的2倍
    //TODO 箭头指向 //旋转 以锚点为中心,顺时针旋转 //算出箭头自身的向量 move的点的向量 夹角
    private touchMove(e: egret.TouchEvent) {
        //计算移动的距离
        let offsetX: number = e.stageX - this.posX;
        let offsetY: number = e.stageY - this.posY;

        //需要移动到的坐标
        let newPosX = this.player.x + 2 * offsetX;
        let newPosY = this.player.y + 2 * offsetY;
        // let newPosX = this.player.x + offsetX;
        // let newPosY = this.player.y + offsetY;
        //判断是否在边界内 -是 : 赋值给player
        if (newPosX > this.broderX_left && newPosX < this.broderX_right) {
            this.player.x = newPosX;
        }
        if (newPosY > this.broderY_top && newPosY < this.broderY_bottom) {
            this.player.y = newPosY;
        }

        //-------------------------------------------------------------------------------
        // //player的朝向
        let rad: number = Math.atan2(offsetY, offsetX);
        // console.log(`rad:`, rad);

        if (rad > Math.PI) {
            rad -= 2 * Math.PI
        } else if (rad < -Math.PI) {
            rad += 2 * Math.PI;
        }

        let angle: number = rad / Math.PI * 180 + 45;
        console.log(`angle:`, angle)

        this.player.rotation = angle;
        //-------------------------------------------------------------------------------
        //cocos
        // let keyRotate = (360 - 180 * Math.atan2(this.player.y - e.stageY, this.player.x - e.stageX) / Math.PI + 90) % 360;
        // 270 < this.player.rotation && 90 > angle ? this.player.rotation -= 360 : 90 > this.player.rotation && 270 < angle && (this.player.rotation += 360);
        // this.keySpeed += (l(this.keyX - this.x) + l(this.keyY - this.y)) / 60,
        // this.keySpeed += l(this.keyRotate - this.sprite.rotation) / 40;
        // console.log(keyRotate);

        // keyRotate = (360 - 180 * Math.atan2(offsetY, offsetX) /Math.PI + 90) % 360,
        // 270 < this.sprite.rotation && 90 > this.keyRotate ? this.sprite.rotation -= 360 : 90 > this.sprite.rotation && 270 < this.keyRotate && (this.sprite.rotation += 360),
        // this.keySpeed += (l(this.keyX - this.x) + l(this.keyY - this.y)) / 60,
        // this.keySpeed += l(this.keyRotate - this.sprite.rotation) / 40;

        //-------------------------------------------------------------------------------
        //网上找的封装好的方法
        // this.ex_point.x = this.posX;
        // this.ex_point.y = this.posY;
        // this.cur_point.x = e.stageX;
        // this.cur_point.y = e.stageY;
        // let rad = this.getAngelByUI(this.ex_point, this.cur_point);

        // console.log(`1`,this.player.rotation);

        // this.player.rotation = rad / Math.PI * 180 + 45;
        // console.log(`2`,this.player.rotation);


        //记录下当前的坐标
        this.posX = e.stageX;
        this.posY = e.stageY;
    }

    private touchEnd(e: egret.TouchEvent) {

    }

    /**
     * 获取DirectX坐标系弧度
     */
    public getAngelByUI(_start: egret.Point, _end: egret.Point) {
        var distance = egret.Point.distance(_start, _end);//两点间的距离
        var point = new egret.Point(_end.x - _start.x, _end.y - _start.y);
        if (point.x == 0 && point.y > 0) {
            //return Math.PI * 0.5*(180/Math.PI);弧度转角度   弧度**(180/Math.PI);
            return Math.PI * 0.5      //弧度
        } else if (point.x == 0 && point.y < 0) {
            return Math.PI * 1.5;
        } else if (point.x > 0 && point.y >= 0) {
            return Math.atan(Math.abs(point.y / point.x));
        } else if (point.x < 0 && point.y >= 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI * 0.5);
        } else if (point.x > 0 && point.y < 0) {
            return Math.atan(point.y / point.x); //对于Egret而言这个弧度跟OpenGL不同,大家有没有注意到？
        } else if (point.x < 0 && point.y < 0) {
            return (Math.atan(Math.abs(point.x / point.y)) + Math.PI);
        }
        return 0;

    }
}