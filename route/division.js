'use strict'

const calc = require('../app/calc');

module.exports = require('koa-router')()
//割り算
.get('/division/:arg1/:arg2/', async (ctx) => {
    const arg1 = Number(ctx.params.arg1);
    const arg2 = Number(ctx.params.arg2);
    const result = calc.division(arg1, arg2);

    const obj = {
        計算: "割り算",
        引数１: arg1,
        引数２: arg2,
        計算結果: result
    };
    ctx.body = JSON.stringify(obj,null,4);
    return 0;
});
