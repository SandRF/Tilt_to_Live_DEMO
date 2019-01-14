//  private touchMove(e: egret.TouchEvent) {
//     //计算移动的距离
//     let offsetX: number = e.stageX - this.posX;
//     let offsetY: number = e.stageY - this.posY;
//     //需要移动到的坐标
//     let newPosX = this.player.x + 2 * offsetX;
//     let newPosY = this.player.y + 2 * offsetY;
//     // let newPosX = this.player.x + offsetX;
//     // let newPosY = this.player.y + offsetY;
//     //判断是否在边界内 -是 : 赋值给player
//     if (newPosX > this.broderX_left && newPosX < this.broderX_right) {
//         this.player.x = newPosX;
//     }
//     if (newPosY > this.broderY_top && newPosY < this.broderY_bottom) {
//         this.player.y = newPosY;
//     }
//     ////-------------------------------------------------------------------------------
//     //player的朝向
//     let rad: number = Math.atan2(offsetY, offsetX);
//     // console.log(`rad:`, rad);
//     console.log(`自己写的rad`, rad);
//     //有点问题,和封装好的相比有计算错误
//     // if (rad > Math.PI) {
//     //     rad -= 2 * Math.PI
//     // } else if (rad < -Math.PI) {
//     //     rad += 2 * Math.PI;
//     // }
//     let angle: number = rad / Math.PI * 180;
//     // console.log(`自己写的angle:`, angle)
//     // this.player.rotation = angle
//     //-------------------------------------------------------------------------------
//     //cocos
//     // let keyRotate = (360 - 180 * Math.atan2(this.player.y - e.stageY, this.player.x - e.stageX) / Math.PI + 90) % 360;
//     // 270 < this.player.rotation && 90 > angle ? this.player.rotation -= 360 : 90 > this.player.rotation && 270 < angle && (this.player.rotation += 360);
//     // this.keySpeed += (l(this.keyX - this.x) + l(this.keyY - this.y)) / 60,
//     // this.keySpeed += l(this.keyRotate - this.sprite.rotation) / 40;
//     // console.log(keyRotate);
//     // keyRotate = (360 - 180 * Math.atan2(offsetY, offsetX) /Math.PI + 90) % 360,
//     // 270 < this.sprite.rotation && 90 > this.keyRotate ? this.sprite.rotation -= 360 : 90 > this.sprite.rotation && 270 < this.keyRotate && (this.sprite.rotation += 360),
//     // this.keySpeed += (l(this.keyX - this.x) + l(this.keyY - this.y)) / 60,
//     // this.keySpeed += l(this.keyRotate - this.sprite.rotation) / 40;
//     //-------------------------------------------------------------------------------
//     //网上找的封装好的方法
//     this.ex_point.x = this.posX;
//     this.ex_point.y = this.posY;
//     this.cur_point.x = e.stageX;
//     this.cur_point.y = e.stageY;
//     let rad2 = this.getAngelByUI(this.ex_point, this.cur_point);
//     if (rad2 > Math.PI) {
//         rad2 -= 2 * Math.PI
//     } else if (rad2 < -Math.PI) {
//         rad2 += 2 * Math.PI;
//     }
//     //egret的旋转,0度是正常坐标系的y轴负方向 , 顺时针 0 -- 90 -- (180/-180)-- -90 -- 0
//     this.player.rotation = rad2 / Math.PI * 180 + 90;
//     console.log(`别人封装的rad`, rad2);
//     console.log(`加上偏移量`, this.player.rotation)
//     //-------------------------------------------------------------------------------
//     // //社区咸鱼
//     // let rad: number = Math.atan2(offsetY, offsetX);
//     // let speedX = Math.cos(rad) * this.speed;
//     // let speedY = Math.sin(rad) * this.speed;
//     // // //需要移动到的坐标
//     // let newPosX = this.player.x + speedX;
//     // let newPosY = this.player.y + speedY;
//     // //朝向
//     // if (rad > Math.PI) {
//     //     rad -= 2 * Math.PI
//     // } else if (rad < -Math.PI) {
//     //     rad += 2 * Math.PI;
//     // }
//     // let angle: number = rad / Math.PI * 180 + 45;
//     // console.log(`angle:`, angle)
//     // // this.player.rotation = angle;
//     // //判断是否在边界内 -是 : 赋值给player
//     // if (newPosX > this.broderX_left && newPosX < this.broderX_right) {
//     //     this.player.x = newPosX;
//     // }
//     // if (newPosY > this.broderY_top && newPosY < this.broderY_bottom) {
//     //     this.player.y = newPosY;
//     // }
//     //记录下当前的坐标
//     this.posX = e.stageX;
//     this.posY = e.stageY;
// }
// private touchEnd(e: egret.TouchEvent) {
// }
