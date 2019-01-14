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
var Btn_option = (function (_super) {
    __extends(Btn_option, _super);
    function Btn_option() {
        var _this = _super.call(this) || this;
        _this.skinName = "Btn_optionSkin";
        return _this;
    }
    Btn_option.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    Btn_option.prototype.init = function (on, off) {
        this.btn_on.texture = RES.getRes(on);
        this.btn_off.texture = RES.getRes(off);
    };
    Btn_option.prototype.changeState = function (isstate) {
        if (isstate) {
            this.currentState = "ON";
        }
        else if (!isstate) {
            this.currentState = "OFF";
        }
    };
    return Btn_option;
}(eui.Component));
__reflect(Btn_option.prototype, "Btn_option");
