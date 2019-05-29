const meatToSurvive=1.25;
const meatToReproduce=3;
const daysWithoutFeeding=12;

const averageLifeExpectancy=8;

const maxPackSize=20;

const idealPacksize=12;

const wolfPupMortalityRate=40;

const meatAmounts={deer:"41",bison:"278",rabbit:"1"}

const constantChance=50;//used for every chance calculation

const wolfHuntSuccessChance=14;//according to references


/* */
let biomeBasedHuntSuccessChance=50;

let huntSuccessChance=50;

let activeClimateBasedBiasHuntChance=50;

let diseaseBasedHuntChance=100;

let hungerBasedHuntChance=100;

let packSizeBasedHuntChance=50;
/* */


/* */
let currentDate=0;

let currentWeatherEvent;

let currentPreyScoutStatus=false;


/* */



function resetHuntChances(){

    biomeBasedHuntSuccessChance=50;

    huntSuccessChance=50;

    activeClimateBasedBiasHuntChance=50;

    diseaseBasedHuntChance=100;
    hungerBasedHuntChance=100;

    packSizeBasedHuntChance=50;
    console.log("in the reset hunt chance:"+huntSuccessChance);
}