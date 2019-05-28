const meatToSurvive=1.25;
const meatToReproduce=3;
const daysWithoutFeeding=12;

const meatAmounts={deer:"41",bison:"278",rabbit:"1"}

const constantChance=50;//used for every chance calculation

const wolfHuntSuccessChance=14;//according to references

let biomeBasedHuntSuccessChance=50;

let huntSuccessChance=50;

let activeClimateBasedBiasHuntChance;

let diseaseBasedHuntChance=100;