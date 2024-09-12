//Reset knapp - onClick, gir tallene DONE
//To tilfeldige tall - Variabler + math.random DONE
//Input felt - onChange DONE
//Funskjon for å sammenligne (if) - større enn, er lik eller mindre enn DONE
//Submit knapp - sjekke om det er skrevet inn riktig og oppdatere poengsum DONE
//Gi poeng, riktig svar +1 (++), feil er -1(--) DONE

let firstNum = 0;
let secondNum = 0;
let answer = '';
let points = 0;

//Koblet opp mot reset knapp (index-fila), og kjører updateNumbers() for å gi nye tall 
function reset(){
    updateNumbers();
}
//Henter informasjonen fra getRandomNum() og legger disse tallene inni variablene firstNum og secondNum, som blir lagt inn i index fila
function updateNumbers(){
    firstNum = getRandomNum();
    secondNum = getRandomNum();
    document.getElementById("firstNum").innerHTML = firstNum;
    document.getElementById("secondNum").innerHTML = secondNum;
}

//Gir oss tilfeldige tall fra 1-9
function getRandomNum(){
    return Math.floor(Math.random() * 10);
}

//Lagrer svaret vi gir i input feltet
function saveInput(input){
    answer = input;
}

//Gir oss 1 poeng hvis vi får riktig svar
function rightAnswer(){
    points++
    document.getElementById("points").innerHTML = points;
}

//Trekker fra 1 poeng hvis vi får feil svar
function wrongAnswer(){
    points--
    document.getElementById("points").innerHTML = points;
}

//Sjekker om svaret vårt stemmer overens med det som er riktig ift nummerne vi har fått.
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
