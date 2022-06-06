//Mouse Events

const btn =document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//double click
// btn.addEventListener('dbclick',eventHandler);

// //mouse down
// btn.addEventListener('mousedown',eventHandler);
// //mouse up
// btn.addEventListener('mouseup',eventHandler);

// //mouse enter
// ul.addEventListener('mouseenter',eventHandler);

// //mouse leave
// ul.addEventListener('mouseleave',eventHandler);

// //mouse over
// ul.addEventListener('mouseover',eventHandler);  //nesnelerin alt elemanları üzerindede çalışır

// //mouse out
// ul.addEventListener('mouseout',eventHandler);  //nesnelerin alt elemanları üzerindede çalışır

//mouse move
ul.addEventListener('mousemove',eventHandler);


function eventHandler(){
    console.log(`event type : ${event.type}`);

    console.log(event);

    h5.textContent =`Mouse X : ${event.offsetX} Mouse Y : ${event.offsetY}`;
 
}



