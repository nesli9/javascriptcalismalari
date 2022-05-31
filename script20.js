// Loops

// for loop

// for (let i=0; i<=10 ; i++){
//     if(i==3){
//         console.log('En sevdiğim rakam : '+i);
//         continue;
//     }
    
// if(i==6){
//     console.log('En sevmediğim rakam : ' +i);
//     break;
// }
// console.log(i);
// }

//while loop

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

//do-while loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10)


// let toplam = 0 ;
// for (let i=10 ; i>0 ;i--){
//     toplam+=i;

// } 
// console.log(toplam);

// let sonuc = 1 ;
// for (let i=10 ; i>0 ;i--){
//     sonuc*=i;

// } 
// console.log(sonuc);

// let sonuc = 1 ;  //çift sayıların çarpımı
// for (let i=10 ; i>0 ;i--){
//     if(i%2==0){
//         sonuc*=i;
//     }
// } 
// console.log(sonuc);

// let sonuc = 1 ;  //tek sayıların çarpımı
// for (let i=10 ; i>0 ;i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// } 
// console.log(sonuc);

let val = '\n';
for (let i=0 ; i<10 ;i++ ){
    for(let j=0 ; j<10 ; j++ ){
        val +='*';
        //console.log(`i: ${i} j: ${j}`);
    }
    val +='\n';
}
console.log(val);
