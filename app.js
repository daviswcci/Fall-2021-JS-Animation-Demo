const donutButton = document.getElementById("donutButton");
const donutText = document.getElementById("donutText");
const multiplierText = document.getElementById("multiplierText");
const multiplierCost = document.getElementById("multiplierCost");
const multiplierButton = document.getElementById("multiplierButton");
const clickerCount = document.getElementById("clickerCount");
const clickerCost = document.getElementById("clickerCost");
const clickerButton = document.getElementById("clickerButton");

var donutMaker = new DonutMaker();
var clickInterval = null;

function bake(){
    donutMaker.donutCount += donutMaker.multiplier;
    spawnSpinningDonut();
    updateText();
}

function buyMult(){
    if(donutMaker.donutCount >= donutMaker.multiplierCost){
        donutMaker.donutCount -= donutMaker.multiplierCost;
        donutMaker.multiplierCount++;
        donutMaker.multiplier = Math.pow(1.1, donutMaker.multiplierCount);
        donutMaker.multiplierCost = 25 * Math.pow(1.15, donutMaker.multiplierCount);
        updateText();
    }
}

function buyClick(){
    if(donutMaker.donutCount >= donutMaker.clickerCost){
        donutMaker.donutCount -= donutMaker.clickerCost;
        donutMaker.clickerCount++;
        donutMaker.clickerCost = 100 * Math.pow(1.15, donutMaker.clickerCount);
        clearInterval(clickInterval);
        clickInterval = setInterval(bake, 1000 / donutMaker.clickerCount);
        updateText();
    }
}

function updateText(){
    donutText.innerText = "Donut Count: " + donutMaker.donutCount.toFixed(2);
    multiplierText.innerText = "Current Multiplier: " + donutMaker.multiplier.toFixed(2) + "x";
    multiplierCost.innerText = "Multiplier Cost: " + donutMaker.multiplierCost.toFixed(2);
    clickerCount.innerText = "Autoclickers: " + donutMaker.clickerCount.toFixed(2);
    clickerCost.innerText = "Autoclicker Cost: " + donutMaker.clickerCost.toFixed(2);
}

