/* Объявление переменных и запуск некоторых функций */
const html = document.querySelector('html');
html.style.overflowY = "hidden";

let Content__div = document.querySelectorAll('.Content__div');
let level = Content__div.length;

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

const ClickSound = document.querySelector('.ClickSound');
const AchievementSound = document.querySelector('.AchievementSound');

const Achievement = document.querySelector('.Container__achievements');
const EasterEgg = document.querySelector('.EasterEgg');

let PDIndicatorSTART = 460;
let PDIndicatorEND = 77160;
let PDBublsSTART = 1000;
let PDBublsEND = 77500;
let PDOffAnim = 2000;
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


const ClientWidth = document.documentElement.clientWidth;

if (ClientWidth != 1440) {
    PDIndicatorSTART = 460;
    PDIndicatorEND = 77160;

    PDBublsSTART = 1000;
    PDBublsEND = 77500;
}
else if (ClientWidth == 1440) {
    PDIndicatorSTART = 765;
    PDIndicatorEND = 77466;

    PDBublsSTART = 1148;
    PDBublsEND = 77466;
}
else if (ClientWidth == 768) {
    PDIndicatorSTART = 480;
    PDIndicatorEND = 77064;

    PDBublsSTART = 1116;
    PDBublsEND = 77064;
}
else if (ClientWidth == 425) {
    PDIndicatorSTART = 450;
    PDIndicatorEND = 77268;

    PDBublsSTART = 1070;
    PDBublsEND = 77268;
}

console.log(PDIndicatorSTART);
console.log(PDIndicatorEND);
console.log(PDBublsSTART);
console.log(PDBublsEND);




