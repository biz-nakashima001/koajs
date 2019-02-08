'use strict'

const calc = require('../app/calc');

module.exports = require('koa-router')()
//引き算
.get('/subtraction/:arg1/:arg2/', async (ctx) => {
    const arg1 = Number(ctx.params.arg1);
    const arg2 = Number(ctx.params.arg2);
    const result = calc.subtraction(arg1, arg2);

    const obj = {
        計算: "引き算",
        引数１: arg1,
        引数２: arg2,
        計算結果: result
    };
    return 0;
});
