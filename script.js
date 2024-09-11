let firstNum = 0;
let secondNum = 0;

function reset(){
    updateNumbers();
}

function updateNumbers(){
    firstNum = getRandomNum();
    secondNum = getRandomNum();
    document.getElementById("firstNum").innerHTML = firstNum;
    document.getElementById("secondNum").innerHTML = secondNum;
}

function getRandomNum(){
    return Math.round(Math.random() * 10);
}