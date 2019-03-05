var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameSence = (function (_super) {
    __extends(GameSence, _super);
    function GameSence() {
        var _this = _super.call(this) || this;
        //移动速度
        _this.speed = 2;
        //测试用
        _this.num_frame = 0;
        _this.num_move = 0;
        _this.skinName = "GameSenceSkin";
        return _this;
    }
    GameSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    GameSence.prototype.init = function () {
        //边界内左上角的本地坐标      
        var point = new egret.Point(21, 23);
        //算出边界四个点坐标
        this.broderX_left = this.img_broder.x + point.x;
        this.broderX_right = this.img_broder.x + this.img_broder.width - point.x;
        this.broderY_top = this.img_broder.y + point.y;
        this.broderY_bottom = this.img_broder.y + this.img_broder.height - point.y;
        this.addMoveEvent();
        //TODO player的帧事件,判断碰撞到的物体(道具/DOT),相应的方法
        this.addEventListener(egret.Event.ENTER_FRAME, this.isDotHit, this);
        //TODO 按钮用touchtap
        //TODO 生成道具
        //TODO 生成DOT 测试用代码
        var dot = new Dot();
        this.dotGroup.addChild(dot);
        this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            GameManager.Instance.stopGame();
        }, this);
        this.testBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            GameManager.Instance.resumeGame();
        }, this);
    };
    /**添加触摸移动的点击事件 */
    GameSence.prototype.addMoveEvent = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    /**移除触摸移动的点击事件  */
    GameSence.prototype.removeMoveEvent = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    GameSence.prototype.touchBegin = function (e) {
        //记录点击的位置
        this.posX = e.stageX;
        this.posY = e.stageY;
        this.ex_point = new egret.Point();
        this.cur_point = new egret.Point();
        //TODO 生成DOT 测试用代码
        var dot = new Dot();
        this.dotGroup.addChild(dot);
    };
    //移动也用tween动画??
    GameSence.prototype.touchMove = function (e) {
        //计算移动的距离
        var offsetX = e.stageX - this.posX;
        var offsetY = e.stageY - this.posY;
        //需要移动到的坐标
        var newPosX = this.player.x + this.speed * offsetX;
        var newPosY = this.player.y + this.speed * offsetY;
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
        var rad = Tool.getAngelByUI(this.ex_point, this.cur_point);
        if (rad > Math.PI) {
            rad -= 2 * Math.PI;
        }
        else if (rad < -Math.PI) {
            rad += 2 * Math.PI;
        }
        var angle = rad / Math.PI * 180 + 90;
        this.tw_rotate(angle);
        //记录下当前的坐标
        this.posX = e.stageX;
        this.posY = e.stageY;
    };
    GameSence.prototype.touchEnd = function (e) {
        egret.Tween.removeTweens(this.player);
    };
    //TODO 箭头指向 //旋转 以锚点为中心,顺时针旋转 //算出箭头自身的向量 move的点的向量 夹角
    //更新旋转tween
    GameSence.prototype.tw_rotate = function (angle) {
        //移除player上所有tween动画
        egret.Tween.removeTweens(this.player);
        var tw = egret.Tween.get(this.player);
        // console.log(`当前旋转: ${this.player.rotation}`)
        // console.log(`需要旋转到:`, angle);
        if (angle >= 180) {
            angle -= 360 * (Math.floor(angle / 360) + 1);
        }
        else if (angle <= -180) {
            angle += 360 * (Math.floor(angle / -360) + 1);
        }
        // console.log(`处理`, angle)
        //判断顺时针转还是逆时针转
        tw.to({ rotation: angle }, 100);
    };
    //TODO 需要一个对象池存放dot
    //TODO 处理碰撞检测
    GameSence.prototype.isDotHit = function () {
    };
    return GameSence;
}(eui.Component));
__reflect(GameSence.prototype, "GameSence");
