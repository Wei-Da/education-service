'use strict';

const Service = require('egg').Service;

class CourseService extends Service {
  async findAll() {
    const { ctx } = this;
    return await ctx.model.Course.find()
  }

  async findByName(name) {
    const { ctx } = this;
    const courseNameList = await ctx.model.Course.find({ "courseName": name })
    const authorList = await ctx.model.Course.find({ "author": name })
    return courseNameList.length > 0 ? courseNameList : authorList;
  }

  async findByType(type) {
    const { ctx } = this;
    return await ctx.model.Course.find({ "type": type })
  }

  async create(data) {
    const { ctx } = this;
    return await ctx.model.Course.create(data)
  }
}

module.exports = CourseService;