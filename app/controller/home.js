'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async test() {
    const { ctx } = this;
    // ctx.body = await ctx.service.course.test();
    return await ctx.model.Course.create({
      "title": "户外设计",
      "type": "design",
      "imgUrl": "https://ftp.bmp.ovh/imgs/2021/02/e9683f0f51d59e1c.jpg",
      "describe": "户外设计",
      "author": "小李老师",
      "price": 500,
      "authorImg": "https://ftp.bmp.ovh/imgs/2021/01/40ce44ef2efb43f7.png"
    })
  }
}

module.exports = HomeController;
