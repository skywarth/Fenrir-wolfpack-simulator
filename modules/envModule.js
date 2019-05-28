
let environment;


let currentPreyCount=0;

var select = document.getElementById("biomeTemplates");

for(var i = 0; i < biomeTemplates.length; i++) {
    var opt = biomeTemplates[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = biomeTemplates[i].id;
    select.appendChild(el);
}

$(document).ready(function() {
    $("#biomeTemplates").change(function(){
        alert($(this).val());
    });
})


$(" #createEnv").click(function(){


    let biomeObj = biomeTemplates.find(function(element) {
        return element.id ==$("#biomeTemplates").val();
    });
    let water=$("#water").val();
    let temp={tempLow:$("#tempLow").val(),tempMed:$("#tempMed").val(),tempHigh:$("#tempHigh").val()}
    let rainFreq=$("#rainFreq").val();
    let greenDensity=$("#greenDensity").val();
    let climateBias=$("#climateBias").val();
    let surroundings=$("#surroundings").val();
    let wildCardWolves=$("#wildCardWolves").val();
    let predatorCount=$("#predatorCount").val();
    let predatorThreat=$("#predatorThreat").val();
    let preyCount=$("#preyCount").val();

    const env=new environmentModel(biomeObj,water,temp,rainFreq,greenDensity,climateBias,surroundings,wildCardWolves,predatorCount,predatorThreat,preyCount);
    env.preyType=$("#preyType").val();
    environment=env;
    currentPreyCount=environment.preyCount;
    console.log(environment);
});





/*var select = document.getElementById("axa");
alert(select);
for(index in biomeTemplates) {
    select.options[select.options.length] = new Option(biomeTemplates[index], index);
}*/