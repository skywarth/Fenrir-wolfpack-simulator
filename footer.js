


let div=document.getElementById("diseases");

let diseaseCounter=1;


function createDiseaseSelect(){



    let insertion="<select id=disease"+diseaseCounter+"></select><input type='text' id='diseaseInfectious"+diseaseCounter+"'></input><br>"


    div.innerHTML+=insertion;
    let select = document.getElementById("disease"+diseaseCounter);
    diseaseCounter++;

    for(var i = 0; i < diseaseTemplates.length; i++) {
        var opt = diseaseTemplates[i].name;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = diseaseTemplates[i].id;
        select.appendChild(el);
    }


}



$(document).ready(function() {
    $("#addDisease").click(function(){
        createDiseaseSelect();
    });
});

var select = document.getElementById("familySet");

for(var i = 0; i < biomeTemplates.length; i++) {
    var opt = biomeTemplates[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = biomeTemplates[i].id;
    select.appendChild(el);
}




$(" #createWolf").click(function(){


    let wolfTagID=$("#tagID").val();
    let wolfNickname=$("#nickname").val();
    let wolfAnatomicSizes=new anatomicSizes($("#jaw").val(),$("#foreLegHeight").val(),$("#pawDiameter").val(),$("#skullDiameter").val());
    let diseases=[];
    for(i=1;i<diseaseCounter;i++)
    {

        let diseaseTemplateObj = diseaseTemplates.find(function(element) {
            let id=$("#disease"+i).val();
            return element.id ==id;
        });
        let diseaseInfectious=$("#diseaseInfectious"+i).val()

        diseases.push(new disease(diseaseTemplateObj,diseaseInfectious));
    }
    let characteristics=$("#characteristics").val();
    let furColorCode=$("#furColorCode").val();
    let eyeColorCode=$("#eyeColorCode").val();
    let age=$("#age").val();
    let familySetObj = biomeTemplates.find(function(element) {
        return element.id ==$("#familySet").val();
    });
    let strMark=$("#strMark").val();
    let agiMark=$("#agiMark").val();
    let intMark=$("#intMark").val();

    var wolfDef=new definitiveFields(wolfTagID,wolfNickname,wolfAnatomicSizes,diseases,characteristics,furColorCode,eyeColorCode,age,familySetObj,strMark,agiMark,intMark);

    console.log(wolfDef);
});


$(" #test").click(function() {
    alert($("#disease1").val());
    console.log(diseaseTemplates);
    for(i=1;i<diseaseCounter;i++)
    {

        let diseaseTemplateObj = diseaseTemplates.find(function(element) {
            let id=$("#disease"+i).val();
            return element.id ==id;
        });
        let diseaseInfectious=$("#diseaseInfectious"+i).val()

        alert(diseaseTemplateObj.name+diseaseInfectious);
    }
});

