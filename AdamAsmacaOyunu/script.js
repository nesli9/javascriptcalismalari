const word_element = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message');
const correctLetters=['j','a','v','s'];
const wrongLetters=[];


function getRandomWord(){
    const words = ['javascript','java','pyhton'];

    return words[Math.floor(Math.random()*words.length)];
}



function displayWord(){
    const selectedWord = getRandomWord();

    word_element.innerHTML = `
    ${selectedWord.split('').map(letter => `
    <div class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
    </div>
    
    `).join('')}
    
    `;
    
    const w =word_element.innerText.replace(/\n/g,'');
    if(w === selectedWord){
        popup.style.display = 'flex';
        message_el.innerText = 'Tebrikler Kazandınız';
    }

    

}
displayWord();
