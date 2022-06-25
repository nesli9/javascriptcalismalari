// // OOP: Nesne Tabanlı Programlama
// // Object

// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
// }

// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt("c"));
// console.log(soru2.cevabiKontrolEt("b"));

// // Sınıf, Constructor => nesne * 30
// // ES5, ES6, ES7


// OOP: Nesne Tabanlı Programlama
// Object

// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7

//sınıf isminin baş harfi büyük harfle başlar


//constructor dan bir kopya oluşturuldu
// let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
// let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");



const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    ui.quiz_box.classList.add("active");
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex +1 , quiz.sorular.length);
    ui.btn_next.classList.remove("show");
})

ui.btn_next.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex +1 , quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        console.log("quiz bitti");
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length , quiz.dogruCevapSayisi);
    }
});

ui.btn_quit.addEventListener("click", function(){
    window.location.reload(); //sayfa yeniden yüklenir.
});

ui.btn_replay.addEventListener("click", function(){
    quiz.soruIndex =0;
    quiz.dogruCevapSayisi =0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi +=1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for(let i=0; i < ui.option_list.children.length; i++) {
        ui.option_list.children[i].classList.add("disabled");
    }

    ui.btn_next.classList.add("show");
}






