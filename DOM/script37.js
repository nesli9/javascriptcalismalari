// Event Bubbling & Capturing

//event bubbling  : içten dışa aktarım olur

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('card');
const container = document.querySelector('.container');

// form.addEventListener('click',function(){
//     console.log('form');
//     e.stopPropagation();
// });

// form.addEventListener('click',function(){
//     console.log('card body');
//     e.stopPropagation();
// });

// form.addEventListener('click',function(){
//     console.log('card');
//     e.stopPropagation();
// });

// form.addEventListener('click',function(){
//     console.log('container');
//     e.stopPropagation();
// });

//event capturing

// form.addEventListener('click',function(){
//     console.log('form');
//     e.stopPropagation();
// } , true); // dıştan içe yapmak istenirsa yapılması gerken şey üçüncü parametre olarak true yazmak

// form.addEventListener('click',function(){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// form.addEventListener('click',function(){
//     console.log('card');
//     e.stopPropagation();
// },true);

// form.addEventListener('click',function(){
//     console.log('container');
//     e.stopPropagation();
// },true);


// const deleteItems = document.querySelectorAll('.fa-times');
// deleteItems.forEach(function(item){
//     item.addEventListener('clic',function(e){
//         console.log(e.target);
//     });
// });

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    //console.log(e.target);
    if (e.target.className ==='.fas-times'){
        console.log(e.target.parentElement.parentElement.remove());

        e.preventDefault();
    }
});




