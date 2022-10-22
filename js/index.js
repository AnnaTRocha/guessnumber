const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let statusg = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random() * this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativas: ' + value
};

function handleSubmit(e){
    e.preventDefault();
    let kick = document.getElementById('kick').value;
    
    if(!kick){ 
        alert("Digite algum valor!")
        return;
     };

    updateAttempt(attempt, ++Guess.attemptNumber);

    if(numberDrawn == kick){
        playAgain();
        statusg.innerHTML = "Parabéns, voce acertou!";
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        statusg.style.color = '#fff';
        clear();
    } else if (numberDrawn > kick) {
        statusg.innerHTML = "O número é maior.";
        statusg.style.color = '#de4251';
        clear();
    } else if (numberDrawn < kick) {
        statusg.innerHTML = "O número é menor.";
        statusg.style.color = '#de4251';
        clear();
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload();
};

function clear(){
    document.getElementById('kick').value = '';
};