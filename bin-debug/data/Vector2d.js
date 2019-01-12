var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Vector2d = (function () {
    function Vector2d(x, y) {
        this.vx = x;
        this.vy = y;
    }
    // 缩放
    Vector2d.prototype.scale = function (scale) {
        this.vx *= scale;
        this.vy *= scale;
    };
    //加 另一个向量
    Vector2d.prototype.add = function (vec2) {
        this.vx += vec2.vx;
        this.vy += vec2.vy;
    };
    //减 另一个向量
    Vector2d.prototype.sub = function (vec2) {
        this.vx -= vec2.vx;
        this.vy -= vec2.vy;
    };
    //相反方向
    Vector2d.prototype.negate = function () {
        this.vx = -this.vx;
        this.vy = -this.vy;
    };
    //向量长度
    Vector2d.prototype.length = function () {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    };
    //向量长度的平方
    Vector2d.prototype.lengthSquared = function () {
        return this.vx * this.vx + this.vy * this.vy;
    };
    //标准化
    Vector2d.prototype.normalize = function () {
        var len = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (len) {
            this.vx /= len;
            this.vy /= len;
        }
        return len;
    };
    //旋转
    Vector2d.prototype.rotate = function (angle) {
        var vx = this.vx, vy = this.vy, cosVal = Math.cos(angle), sinVal = Math.sin(angle);
        this.vx = vx * cosVal - vy * sinVal;
        this.vy = vx * sinVal + vy * cosVal;
    };
    //调试
    Vector2d.prototype.toString = function () {
        return '(' + this.vx.toFixed(3) + ',' + this.vy.toFixed(3) + ')';
    };
    return Vector2d;
}());
__reflect(Vector2d.prototype, "Vector2d");
