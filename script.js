let Times = 60
let Bubbles = ""
let randomHits; 
let scores = 0;
document.querySelector('#Score').textContent = scores

let rightSound = new Audio('./Audio/Right.mp3')
let wrongSound = new Audio('./Audio/Wrong.mp3')
let gameOver = new Audio('./Audio/gameover.mp3')

function CreateBubble() {
    for (let index = 0; index <= 160; index++) {
        let bubbleNumber = Math.floor(Math.random() * 20)
        Bubbles += `<div class="bubble">${bubbleNumber}</div>`
    }

    document.querySelector('#board-bottom').innerHTML = Bubbles
}
CreateBubble()


function RestartGame(){
    location.reload()
}

function Timer() {
    let TimerClear = setInterval(() => {
        if(Times>0){
            Times--
            document.querySelector("#Timer").textContent = Times
        }
        else{
            clearInterval(TimerClear)
            Bubbles = ""
            gameOver.play()
            document.querySelector('#board-bottom').innerHTML = `<h1>Game Over</h1>
                                                                   </br>
                                                                 <button id="restart">Restart</button>
                                                                 `
            document.querySelector('#restart').addEventListener("click",RestartGame)
        }
    }, 1000)

}
Timer()

function Hits(){
    randomHits = Math.floor(Math.random()*10)
    document.querySelector("#Hits").textContent = randomHits
}
Hits()

function Scores(){
    scores+=10
    document.querySelector('#Score').textContent = scores
}


document.querySelector("#board-bottom").addEventListener("click",(e)=>{
    let ClickOnBubbleNumber = Number(e.target.innerText)
    console.log(ClickOnBubbleNumber);
    if(ClickOnBubbleNumber === randomHits){
        rightSound.play()
        Scores()
        Hits()
        e.target.style.transform='scale(0)'
        setTimeout(()=>{
            Bubbles =""
            CreateBubble()
        },1000)
    }
    else{
        wrongSound.play()
    }
})



