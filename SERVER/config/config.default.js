/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-22 23:37:25
 * Description: 
*/
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
  config.keys = appInfo.name + '_1624245455328_9624';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.view = {
    defaultViewEngine:'nunjucks'
  }

  config.cors = {
    origin:"*",
    allowMethods:'GET,HEAD,PUT,DELETE,PATCH'
  }
  
  config.security = {
    csrf:{
      enable:false
    }
  }
  return {
    ...config,
    ...userConfig,
  };
};
