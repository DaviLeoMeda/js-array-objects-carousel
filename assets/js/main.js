const pathImg = `./assets/img/`

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


let HTMLplace = document.querySelector('place');
let slideMain = document.querySelector('mainImg')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

for (let w = 0; w < images.length; w++) {

    slideMain.innerHTML =
        `
    <div class="prev">
        <i class="fa-solid fa-chevron-left"></i>
    </div>
    <div class="pic">
        <img src="${pathImg}${image[i]}" alt="">
    </div>
    <div class="next">
        <i class="fa-solid fa-chevron-right"></i>
    </div>
    `

}

let active = 0;

slideMain.getElementsByClassName('pic')[active].classList.add('active')

prev.addEventListener('click', function () {

    if (active == 0) {
        active = imagine.length - 1;
    } else {
        active--;
    }

    document.querySelector('.pic.active').classList.remove('active');
    slideMain.getElementsByClassName('pic')[active].classList.add('active');

})

next.addEventListener('click', function () {

    if (active == imagine.length - 1) {
        active = 0;
    } else {
        active++;
    }

    document.querySelector('.pic.active').classList.remove('active');
    slideMain.getElementsByClassName('pic')[active].classList.add('active');

})

