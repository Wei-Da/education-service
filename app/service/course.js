'use strict';

const Service = require('egg').Service;

class CourseService extends Service {

  async test() {
    return '测试'
  }

  async findAll(query) {
    const { ctx } = this;
    const pageSize = query.pageSize || 10;
    const pageNum = query.pageNum || 1;
    return await ctx.model.Course.find().skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
  }

  async findByName(name) {
    const { ctx } = this;
    const courseNameList = await ctx.model.Course.find({ "courseName": name })
    const authorList = await ctx.model.Course.find({ "author": name })
    return courseNameList.length > 0 ? courseNameList : authorList;
  }

  async findByType(query) {
    const { ctx } = this;
    const pageSize = query.pageSize || 10;
    const pageNum = query.pageNum || 1;
    if(query.sortType) {
      let sortSearch = {};
      sortSearch[query.sortType] = query.sort;
      return await ctx.model.Course.find({ "type": query.type }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize)).sort(sortSearch)
    } else {
      return await ctx.model.Course.find({ "type": query.type }).skip(pageSize * (pageNum - 1)).limit(parseInt(pageSize))
    }
  }

  async create(data) {
    const { ctx } = this;
    return await ctx.model.Course.create(data)
  }
}

module.exports = CourseService;