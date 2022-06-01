//Function Declarations 

// function sum(a,b){
//     var c= a+b;
//     return c;
// };


// console.log(sum(10,20));


//Function Expressions

// const sum = function(a,b){

//     if(typeof a === 'undefined'){
//         a=0;
//     };
//     if(typeof b === 'undefined'){
//         b=0;
//     };
//     var c = a+b;
//     return c;
// };


//ES6 Default Parameters
const sum = function(a=0,b=0){
    var c = a+b;
    return c;
    };

function args(){
    console.log(arguments)
};



function sumAll(){    // fonksiyona kaç tane parametre gönderilirse gönderilsin gelen tüm parametreler üzerinde fonksiyon içerisindeki işlemi gerçekleştirir.
    var total =0;
    for(let i =0; i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}

console.log(sum(10,30));
console.log(sum(10)); // NaN //Az parametre gönderilirse sorun olur
console.log(sum(10,30,40,50)); // Çok parametre gönderilirse gönderilen fazla parametreler gözardı edilir.
console.log(sumAll(10,30,40,50));





