// Object literals Uygulama


/** Object literal kullanarak en az 5 araç bilgisini tutunuz.
 * 
 * Araç bilgileri : 
 * 
 * id : bmw116d_1234
 * model : 116d
 * yil : 2015
 * renk : white
 * servis kayıtları  :
 *      id : bwm116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
 *          servis detayı : 
 *          id : 1 işlem : yağ değişim ücret : 300 
 *          id : 2 işlem : filtre değişimi : 300 
 *          id : 3 işlem : fren hidroliği : 300 
 *      
 *      id : bwm116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
 *          servis detayı : 
 *          id : 1 işlem : yağ değişim ücret : 300 
 *          id : 2 işlem : filtre değişimi : 300 
 *          id : 3 işlem : fren hidroliği : 300 
 * 
 *      id : bwm116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
 *          servis detayı : 
 *          id : 1 işlem : yağ değişim ücret : 350 
 *          id : 2 işlem : filtre değişimi : 350 
 *          id : 3 işlem : fren hidroliği : 300 
 *          id : 4 işlem : balata değişimi : 800
 * 
 * 
*/
var aracBilgileri = [
        {
    id  : 'bwm116d_123',
    model : 'bmw 116d',
    yil : 2015,
    renk : 'beyaz',
    servisKayıtları : [
        {
            id : 'bwm116_123_1',
            tarih : '20.01.2016',
            km : '13000',
            ucret : 900,
            detay : [
                {
                    id  : 'bwm116_123_1_1',
                    aciklama : 'yağ değişimi',
                    ucret : 300
                },
                {
                    id  : 'bwm116_123_1_2',
                    aciklama : 'filtre değişimi',
                    ucret : 300
                },
                {
                    id  : 'bwm116_123_1_3',
                    aciklama : 'fren hidroliği',
                    ucret : 300
                },
            ]
        },
        {
            id : 'bwm116_123_2',
            tarih : '10.01.2017',
            km : '28000',
            ucret : 1800,
            detay : [
                {
                    id  : 'bwm116_123_2_1',
                    aciklama : 'yağ değişimi',
                    ucret : 350
                },
                {
                    id  : 'bwm116_123_2_2',
                    aciklama : 'filtre değişimi',
                    ucret : 350
                },
                {
                    id  : 'bwm116_123_2_3',
                    aciklama : 'fren hidroliği',
                    ucret : 300
                },
                {
                    id  : 'bwm116_123_2_3',
                    aciklama : 'balata değişimi',
                    ucret : 800
                },
            ]
        },
        
    ]
        },
        {
            id  : 'bwm118i_124',
            model : 'bmw 118i',
            yil : 2015,
            renk : 'beyaz',
            servisKayıtları : [
                {
                    id : 'bwm118i_124_1',
                    tarih : '20.01.2016',
                    km : '13000',
                    ucret : 900,
                    detay : [
                        {
                            id  : 'bwm118i_124_1_1',
                            aciklama : 'yağ değişimi',
                            ucret : 300
                        },
                        {
                            id  : 'bwm118i_124_1_2',
                            aciklama : 'filtre değişimi',
                            ucret : 300
                        },
                        {
                            id  : 'bwm118i_124_123_1_3',
                            aciklama : 'fren hidroliği',
                            ucret : 300
                        },
                    ]
                },
                {
                    id : 'bwm118i_124_2',
                    tarih : '10.01.2017',
                    km : '28000',
                    ucret : 1800,
                    detay : [
                        {
                            id  : 'bwm118i_124_2_1',
                            aciklama : 'yağ değişimi',
                            ucret : 350
                        },
                        {
                            id  : 'bwm118i_124_2_2',
                            aciklama : 'filtre değişimi',
                            ucret : 350
                        },
                        {
                            id  : 'bwm118i_124_2_3',
                            aciklama : 'fren hidroliği',
                            ucret : 300
                        },
                        {
                            id  : 'bwm118i_124_2_3',
                            aciklama : 'balata değişimi',
                            ucret : 800
                        },
                    ]
                }
                
            ]
        },
    
        {
            id  : 'bwm320d_123',
            model : 'bwm 320d',
            yil : 2015,
            renk : 'beyaz',
            servisKayıtları : [
                {
                    id : 'bwm320d_123_1',
                    tarih : '20.01.2016',
                    km : '13000',
                    ucret : 900,
                    detay : [
                        {
                            id  : 'bwm320d_123_1_1',
                            aciklama : 'yağ değişimi',
                            ucret : 300
                        },
                        {
                            id  : 'bwm320d_123_1_2',
                            aciklama : 'filtre değişimi',
                            ucret : 300
                        },
                        {
                            id  : 'bwm320d_123_1_3',
                            aciklama : 'fren hidroliği',
                            ucret : 300
                        },
                    ]
                },
                
                
            ]
        }

]


console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayıtları);
console.log(aracBilgileri[0].servisKayıtları[0]);
console.log(aracBilgileri[0].servisKayıtları[1].km);
console.log(aracBilgileri[0].servisKayıtları[2].detay[0]);
console.log(aracBilgileri[0].servisKayıtları[2].detay[0].ucret);


// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);
