class SenceManager {
    /**
     * 单例
     */
    static _senceManager: SenceManager;
    public static get Instance() {
        if (this._senceManager == null) {
            this._senceManager = new SenceManager();
        }
        return this._senceManager;
    }

    //各场景实例
    public rootSence: RootSence;
    public startSence: StartSence;
    public gameSence: GameSence;
    public gameOverSence: GameOverSence;

    //测试
    public homeSence: HomeScene;
    /**根场景 */
    public _root: egret.DisplayObjectContainer;

    public constructor() {
        this.rootSence = new RootSence();
        this.startSence = new StartSence();
        this.gameSence = new GameSence();
        this.gameOverSence = new GameOverSence();
        this.homeSence = new HomeScene();
    }

    /**设置根场景 */
    public setStage(root: egret.DisplayObjectContainer) {
        if (this._root == null) {
            this._root = root;
        }
        else {
            alert("this._root已被设置过,不能重复设置")
        }
    }

    /**添加场景
     * @param newSence 需要添加的场景
     * @param parent 父节点, 可选, 默认是根场景
     */
    public addSence(newSence: egret.DisplayObjectContainer, parent?: egret.DisplayObjectContainer) {
        if (parent == null) {
            parent = this._root;
        }
        parent.addChild(newSence);
    }

    /**
     * 移除场景
     * @param sence 需要移除的场景
     * @param parent 父节点, 可选, 默认是根场景
     */
    public removeSence(sence: egret.DisplayObjectContainer, parent?: egret.DisplayObjectContainer) {
        if (parent == null) {
            parent = this._root;
        }
        //??要不要判断sence是否存在父物体  如果该sence被重复移除的时候,会报错
        if (sence.parent) {
            parent.removeChild(sence);
        } else {
            console.log(`${sence}没有父节点`);
        }
    }


}