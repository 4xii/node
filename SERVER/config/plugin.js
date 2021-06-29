/*
 * Author: 朱世新
 * Date: 2021-06-21 11:17:49
 * LastEditors: 朱世新
 * LastEditTime: 2021-06-29 22:53:47
 * Description: 
*/
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  nunjucks: {
    enable:true,
    package:'egg-view-nunjucks'
  },
  jwt:{
    enable:true,
    package:"egg-jwt"
  },
  cors:{
    enable:true,
    package:'egg-cors'
  }
};
