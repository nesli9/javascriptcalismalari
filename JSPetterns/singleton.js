// // Singleton Pettern

// var singleton = (function(){

//     var instance ;


//     const createInstance = function(){
//         return {
//             randomNumber: Math.random()
//         }
//     }

//     return {
//         getInstance : function(){
//             if(!instance){ //if ile instance in içi boş mu dolumu kontrolu yapılıyor. boşsa doldurulur doluysa eski obje geri gönderilir (objenin aynı referansa sahip olduğundan emin olmak için yapılır)
//                 instance = new createInstance();
//             }
//             return instance;
//         }
//     }

// })();

// const instance1 = singleton.getInstance(); 
// const instance2 = singleton.getInstance();

// console.log(instance1.randomNumber,instance2.randomNumber); //farklı zamanda üretilen iki objenin hep aynı referansa sahiptir


var singleton = (function(){
    var instance;

    function ProductController(){
        const products = [
            {name : 'product1'},
            {name : 'product2'},
            {name : 'product3'}
        ];

        const add = function(product){
            products.push(product);
        }

        const get = function(){
            return products;
        }

        return{
            add , get
        }
    }

        return{
            getInstance : function(){
                if(!instance){
                    instance = new ProductController();
                }
                return instance;
            }
        }

    


})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({name : 'product4'});
console.log(productController2.get());


