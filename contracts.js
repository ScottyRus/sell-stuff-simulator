let companyNames = [
    "MichaelSoft",
    "Orange",
    "Rainforest",
    "Bingles",
    "Air Matthew",
    "Niko",
    "Over Armour",
    "Inverse",
    "Tac Tic",
];

let products = [
    "Paperclips",
    "Fruit",
    "Escalators",
    "Textbooks",
    "Binders",
    "Hats",
    "Lightbulbs",
    "Computers",
    "Phones",
    "Mints",
];

class contract{
    constructor(name, product, stock, surplus, requiredProfit, deadline, id){
        this.name = name;
        this.product = product;
        this.stock = stock;
        this.surplus = surplus;
        this.requiredProfit = requiredProfit;
        this.deadline = deadline;
        this.id = id;
    }
}

let offers = [];

let contracts = [];

function newOffer(){
    let excludedIds = []

    for(i=0;i<contracts.length;i++){
        excludedIds.push(contracts[i].id);
    }

    for(i=0;i<offers.length;i++){
        excludedIds.push(offers[i].id);
    }

    let chosenId = 0;
    do {
        chosenId++;
    } while (excludedIds.includes(chosenId));

    let newContract = new contract(companyNames[Math.floor(Math.random()*companyNames.length)], products[Math.floor(Math.random()*companyNames.length)], Math.floor(Math.random()*500)+100, Math.floor(Math.random()*100)+50, Math.floor(Math.random()*500)+500, Math.floor(Math.random()*150)+100+day, chosenId);
    offers.push(newContract);
    let newContractElement = document.createElement("div");
    newContractElement.id = newContract.id;
    newContractElement.classList = "offer";
    let e = document.createElement("h6");
    e.classList = "offer-id";
    e.innerHTML = newContractElement.id;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = newContract.name;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = newContract.product;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = newContract.stock;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = newContract.surplus;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = "$" + newContract.requiredProfit.toString();
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = "Day " + newContract.deadline.toString();
    newContractElement.appendChild(e);

    e = document.createElement("button");
    e.innerHTML = "Accept";
    e.classList = "accept-button";
    e.onclick = function() {acceptContract(newContract)};
    newContractElement.appendChild(e);

    document.getElementById("offers-parent").appendChild(newContractElement);
}

function drawContract(contractParent, inputContract){
    let newContractElement = document.createElement("div");
    newContractElement.id = inputContract.id;
    newContractElement.classList = "offer";
    let e = document.createElement("h6");
    e.classList = "offer-id";
    e.innerHTML = newContractElement.id;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = inputContract.name;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = inputContract.product;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = inputContract.stock;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = inputContract.surplus;
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = "$ " + inputContract.requiredProfit.toString();
    newContractElement.appendChild(e);
    e = document.createElement("p");
    e.innerHTML = "Day " + inputContract.deadline.toString();
    newContractElement.appendChild(e);

    document.getElementById(contractParent).appendChild(newContractElement);
}

function acceptContract(acceptedContract){
    offers.splice(acceptedContract);
    contracts.push(acceptedContract);
    document.getElementById(acceptedContract.id).remove();

    drawContract("contracts-parent", acceptedContract)
}

function checkContracts(){

    if(contracts.length > 0){
        for(let i = 0; i < contracts.length; i++){
            if(contracts[i].deadline < day){
                reputation -= 10;
                document.getElementById(contracts[i].id).remove();
                contracts.splice(i);
            }
        }
    }
    
    if(offers.length > 0){
        for(let i = 0; i < offers.length; i++){
            if(offers[i].deadline < day){
                document.getElementById(offers[i].id).remove();
                console.log("Removing offer.");
                offers.splice(i);
            }
        }
    }
}   