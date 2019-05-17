


class disease{//constant diseases array
    constructor(name,infectious){
        this.id=++disease.counter;
        this.name=name;
        this.infectious=infectious;


    }
}
disease.counter=0;


class anatomicSizes{
    constructor(jaw,foreLegHeight,pawDiameter,skullDiameter){
        this.jaw=jaw;
        this.foreLegHeight=foreLegHeight;
        this.pawDiameter=pawDiameter;
        this.skullDiameter=skullDiameter;


    }
}



class definitiveFields{
    constructor(wolfTagID,wolfNickname, wolfAnatomicSizes,diseases,characteristics,furColorCode,eyeColorCode,age,familySet,strMark,agiMark,intMark){
        //characteristics is string array
        //familySet is biome object
        this.wolfTagID=wolfTagID;
        this.wolfNickname=wolfNickname;
        this.wolfAnatomicSizes=wolfAnatomicSizes;
        this.diseases=diseases;
        this.characteristics=characteristics;
        this.furColorCode=furColorCode;
        this.eyeColorCode=eyeColorCode;
        this.age=age;
        this.familySet=familySet;
        this.strMark=strMark;
        this.agiMark=agiMark;
        this.intMark=intMark;


    }



}

class structuralFields{
    constructor(generationNumber,maleAncestor,femaleAncestor){
        //branchID not mandatory
        //branchName not mandatory
        //ancestors are object
        this.id=++structuralFields.counter;
        this.generationNumber=generationNumber;
        this.maleAncestor=maleAncestor;
        this.femaleAncestor=femaleAncestor;


    }

}

structuralFields.counter=0;



class wolf{

    constructor(definitiveFields,structuralFields){
        this.definitiveFields=definitiveFields;
        this.structuralFields=structuralFields;
    }

}










class enviroment{

    constructor(biome,waterAvailability,temperature,rainFreq,greenDensity, climateBias,surroundings, wildCardWolves, predatorCount, predatorThreat, preyCount){
        this.id=++enviroment.counter;
        this.biome=biome;
        this.waterAvailability=waterAvailability;
        this.temperature=temperature;
        this.rainFreq=rainFreq;
        this.greenDensity=greenDensity;
        this.climateBias=climateBias;
        this.surroundings=surroundings;
        this.wildCardWolves=wildCardWolves;
        this.predatorCount=predatorCount;
        this.predatorThreat=predatorThreat;
        this.preyCount=preyCount;
    }

}
enviroment.counter=0;

class biome{

        constructor(name){
            this.name=name;
            this.id=++biome.counter;
            console.log(this.id);

         }

}
biome.counter=0;

var biomeTemplates=[];

function fillBiomeTemplates() {
    biomeTemplates.push(new biome("plains"));
    biomeTemplates.push(new biome("forest"));
    biomeTemplates.push(new biome("swamp"));
    biomeTemplates.push(new biome("jungle"));
    biomeTemplates.push(new biome("taiga"));
    biomeTemplates.push(new biome("tundra"));
    biomeTemplates.push(new biome("desert"));
    biomeTemplates.push(new biome("arctic"));

}

fillBiomeTemplates();

var found = biomeTemplates.find(function(element) {
    return element.name ="arctic";
});


console.log(found);








