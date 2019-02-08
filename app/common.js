"use strict";

const config = require('./config');

//入力チェック
function checkValidate(name, value, isRequired, type){
  if(isRequired){
    //必須チェック
    if (typeof value === "undefined"){
      const obj = {
        status: "NG",
        message: `${name}は必須項目です。[${name}]`
      };
      return JSON.stringify(obj,null,4);
    }
  }
  //数値チェック
  if(type == "number" && typeof value !== "undefined"){
    if (isNaN(value)){
      const obj = {
        status: "NG",
        message: `${name}には数値を指定して下さい。[${name}: ${value}]`
      };
      return JSON.stringify(obj,null,4);
    }
  //半角文字チェック
  }
  if (type == "ascii" && typeof value !== "undefined"){
    if(typeof value !== "undefined"
      && !value.match(/^[\x20-\x7e]*$/)){
      const obj = {
        status: "NG",
        message: `${name}には半角文字列を指定して下さい。[${name}: ${value}]`
      };
      return JSON.stringify(obj,null,4);
    }
  }
  //引っかからなかった場合
  return "";
}

 let common = {};
 common.checkValidate = checkValidate;

 module.exports = common;
