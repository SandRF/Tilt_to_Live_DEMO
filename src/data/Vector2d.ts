class Vector2d {
    vx: number;
    vy: number;

    public constructor(x: number, y: number) {
        this.vx = x;
        this.vy = y;
    }

    // 缩放
    scale(scale) {
        this.vx *= scale;
        this.vy *= scale;
    }

    //加 另一个向量
    add(vec2: Vector2d) {
        this.vx += vec2.vx;
        this.vy += vec2.vy;
    }
    //减 另一个向量
    sub(vec2: Vector2d) {
        this.vx -= vec2.vx;
        this.vy -= vec2.vy;
    }
    //相反方向
    negate() {
        this.vx = -this.vx;
        this.vy = -this.vy;
    }
    //向量长度
    length() {
        return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    }
    //向量长度的平方
    lengthSquared() {
        return this.vx * this.vx + this.vy * this.vy;
    }
    //标准化
    normalize() {
        var len = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (len) {
            this.vx /= len;
            this.vy /= len;
        }
        return len;
    }
    //旋转
    rotate(angle) {
        var vx = this.vx,
            vy = this.vy,
            cosVal = Math.cos(angle),
            sinVal = Math.sin(angle);
        this.vx = vx * cosVal - vy * sinVal;
        this.vy = vx * sinVal + vy * cosVal;
    }
    //调试
    toString() {
        return '(' + this.vx.toFixed(3) + ',' + this.vy.toFixed(3) + ')';
    }
}
