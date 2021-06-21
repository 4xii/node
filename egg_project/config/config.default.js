/*
 * Author: 朱世新
 * Date: 2021-06-19 23:00:26
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-20 15:46:09
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
  config.keys = appInfo.name + '_1624114805225_2489';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

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
