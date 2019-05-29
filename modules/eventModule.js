


class regularEvents{

    static distributeFood(meatAmount){

        if(dominanceTree.Peek()!=null)
        {
        let currWolf=dominanceTree.Pop();
        if(meatAmount>=(meatToReproduce*wolves.length/4)){//if quarter of the pack can be fed with meat to reproduce, they will eat this amount
            meatAmount-=meatToReproduce;
            currWolf.definitiveFields.hunger=0;
            simulationLogs.push(new simulationLog(currentDate,"Feeding","The wolf id:"+currWolf.structuralFields.id+" has got fed fully"));
        }
        else if(meatAmount>=meatToSurvive){
            meatAmount-=meatToSurvive;
            currWolf.definitiveFields.hunger=50;
            simulationLogs.push(new simulationLog(currentDate,"Feeding","The wolf id:"+currWolf.structuralFields.id+" has got fed half"));
        }
        else{
            currWolf.definitiveFields.hunger=100;
            simulationLogs.push(new simulationLog(currentDate,"Feeding","The wolf id:"+currWolf.structuralFields.id+" is starving."));
        }
        }
    }


    static hunt(){
        if(currentPreyScoutStatus)
        {simulationLogs.push(new simulationLog(currentDate,"Hunt", "Wolf pack is on the prowl according to their scout activity findings."));
            if(currentPreyCount>=1){
                simulationLogs.push(new simulationLog(currentDate,"Hunt", "Wolf pack has found the prey/prey group. Engaging now."));
                //console.log("in the hunt hunt chance:"+calculateHuntSuccessChance());
                if(chance.bool({likelihood: calculateHuntSuccessChance()})){
                    console.log("successful hunt");
                    currentPreyCount--;
                    let keys=Object.keys(meatAmounts);
                    let values=Object.values(meatAmounts);
                    simulationLogs.push(new simulationLog(currentDate,"Hunt/Engage", "The pack has successfully hunted the prey: "+environment.preyType));
                    for(let i=0;i<keys.length;i++){
                        if(environment.preyType===keys[i]){
                            return values[i];
                        }
                    }

                }else{
                    simulationLogs.push(new simulationLog(currentDate,"Hunt/Engage", "The pack has failed to hunt the prey: "+environment.preyType));
                }


            }
            else{
                simulationLogs.push(new simulationLog(currentDate,"Hunt", "Wolf pack didn't find any prey."));
            }
        }
        else
        {
            simulationLogs.push(new simulationLog(currentDate,"Hunt", "Wolf pack can't hunt because they didn't find any clue for prey during scouting."));
        }

    }


    static triggerWeatherEvent(){
        if(chance.bool({likelihood: 10})){
        currentWeatherEvent=environment.climateBias.toLowerCase();
            simulationLogs.push(new simulationLog(currentDate,"Climate Bias/Weather Event", "Today the environment is experiencing:"+currentWeatherEvent));
        }else{
            currentWeatherEvent="none";
            simulationLogs.push(new simulationLog(currentDate,"Climate Bias/Weather Event", "Today the environment didn't experience any particular weather event"));
        }
    }

    static scouting(){
        let roll=chance.integer({min:0,max:100});//0 and 100 included in range
        //%25 chance to encounter wildcard wolves.
        //%75 chance to track and find preys
        //%20 chance to encounter predators
        if(chance.bool({likelihood:25})){
            //wildcard wolf encounter
            //to be implemented...
        }else{
            simulationLogs.push(new simulationLog(currentDate,"scouting", "wolf pack didn't encounter any wild wolves during scouting."));
        }
        if(chance.bool({likelihood:75})){
            currentPreyScoutStatus=true;
        }
        else{
            currentPreyScoutStatus=false;
            simulationLogs.push(new simulationLog(currentDate,"scouting", "wolf pack didn't encounter any preys during scouting."));
        }
        if(chance.bool({likelihood:5})) {
            //predator encounter
            let num = chance.integer({min: 0, max: wolves.length});
            wolves.splice(num, 1);//killing the wolf
            simulationLogs.push(new simulationLog(currentDate,"Predator", "a wolf has been killed by the predator."));
        }

        else{
            simulationLogs.push(new simulationLog(currentDate,"scouting", "wolf pack didn't encounter any predators during scouting."));
        }
    }


}

class conditionalEvents{


}