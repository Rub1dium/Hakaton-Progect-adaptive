/* Объявление переменных и запуск некоторых функций */

const html = document.querySelector('html');
html.style.overflowY = "hidden";

let Content__div = document.querySelectorAll('.Content__div');
let level = 63;

for (item of Content__div) {
    item.style.zIndex = level;
    --level;
}

const Block_blocker = document.querySelector('.Blocker');
const Blocker__button = document.querySelector('.Blocker__button');

const Wave__item = document.querySelectorAll('.Wave__item');
const Wavebubls = document.querySelector('.Wave-bubls');
const Bubl__image = document.querySelectorAll('.Bubl__image');

const KarmaBlock = document.querySelector('.Karma-block');
let KarmaCounter = document.querySelector('.Karma-block__karma-counter');
var KarmaNum = 0;

let Content__indicator = document.querySelector(".Content__indicator").classList;
let Content__indicatorText = document.querySelector('.Content__indicator');

const Trash__itemTrash = document.querySelectorAll('.Trash__item-trash');

let ClickSound = document.querySelector('.ClickSound');
let AchievementSound = document.querySelector('.AchievementSound');

let Achievement = document.querySelector('.Container__achievements');
let EasterEgg = document.querySelector('.EasterEgg');

let PDIndicatorSTART;
let PDIndicatorEND;
let PDBublsSTART;
let PDBublsEND;
let PDOffAnim;
var metres;
let timerID1;
let timerID2;
let start = false;

let CheckAMetres1 = false;
let CheckAMetres2 = false;
let CheckAMetres3 = false;
let CheckAMetres4 = false;
let CheckAMetres5 = false;
let CheckAMetres6 = false;

let CheckAEasterEgg = false;


let ClientWidth = document.documentElement.clientWidth;

if (ClientWidth > 1440) {
    PDIndicatorSTART = 460;
    PDIndicatorEND = 77160;

    PDBublsSTART = 1000;
    PDBublsEND = 77500;

    PDOffAnim = 1200;
}
else if (ClientWidth <= 1440) {
    PDIndicatorSTART = 765;
    PDIndicatorEND = 77466;

    PDBublsSTART = 1148;
    PDBublsEND = 77466;

    PDOffAnim = 1260;
}





