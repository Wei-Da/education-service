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
    domainWhiteList: ['http://106.15.170.193:7001'], // 前端网页托管的域名
    csrf: {
      enable: false
    }
  }

  config.mongoose = {
    // url: 'mongodb://106.15.170.193:27017/educationDB', // educationDB 为 mongodb 数据库
    // options: {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
    client: {
      url: 'mongodb://test:123456@127.0.0.1:27017/test',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    },
  
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const cluster = {
    listen: {
      port: 7001,
      hostname: '0.0.0.0', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
