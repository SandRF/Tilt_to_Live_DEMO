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
var RootSence = (function (_super) {
    __extends(RootSence, _super);
    function RootSence() {
        var _this = _super.call(this) || this;
        _this.skinName = "RootSenceSkin";
        return _this;
    }
    RootSence.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.init();
    };
    RootSence.prototype.init = function () {
        var tw = egret.Tween.get(this.img_bg, { loop: true });
        tw.to({ rotation: 360 }, 50000);
        //TODO 标记用,完成后清除
        this.sencesGroup.name = "sencesGroup";
        //设置根场景
        SenceManager.getinstance()._root = this.sencesGroup;
        //第一次进入rootsence,加载startsence
        SenceManager.getinstance().addSence(SenceManager.getinstance().startSence);
    };
    return RootSence;
}(eui.Component));
__reflect(RootSence.prototype, "RootSence");
