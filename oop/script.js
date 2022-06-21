// // OOP: Nesne Tabanlı Programlama
// // Object

let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulasıdır?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "c",
    cevabiKontrolEt: function(cevap) {
        return cevap === this.dogruCevap
    }
}

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

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;

    console.log(this);
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let sorular = [
    new Soru("Hangisi js paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
]


console.log(soru1.cevabiKontrolEt("c"));


