
function initializeSimulation(){
    simulationLogs.push(new simulationLog(currentDate,"Simulation","Simulation has been initialized"));
    calculateAlphaPoints();
    pushWolvesToDominanceTree();
    regularTrigger();
}
$(" #startSim").click(function(){
initializeSimulation();

});
function regularTrigger(){
    simulationLogs.push(new simulationLog(new simulationLog(currentDate,"Simulation","Simulation has started")));
    let bookmarkStart=0;

    for(let i=1;i<10;i++){

        simulationLogs.push(new simulationLog(currentDate,"Date","Day "+i+" has dawned."));
        //daily events
        regularEvents.triggerWeatherEvent();
        let huntSuccessful=false;
        for(let k=0;k<15;k++){
            if(!huntSuccessful){


            regularEvents.scouting();
            let meatAmount=regularEvents.hunt();
            if(meatAmount>0){
                huntSuccessful=true;
            }
            regularEvents.distributeFood(meatAmount);
            }
        }


        pushWolvesToDominanceTree();//because we are popping for food distribution order. so we push wolves back to the dominance tree.
        if(i%7===0){//weekly events
            calculateAlphaPoints();
        }
        currentDate++;


        /*setTimeout(function(){
            let bookmarkEnd=simulationLogs.length;
            for(let m=bookmarkStart;m<bookmarkEnd;m++){
                document.getElementById("simOutput").innerHTML+="<label style=\"color:white;font-family: 'Arial'\">Simulation id:"+simulationLogs[i].id+"  "+simulationLogs[i].date+" "+simulationLogs[i].eventType+" "+simulationLogs[i].message+"</label><br>"
            }
            bookmarkStart=bookmarkEnd;
        }, 1000);*/



    }
    console.log(simulationLogs);
    for(let m=0;m<simulationLogs.length;m++){
        document.getElementById("simOutput").innerHTML+="<label style=\"color:white;font-family: 'Arial'\">id:"+simulationLogs[m].id+" "+simulationLogs[m].date+" "+simulationLogs[m].eventType+" "+simulationLogs[m].message+"</label><br>"
    }
}