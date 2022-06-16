//Immediate Fonksiyonlar  //fonksiyonların sadece uygulama başında çalışması için kullanıır.


// function welcome(){
//     var days=['Sunday','Monday','Tuesday','Wendesday',
//     'Thursday','Friday','Saturday'];

//     var today = new Date();
//     var msg = 'Welcome. Today is ' +days[today.getDay()];

//     return msg;
// }

// (function(){
    
// })();

// (function(){

// }());

(function(name){
    var days=['Sunday','Monday','Tuesday','Wendesday',
    'Thursday','Friday','Saturday'];

    var today = new Date();
    var msg = 'Welcome '+name+ ' Today is ' +days[today.getDay()];

    console.log(msg);
}('Çınar'));


//console.log(welcome());






































