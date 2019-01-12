var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SenceManager = (function () {
    function SenceManager() {
        this.rootSence = new RootSence();
        this.startSence = new StartSence();
        this.gameSence = new GameSence();
        this.gameOverSence = new GameOverSence();
        this.homeSence = new HomeScene();
    }
    SenceManager.getinstance = function () {
        if (this._senceManager == null) {
            this._senceManager = new SenceManager();
        }
        return this._senceManager;
    };
    /**设置根场景 */
    SenceManager.prototype.setStage = function (root) {
        if (this._root == null) {
            this._root = root;
        }
        else {
            alert("this._root已被设置过,不能重复设置");
        }
    };
    /**添加场景
     * @param newSence 需要添加的场景
     * @param parent 父节点, 可选, 默认是根场景
     */
    SenceManager.prototype.addSence = function (newSence, parent) {
        if (parent == null) {
            parent = this._root;
        }
        parent.addChild(newSence);
    };
    /**
     * 移除场景
     * @param sence 需要移除的场景
     * @param parent 父节点, 可选, 默认是根场景
     */
    SenceManager.prototype.removeSence = function (sence, parent) {
        if (parent == null) {
            parent = this._root;
        }
        //??要不要判断sence是否存在父物体  如果该sence被重复移除的时候,会报错
        if (sence.parent) {
            parent.removeChild(sence);
        }
        else {
            console.log(sence + "\u6CA1\u6709\u7236\u8282\u70B9");
        }
    };
    return SenceManager;
}());
__reflect(SenceManager.prototype, "SenceManager");
