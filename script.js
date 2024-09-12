//Reset knapp - onClick, gir tallene
//To tilfeldige tall - Variabler + math.random
//Input felt - onChange
//Funskjon for å sammenligne (if) - større enn, er lik eller mindre enn
//Submit knapp - sjekke om det er skrevet inn riktig og oppdatere poengsum
//Gi poeng, riktig svar +1 (++), feil er -1(--)

let firstNum = 0;
let secondNum = 0;
let answer = '';
let points = 0;

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
    return Math.floor(Math.random() * 10);
}

function saveInput(input){
    answer = input;
}

function rightAnswer(){
    points++
    document.getElementById("points").innerHTML = points;
}

function wrongAnswer(){
    points--
    document.getElementById("points").innerHTML = points;
}

function compareNum(){
    if(answer == '=' && firstNum == secondNum){
        rightAnswer()
    }
    else if(answer == '<' && firstNum < secondNum){
        rightAnswer()
    }
    else if(answer == '>' && firstNum > secondNum){
        rightAnswer()
    }
    else{
        wrongAnswer()
    }
}
