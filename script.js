const API = "https://greenhouse-api.ffnfghnhzt.workers.dev";


let password = "";




// Login

function login(){


    password = document
        .getElementById("password")
        .value;



    document.getElementById("controls")
        .style.display = "block";


    document.getElementById("loginStatus")
        .innerHTML = "Logged in";


    updateStatus();


}






// Send command

async function setDevice(device,value){


    const response = await fetch(API, {


        method:"POST",


        headers:{


            "Content-Type":"application/json"


        },


        body:JSON.stringify({


            password:password,


            [device]:value


        })


    });



    if(response.status === 403){


        alert("Incorrect password");


        document.getElementById("controls")
        .style.display="none";


        return;


    }



    updateStatus();


}







// Read current state

async function updateStatus(){


    const response = await fetch(API);


    const state = await response.json();



    document.getElementById("status").innerHTML =

    `
    Lights: ${state.lights ? "ON":"OFF"} <br>
    Vent: ${state.vent ? "OPEN":"CLOSED"} <br>
    Pump: ${state.pump ? "ON":"OFF"}
    `;


}



setInterval(updateStatus,2000);