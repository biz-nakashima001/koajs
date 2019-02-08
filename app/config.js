"use strict";

//.envファイルの読み込み用ライブラリ
require('dotenv').config();

const config = {
  port   : process.env.PORT,
};

module.exports = config;