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
var GameOverSence = (function (_super) {
    __extends(GameOverSence, _super);
    function GameOverSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameOverSenceSkin";
        return _this;
    }
    GameOverSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    GameOverSence.prototype.init = function () {
    };
    return GameOverSence;
}(eui.Component));
__reflect(GameOverSence.prototype, "GameOverSence");
