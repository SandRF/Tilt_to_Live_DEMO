var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameManager = (function () {
    function GameManager() {
        this.isgameover = false;
    }
    Object.defineProperty(GameManager, "Instance", {
        get: function () {
            if (!this._gameManager) {
                this._gameManager = new GameManager();
            }
            return this._gameManager;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 游戏结束
     */
    GameManager.prototype.gameOver = function () {
        this.stopGame();
        //TODO 其他处理
    };
    /**
     * 暂停游戏
     */
    GameManager.prototype.stopGame = function () {
        //移除移动相关的点击事件
        SenceManager.Instance.gameSence.removeMoveEvent();
        var dotGroup = SenceManager.Instance.gameSence.dotGroup;
        //移除所有dot的帧事件
        for (var i = 0; i < dotGroup.numChildren; i++) {
            dotGroup.getChildAt(i).removeDotEvent();
        }
    };
    /**
     * 继续游戏
     */
    GameManager.prototype.resumeGame = function () {
        SenceManager.Instance.gameSence.addMoveEvent();
        var dotGroup = SenceManager.Instance.gameSence.dotGroup;
        //移除所有dot的帧事件
        for (var i = 0; i < dotGroup.numChildren; i++) {
            dotGroup.getChildAt(i).addDotEvent();
        }
    };
    /**
     * 重置游戏
     */
    GameManager.prototype.resetGame = function () {
    };
    return GameManager;
}());
__reflect(GameManager.prototype, "GameManager");
