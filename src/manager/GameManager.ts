class GameManager {
    private static _gameManager: GameManager;
    public static get Instance() {
        if (!this._gameManager) {
            this._gameManager = new GameManager();
        }
        return this._gameManager;
    }

    isgameover: boolean = false;


    public constructor() {

    }

    /**
     * 游戏结束
     */
    public gameOver() {
        this.stopGame();
        //TODO 其他处理
    }

    /**
     * 暂停游戏
     */
    public stopGame() {
        //移除移动相关的点击事件
        SenceManager.Instance.gameSence.removeMoveEvent();
        let dotGroup = SenceManager.Instance.gameSence.dotGroup;
        //移除所有dot的帧事件
        for (let i = 0; i < dotGroup.numChildren; i++) {
            (dotGroup.getChildAt(i) as Dot).removeDotEvent();
        }

    }


    /**
     * 继续游戏
     */
    public resumeGame() {
        SenceManager.Instance.gameSence.addMoveEvent();
        let dotGroup = SenceManager.Instance.gameSence.dotGroup;
        //移除所有dot的帧事件
        for (let i = 0; i < dotGroup.numChildren; i++) {
            (dotGroup.getChildAt(i) as Dot).addDotEvent();
        }
    }

    /**
     * 重置游戏
     */
    public resetGame() {

    }
}