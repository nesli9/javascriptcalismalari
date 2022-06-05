// Traversing the Dom

let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;   //takes node lar satır aralıklarını temsil eden değerlerdir.
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // text 
val = list.childNodes[1].nodeType; // element

val = list.children; //sadece elementler(etiketler) karşımıza gelir.boşluklar katılmaz
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent='new item';
val = list.children[3].children;

val = list.firstChild; //ilk node karşımıza gelir
val = list.firstElementChild; //ilk etiket karşımıza gelir

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.children[0].nextSibling; //bir sonraki element (aynı seviyedeki elementler için geçerlidir)
val = list.children[0].nextElementSibling;

val = list.children[1].previousSibling;  //bir önceki element
val = list.children[1].previousElementSibling;
//console.log(val);



for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}



