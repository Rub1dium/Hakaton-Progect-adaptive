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








