/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611813483484_3415';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    }
  }

  config.mongoose = {
    url: 'mongodb://localhost/education_DB' // educationDB 为 mongodb 数据库
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};