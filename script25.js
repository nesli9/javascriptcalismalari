//Demo : Functions

var hesapA ={           //objedeki bilgiler nereden değişiklik yapılırsa yapılsın değiştirilen değer artık obje içerisindeki bilginin yeni değeridir. Fakat ad , bakiye gibi bilgiler ayri ayrı var bakiye ; seklinde değişken olarak tanımlansaydı başka yerde yapılan değişiklik değişkenin orjinal değerini değiştiremezdi.
    ad : 'Sena Turan',      //primitive tipler : value type olur - objeler / fonksiyonlar : referance type olur. 
    hesapNo : '12345678',
    bakiye : 2000,
    ekHesap : 1000
}

var hesapB ={
    ad : 'Emel Turan',
    hesapNo : '12356479',
    bakiye : 3000,
    ekHesap : 2000
}


function paraCek(hesap , miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye >= miktar){
        hesap.bakiye= hesap.bakiye - miktar;
        console.log('Paranızı alabilirsiniz');
    }else{
        var toplam = hesap.bakiye +hesap.ekHesap;

        if(toplam >= miktar){
            if(confirm('Ek hesabınızı kullanmak ister misiniz')){
                console.log('Paranızı alabilirsiniz');
                var bakiye= hesap.bakiye;
                var ekHesap = miktar - bakiye;
                hesap.bakiye=0;
                hesap.ekHesap = hesap.ekHesap - ekHesap;
            }else{
            console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmamaktadır.`);
        }
        
        }else{
    console.log('Üzgünüz bakiye yetersiz');
        } 
    }
}

paraCek(hesapA,2000);
paraCek(hesapA,3000);
//paraCek(hesapB,2000);


