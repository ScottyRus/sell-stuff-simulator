let funds = 1500.00;
let day = 0;
let daysTillOffer = 1;
let reputation = 0;

let currentTab = "contracts";


const fundsDisplay = document.getElementById("funds");
const dayDisplay = document.getElementById("day");
const reputationDisplay = document.getElementById("reputation");


function update(){
    fundsDisplay.innerHTML = "$" + funds.toString();
    dayDisplay.innerHTML = day.toString();
    reputationDisplay.innerHTML = reputation.toString();

    if(daysTillOffer == 0){
        daysTillOffer = 100;
        newOffer();
    }

    checkContracts();

    daysTillOffer--;
    day++;
}

function switchTab(tab){
    document.getElementById(currentTab).style.display = "none";
    document.getElementById(tab).style.display = "block";
    currentTab = tab;
}

setInterval(update, 333);