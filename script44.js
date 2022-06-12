var models=[ 
    {
    name : 'bmw 418d',
    image : 'img/bmw.jpg',
    link : 'htttpsfvlgfç'
    },
    {
        name : 'bmw 418d',
        image : 'img/bmw.jpg',
        link : 'htttpsfvlgfç'
    },
    {
        name : 'bmw 418d',
        image : 'img/bmw.jpg',
        link : 'htttpsfvlgfç'
    },
    {
        name : 'bmw 418d',
        image : 'img/bmw.jpg',
        link : 'htttpsfvlgfç'
    },
];

var index= 1;



document.querySelector('card-title').textContent=models[index].name;
document.querySelector('card-image-top').setAttribute('src',models[index].image);
document.querySelector('card-link').setAttribute('href',models[index].link);





