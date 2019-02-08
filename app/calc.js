"use strict";

//足し算
function addition(arg1, arg2) {
  return arg1 + arg2;
}
//引き算
function subtraction(arg1, arg2) {
   return arg1 - arg2;
}

 //掛け算
function multiplication(arg1, arg2) {
   return arg1 * arg2;
}

 //割り算
function division(arg1, arg2) {
   return arg1 / arg2;
}

const calc = {
   addition: addition,
   subtraction: subtraction,
   multiplication: multiplication,
   division: division
};

module.exports = calc;
