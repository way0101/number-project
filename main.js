//랜덤번호 지정
//유저가 번호를 입렵한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 Down
//랜덤번호가 > 유저번호 Up
//Reset버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다.
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.querySelector("#play")
let userInput =  document.querySelector("#user")
let resultArea = document.querySelector(".result")
let resetBtn = document.querySelector("#reset")
let chances = 5
let gameOver = false
let chanceArea = document.querySelector(".chance")
let history = []

playButton.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus", function(){
    userInput.value = ""
})


function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100)+1;
    console.log("정답", computerNum)
}
pickRandomNum()

function play(){
    let userValue = userInput.value;
    if(userValue <1 || userValue >100){
        resultArea.textContent= "1과 100사이 숫자를 입력해 주세요"
        return
    }
    if(history.includes(userValue)){
        resultArea.textContent ="이미 입력한 숫자 입니다."
        return
    }
    chances --;
    if(userValue < computerNum){
        resultArea.textContent = "Up!!"
        console.log("Up!!")
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!"
        console.log("Down")
    }else{
        resultArea.textContent = "정답입니다.!"
        console.log("정답입니다.!")
        gameOver = true
    }
    history.push(userValue)
    console.log(history)
    if(chances < 1){
        gameOver = true
    }
    if(gameOver){
        playButton.disabled = true
    }
    if(userValue === computerNum){
        playButton.disabled = true
    }
    chanceArea.textContent = `남은기회:${chances}번`
}
function reset(){
    //input 창 정리
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum()
    resultArea.textContent = "결과값이 여기 나옵니다."
    chances = 5
    history = []
    chanceArea.textContent = `남은기회:${chances}번`
}
