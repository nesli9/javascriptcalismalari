//Removing & Changing Nodes

const taskList = document.querySelector('#task-list');

//removing
//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[3].remove(); //ulaşılan nesne remove metodu ile silinebilir
//taskList.removeChild(taskList.children[0]); //ulaşılan nesnenin alt elemnalarından herhangi birini silebiliriz

//** removing attribute
//taskList.children[0].removeAttribute('class');

// for ( let i = 0; i<taskList.children.length ; i++){
//     taskList.children[i].removeAttribute('class');
// }

//** replacing elements

// const cardHeader = document.querySelector('.card-header');
// // create element
// const h2=document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My list'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);


// console.log(cardHeader);


//** Classes

let val ;
link = taskList.children[0].children[0];
val = link.className;
// val = link.classList;
// val = link.classList[0];

link.classList.add('new');
link.classList.remove('new');

//Attributes
val = link.getAttribute('class');
val = link.getAttribute('href');
val = link.setAttribute('href','http//:sadikturan.com');
val = link.hasAttribute('data-val');


console.log(val);