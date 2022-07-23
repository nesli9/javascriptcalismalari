// //1-) Global variable naming conflicts

// //script.js
// // var name ='Sadık';


// //app.js
// // var name ='Çınar';


// // console.log(name);

// //2-) Encapsulation

// // var Counter = { //objenin artırılması ve azaltılması obje içerisinde yapılmasını isteriz
// //     number : 0,
// //     icrement : function(){
// //         return ++this.number;
// //     },
// //     decrement : function(){
// //         return --this.number;
// //     }

// // }

// // console.log(Counter.icrement());
// // console.log(Counter.icrement());
// // Counter.number = 10;
// // console.log(Counter.decrement());


// //IIFE (Immediately Invoked Function Expressions) (if 'dir)

// // (function(){   //her bir functionun kendi scopu vardır
  
// //     var name ='Sadık';
// //     console.log(name);

// // })();

// // (function(){

// //     var name ='Sadık';
// //     console.log(name);

// // })();


// var Module = (function(){
//     //private members (if içerisinnde tanınlanan her bir eleman)
//     let number = 0;

//     let increment =function(){
//         return ++number;
//     }

//     let decrement = function(){
//         return --number;
//     }

//     //console.log(increment()); //kendi scobu içerisinde console log istendiğinde çıktı alınır

//     return{
//         //public members (return içerinsinde tanımlanan elemanlar)
//         increment ,//public elemanlara aktarılmalı ki istek karşılık bulsun && fonksiyon dışarıya açılmış olur
//         decrement
//     }


// })();

// //console.log(number);//number privite oldugu için ulaşılamaz
// //console.log(increment()); // skop dışından bir istek olduğu için çıktı kabul edilmez (private old için)

// console.log(Module.increment());
// console.log(Module.increment());
// console.log(Module.decrement());


var Module = (function(){
    var privateMethod = function(){

    }; //dışarıdan ulaşılamaz

    return{
        publicMethod : function(){ 

        },
    }
})();

Module.publicMethod();




