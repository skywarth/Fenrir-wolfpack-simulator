
function calculateBiomeBasedHuntSuccesChance(){


    for(let i=1;i<wolves.length;i++)
    {
        if(wolves[i].definitiveFields.familySet.id===environment.biome.id)
        {
            biomeBasedHuntSuccessChance+=(50/wolves.length);
        }
        else if((wolves[i].definitiveFields.familySet.name==="arctic" || wolves[i].definitiveFields.familySet.name==="taiga")  && (environment.biome.name==="arctic" || environment.biome.name==="taiga"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }

        else if((wolves[i].definitiveFields.familySet.name==="forest" || wolves[i].definitiveFields.familySet.name==="jungle")  && (environment.biome.name==="forest" || environment.biome.name==="jungle"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }

        else if((wolves[i].definitiveFields.familySet.name==="tundra" || wolves[i].definitiveFields.familySet.name==="plains")  && (environment.biome.name==="tundra" || environment.biome.name==="plains"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }
        else if((wolves[i].definitiveFields.familySet.name==="tundra" || wolves[i].definitiveFields.familySet.name==="plains")  && (environment.biome.name==="tundra" || environment.biome.name==="plains"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }
        else{
            biomeBasedHuntSuccessChance-=(50/wolves.length);
        }
    }
}




function calculateActiveClimateBasedBiasHuntChance(){

    if(currentWeatherEvent==="tornado"){
    activeClimateBasedBiasHuntChance=0;
    }
    else if(currentWeatherEvent==="frost"){
        activeClimateBasedBiasHuntChance=35;
    }
    else if(currentWeatherEvent==="constant rain"){
        activeClimateBasedBiasHuntChance=0;
    }
    else if(currentWeatherEvent==="fog"){
        activeClimateBasedBiasHuntChance=100;
    }
    else if(currentWeatherEvent==="none"){
        activeClimateBasedBiasHuntChance=50;
    }
    else{
        activeClimateBasedBiasHuntChance=50;
    }

}


function calculateDiseaseBasedHuntChance(){
    for(let i=1;i<wolves.length;i++)
    {
        if(wolves[i].definitiveFields.diseases.length>0){
            diseaseBasedHuntChance=(diseaseBasedHuntChance-(50*wolves[i].diseases.length))/2;
        }


    }
}

function calculateHungerBasedHuntChance(){
    for(let i=1;i<wolves.length;i++)
    {
       if(wolves[i].definitiveFields.hunger>0){
            hungerBasedHuntChance-=(wolves[i].definitiveFields.hunger/wolves.length);
        }
       else{
           hungerBasedHuntChance+=(100/wolves.length);
       }
    }
    if(hungerBasedHuntChance>100){//error check
        hungerBasedHuntChance=100;
    }

}

function calculatePackSizeBasedHuntChance(){
    if(wolves.length<(idealPacksize*50/100)){
        packSizeBasedHuntChance=25;
    }
    else if(wolves.length>(idealPacksize*50/100) && wolves.length<=idealPacksize){
        packSizeBasedHuntChance=50;
    }
    else if(wolves.length>idealPacksize){
        packSizeBasedHuntChance=100;
    }
}

function calculateHuntSuccessChance() {

    try{
        calculateBiomeBasedHuntSuccesChance();
        calculateDiseaseBasedHuntChance();
        calculateActiveClimateBasedBiasHuntChance();
        calculateHungerBasedHuntChance();
        calculatePackSizeBasedHuntChance();
        huntSuccessChance=(biomeBasedHuntSuccessChance+constantChance+wolfHuntSuccessChance+activeClimateBasedBiasHuntChance+diseaseBasedHuntChance+hungerBasedHuntChance+packSizeBasedHuntChance)/7;
        console.log("in the calculate hunt chance:"+huntSuccessChance);
        simulationLogs.push(new simulationLog(currentDate,"Chance", "Current hunting success chance is: "+huntSuccessChance));
        return huntSuccessChance;
    }
    catch(e){
        console.log(e);
    }
    finally {
        resetHuntChances();
    }

    //resetHuntChances();

    //biomeBasedHuntSuccessChance calculated
    //constantChance is constant, from parameters
    //wolfHuntSuccessChance is constant, from parameters
    //activeClimateBasedBiasHuntChance is calculated
    //diseaseBasedHuntChance is calculated


}


function calculateAlphaPoints(){
    for(let i=1;i<wolves.length;i++)
    {
        //age, diseases, anatomic sizes, marks, characteristics,
        let alphaP=100;
        for(let k=0;k<wolves[i].definitiveFields.diseases.length;k++){
            alphaP-=10;
        }
        for(let l=0;l<wolves.length;l++)
        {
            if(wolves[i].definitiveFields.age>wolves[l].definitiveFields.age){
                alphaP+=5;
            }
            else if(wolves[i].definitiveFields.age===wolves[l].definitiveFields.age){
                //same wolf
            }
            else{
                alphaP-=5;
            }

            /////////

            if(wolves[i].definitiveFields.wolfAnatomicSizes.skullDiameter>wolves[l].definitiveFields.wolfAnatomicSizes.skullDiameter){
                alphaP+=2;
            }
            else if(wolves[i].definitiveFields.wolfAnatomicSizes.skullDiameter===wolves[l].definitiveFields.wolfAnatomicSizes.skullDiameter){
                //same wolf
            }
            else{
                alphaP-=2;
            }
            if(wolves[i].definitiveFields.wolfAnatomicSizes.pawDiameter>wolves[l].definitiveFields.wolfAnatomicSizes.pawDiameter){
                alphaP+=2;
            }
            else if(wolves[i].definitiveFields.wolfAnatomicSizes.pawDiameter===wolves[l].definitiveFields.wolfAnatomicSizes.pawDiameter){

            }
            else{
                alphaP-=2;
            }
            if(wolves[i].definitiveFields.wolfAnatomicSizes.foreLegHeight>wolves[l].definitiveFields.wolfAnatomicSizes.foreLegHeight){
                alphaP+=2;
            }
            else if(wolves[i].definitiveFields.wolfAnatomicSizes.foreLegHeight===wolves[l].definitiveFields.wolfAnatomicSizes.foreLegHeight){
                //same wolf
            }
            else{
                alphaP-=2;
            }


            ////////////////

            if(wolves[i].definitiveFields.strMark>wolves[l].definitiveFields.strMark){
                alphaP+=5;
            }
            else if(wolves[i].definitiveFields.strMark===wolves[l].definitiveFields.strMark){
                //same wolf
            }
            else{
                alphaP-=5;
            }
            if(wolves[i].definitiveFields.agiMark>wolves[l].definitiveFields.agiMark){
                alphaP+=3;
            }
            else if(wolves[i].definitiveFields.agiMark===wolves[l].definitiveFields.agiMark){

            }
            else{
                alphaP-=3;
            }
            if(wolves[i].definitiveFields.intMark>wolves[l].definitiveFields.intMark){
                alphaP+=2;
            }
            else if(wolves[i].definitiveFields.intMark===wolves[l].definitiveFields.intMark){
                //same wolf
            }
            else{
                alphaP-=2;
            }

        }
        /////////
        let character=wolves[i].definitiveFields.characteristics;
        if(character.indexOf("leader")!==0 || character.indexOf("dominant")!==0 ){
            alphaP+=20;
        }
        wolves[i].definitiveFields.alphaPoints=alphaP;
        simulationLogs.push(new simulationLog(currentDate,"Calculation","The wolf id:"+wolves[i].structuralFields.id+" has got alpha point of: "+alphaP));


    }

}