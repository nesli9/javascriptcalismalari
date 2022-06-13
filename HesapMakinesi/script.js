const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue ='0';

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener('click' ,function(e){
    const element = e.target;

    if(!element.matches('button')) return;

    if(element.classList.contains('operator')){
        console.log('operator',element.value);
        return;
    }
    if(element.classList.contains('desimal')){
        //console.log('desimal',element.value);
        inputDesimal(element.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains('clear')){
        //console.log('clear',element.value);
        clear();
        updateDisplay();
        return;
    }


    //console.log('number',element.value);

    inputNumber(element.value);
    updateDisplay();
});

function inputNumber(number){
    displayValue = displayValue ==='0'? number : displayValue+number;

}

function inputDesimal(){
    if(!displayValue.includes('.')){
        displayValue += '.';
    }
}

function clear(){
    displayValue ='0';
}





