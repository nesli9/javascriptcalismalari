// var message ='hello';

// console.log(global);

// //global.console.log //global en kapsamlı olan 

// global.module

// //Browser


// //Node


// //IIFE

// var module1 = (function(){
//     //function scope

//     return{

//     }
// })();

//CommonJS Module Syntext

const logger = require('./logger');

logger.log('hello');
console.log(logger.name);