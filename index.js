'use strict'

let common = require('./app/common');

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());

// 足し算
const addition = require('./route/addition');
app.use(addition.routes());
app.use(addition.allowedMethods());

// 引き算
const subtraction = require('./route/subtraction');
app.use(subtraction.routes());
app.use(subtraction.allowedMethods());

// 掛け算
const multiplication = require('./route/multiplication');
app.use(multiplication.routes());
app.use(multiplication.allowedMethods());

// 割り算
const division = require('./route/division');
app.use(division.routes());
app.use(division.allowedMethods());

app.listen(process.env.PORT, () => {
    console.log('koa started!!');
});
