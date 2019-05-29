
let environment;


let currentPreyCount=0;

let selectBiomeTemplates = document.getElementById("biomeTemplates");

for(let i = 0; i < biomeTemplates.length; i++) {
    let opt = biomeTemplates[i].name;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = biomeTemplates[i].id;
    selectBiomeTemplates.appendChild(el);
}

/*$(document).ready(function() {
    $("#biomeTemplates").change(function(){
        alert($(this).val());
    });
})*/


$(" #createEnv").click(function(){

    let biomeObj = biomeTemplates.find(function(element) {
        return element.id ==$("#biomeTemplates").val();
    });
    let water=$("#water option:selected").val();
    let temp={tempLow:$("#tempLow").val(),tempMed:$("#tempMed").val(),tempHigh:$("#tempHigh").val()}
    let rainFreq=$("#rainFreq").val();
    let greenDensity=$("#greenDensity option:selected").val();
    let climateBias=$("#climateBias option:selected").val();
    let surroundings=$("#surroundings option:selected").val();
    let wildCardWolves=$("#wildCardWolves").val();
    let predatorCount=$("#predatorCount").val();
    let predatorThreat=$("#predatorThreat option:selected").val();
    let preyCount=$("#preyCount").val();

    const env=new environmentModel(biomeObj,water,temp,rainFreq,greenDensity,climateBias,surroundings,wildCardWolves,predatorCount,predatorThreat,preyCount);
    env.preyType=$("#preyType option:selected").val();
    environment=env;
    currentPreyCount=environment.preyCount;
    console.log(environment);
    alert("Created environment");
    //
});





/*var selectWolfFamilySet = document.getElementById("axa");
alert(selectWolfFamilySet);
for(index in biomeTemplates) {
    selectWolfFamilySet.options[selectWolfFamilySet.options.length] = new Option(biomeTemplates[index], index);
}*/