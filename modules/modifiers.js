
function calculateBiomeBasedHuntSuccesChance(){


    for(let i=1;i<wolves.length;i++)
    {
        if(wolves[i].familySet.id===environmentModel.biome.id)
        {
            biomeBasedHuntSuccessChance+=(50/wolves.length);
        }
        else if((wolves[i].familySet.name==="arctic" || wolves[i].familySet.name==="taiga")  && (environmentModel.biome.name==="arctic" || environmentModel.biome.name==="taiga"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }

        else if((wolves[i].familySet.name==="forest" || wolves[i].familySet.name==="jungle")  && (environmentModel.biome.name==="forest" || environmentModel.biome.name==="jungle"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }

        else if((wolves[i].familySet.name==="tundra" || wolves[i].familySet.name==="plains")  && (environmentModel.biome.name==="tundra" || environmentModel.biome.name==="plains"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }
        else if((wolves[i].familySet.name==="tundra" || wolves[i].familySet.name==="plains")  && (environmentModel.biome.name==="tundra" || environmentModel.biome.name==="plains"))
        {
            biomeBasedHuntSuccessChance+=(30/wolves.length);
        }
        else{
            biomeBasedHuntSuccessChance-=(50/wolves.length);
        }
    }
}

function calculateHuntSuccessChance() {

    for(let i=1;i<wolves.length;i++)
    {
        if(wolves[i].diseases.length>0){
            diseaseBasedHuntChance=(diseaseBasedHuntChance-(50*wolves[i].diseases.length))/2;
        }


    }
    huntSuccessChance=biomeBasedHuntSuccessChance+constantChance+wolfHuntSuccessChance+activeClimateBasedBiasHuntChance+diseaseBasedHuntChance/5;


}