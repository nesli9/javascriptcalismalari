//function getAverage(a: number  , b: number , c?:number):string{ //cdeki soru işareti 3. elmanın oladabilir olmayadabilir durumudur functiona 2 elemanda gönderilebilir . fakat soru işareti yoksa 3 elamlı olmalıdır.
const getAverage = (...a : number[]):string => {
    let total = 0;
    let count = 0;

    // if(typeof c !== 'undefined'){
    //     total += c;
    //     count ++;
    // }

    for(let i=0 ; Int8Array.length;i++){
        total += a[i];
        count ++;
    }



    const result = total/count;
    return 'result : ' + result;
}

getAverage(10,20,30);
getAverage(10,20,30,50);
getAverage(10,20);
getAverage(10);








