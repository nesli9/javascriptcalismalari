// Call, Apply & Bind  //üçünün farkı parametre kullanımındadandır

var welcome = function(a,b){
    console.log('Welcome ' + this.name +'. Are you interested in '+a+' and '+b);

}

var yigit = {
    name :'Yiğit'
};

var ada = {
    name : 'Ada'
};

welcome.call(yigit , 'asp.net' ,'angular');
welcome.call(ada , 'asp.net' ,'angular');      
                        //fonksiiyon herhangi bir parametre almıyor ise call ile apply aynı çalışır.
welcome.apply(yigit,['asp.net' ,'angular']);
welcome.apply(ada ,['asp.net' ,'angular']);

welcomeYigit  = welcome.bind(yigit); //yeni bir fonks. oluşturuldu
welcomeYigit('asp.net' ,'angular');

welcomeAda = welcome.bind(ada);
welcomeAda('asp.net' ,'angular');















