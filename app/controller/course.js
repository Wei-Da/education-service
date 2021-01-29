'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.course.findAll();
  }

  async findByName() {
    const { ctx } = this;
    ctx.body = await ctx.service.course.findByName(ctx.query.name);
  }

  async findByType() {
    const { ctx } = this;
    ctx.body = await ctx.service.course.findByType(ctx.query.type);
  }

  async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.course.create(ctx.request.body);
  }
}

module.exports = CourseController;