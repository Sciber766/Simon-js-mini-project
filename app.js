let red = '--red-color';
let purple = '--purple-color';
let green = '--green-color';
let yellow = '--yellow-color';
let startBtn = document.querySelector('.button');
let allBtn = document.querySelectorAll('.btn');
let redBtn = document.querySelector('.red');
let purpleBtn = document.querySelector('.purple');
let greenBtn = document.querySelector('.green');
let yellowBtn = document.querySelector('.yellow');
let h3 = document.querySelector('h3');
let root = document.documentElement;
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let colors = ['--yellow-color', '--red-color', '--purple-color', '--green-color'];
let container = document.querySelector('.container');
let highScore = document.querySelector('.score');
let score = 0;

highScore.innerText = `Highest Score: ${score}`;

startBtn.addEventListener('click', function() {
    if(startBtn.innerText === 'Start') {
        stop();
        

        
    }
    else if(startBtn.innerText === 'Stop') {
        start();
        h3.innerText = "Game stopped!";
    }
});
function stop(){
    startBtn.innerText = 'Stop';
    startBtn.style.backgroundColor = 'rgb(148, 0, 0)';
    h3.innerText = "Game started!";
    started = true;
    levelUp();
}
function start(){
    gameSeq = [];
    userSeq = [];
    startBtn.innerText = 'Start';
    startBtn.style.backgroundColor = 'rgb(0, 140, 153)';
    setTimeout(() => {
        level = 0;
    }, 1000);
    setTimeout(() => {
        h3.innerText = 'Press Start button to start the game';
    }, 1200);
}
redBtn.addEventListener('click', () => {
    btnFlash(red);
    userSeq.push(red);
    console.log(userSeq);
    checkAns(userSeq.length - 1, score);
});
purpleBtn.addEventListener('click', () => {
    btnFlash(purple);
    userSeq.push(purple);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
});
yellowBtn.addEventListener('click', () => {
    btnFlash(yellow);
    userSeq.push(yellow);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
});
greenBtn.addEventListener('click', () => {
    btnFlash(green);
    userSeq.push(green);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
});

function levelUp(){
    userSeq = [];
    level++;
    setTimeout(() => {
        h3.innerText = `Level ${level}`
    }, 800);
    let random = Math.floor(Math.random() * 4);
    let randomColor = colors[random];
    gameSeq.push(randomColor)
    console.log(gameSeq);
    setTimeout(() => {
        btnFlash(`${randomColor}`);
    }, 1500);
}
function btnFlash(btn){
    if(btn == '--red-color'){
        root.style.setProperty(red,"rgb(255, 0, 0)");
        setTimeout(() => {
            root.style.setProperty(red,"rgb(170, 0, 0)");
        }, 250);
    }
    else if(btn == '--purple-color'){
        root.style.setProperty(purple,"rgb(255, 0, 255)");
        setTimeout(() => {
            root.style.setProperty(purple,"rgb(128, 0, 128)");
        }, 250);
    }
    else if(btn == '--green-color'){
        root.style.setProperty(green,"rgb(0, 255, 0)");
        setTimeout(() => {
            root.style.setProperty(green,"rgb(0, 170, 0)");
        }, 250);
    }
    else if(btn == '--yellow-color'){
        root.style.setProperty(yellow,"rgb(255, 255, 0)");
        setTimeout(() => {
            root.style.setProperty(yellow,"rgb(170, 170, 0)");
        }, 250);
    }
    else{
        alert("Something is wrong please check the code!");
        body.style.backgroundColor = 'red';
    }
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            console.log("level passed");
        setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerText = `Game Over! your score was ${level}`;
        if(score < level){
            score = level;
            console.log(score);
            highScore.innerText = `Highest Score : ${score}`;
        }
        container.style.backgroundColor = "red";
        setTimeout(() => {
            container.style.backgroundColor = "gainsboro";
        }, 300);
        start();
    }
}
