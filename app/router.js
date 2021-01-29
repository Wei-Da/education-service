'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/course', controller.course.index);
  router.get('/course/findByName', controller.course.findByName);
  router.get('/course/findByType', controller.course.findByType);
  router.post('/course/create', controller.course.create);
};
