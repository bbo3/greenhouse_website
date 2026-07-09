const API = "https://greenhouse-api.ffnfghnhzt.workers.dev";

async function update(data){

    await fetch(API,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

}

function setLights(state){
    update({lights:state});
}

function setVent(state){
    update({vent:state});
}

function setPump(state){
    update({pump:state});
}