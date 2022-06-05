//Event Listeners

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

btn.addEventListener('click',function(e){
    //console.log('btn clicked');  //kullanıcı mouse ile delete all butonuna tıklayınca tıklandı yazılır
    
    let val ;
    val = e;
    val = e.target; //hangi butona tıklandığı bilgisi bu özellikle elde edilebilir
    val = e.target.id; //tıklanan objenin id bilgisini elde etme
    val = e.target.classList;
    val = e.type;



    console.log(val);

    e.preventDefault();

});




// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2); //bir butona iki ayrı istenilen fonksiyon atanabilir.
// btn2.addEventListener('click',btnClick);


// function btnClick(){           //fonksiyonun ayrı bir şekilde yazılması farklı eventler için de kullanılmasına olanak sağlar.
//     console.log('btn clicked');
// }


// function btnClick2(){           
//     console.log('btn 2 clicked');
// }



