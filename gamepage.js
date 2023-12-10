player1Score=0
player2Score=0
let questionTurn="Player1"
let answerTurn="Player2"
let player1Name=localStorage.getItem("player1")
let player2Name=localStorage.getItem("player2")
document.getElementById("player1Game").innerHTML=player1Name
document.getElementById("player2Game").innerHTML=player2Name
document.getElementById("player1Score").innerHTML=player1Score
document.getElementById("player2Score").innerHTML=player2Score
document.getElementById("question").innerHTML="Question Turn: " + player1Name
document.getElementById("answer").innerHTML="Answer Turn: " + player2Name
let word
function send(){
    let input=document.getElementById("inputValue").value
    word=input.toLowerCase()
    console.log(word)
    let char1=word[0]
    let char2=word[Math.floor(word.length/2)]
    let char3=word[word.length-1]
    console.log(char1+char2+char3)
    let removechar1=word.replace(char1, "_")
    let removechar2=removechar1.replace(char2, "_")
    let removechar3=removechar2.replace(char3, "_")
    console.log(removechar3)
    let question="<h4 id='word_display'>Q:  "+removechar3+"</h4>"
    let answerInput="<br> Answer: <input id='input-checkbox' type='text'>"
    let checkbtn="<br><br><button id='btn-check' onclick='check()'>Check</button>"
    let row=question+answerInput+checkbtn
    document.querySelector(".output").innerHTML=row
    document.querySelector(".output").style.display="block"
    document.getElementById("inputValue").value=""
    document.getElementById("check-display").innerHTML=""
}

function check(){
    let input2=document.querySelector("#input-checkbox").value
    let answer=input2.toLowerCase()
    if(answer==word){
        if(answerTurn=="Player1"){
            player1Score++
            document.getElementById("player1Score").innerHTML=player1Score
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
        else{
            player2Score++
            document.getElementById("player2Score").innerHTML=player2Score
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
    }
    // else{
    //     document.getElementById("check-display").innerHTML="You answer is wrong. Try another word."
    // }
        if(questionTurn=="Player1"){
            questionTurn="Player2"
            document.getElementById("question").innerHTML="Question Turn: " + player2Name
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
        else{
            questionTurn=="Player1"
            document.getElementById("question").innerHTML="Question Turn: " +player1Name
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
        if(answerTurn=="Player1"){
            answerTurn="Player2"
            document.getElementById("answer").innerHTML="Answer Turn: " + player2Name
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
        else{
            answerTurn="Player1"
            document.getElementById("answer").innerHTML="Answer Turn: " + player1Name
            document.getElementById("check-display").innerHTML="You answer is correct."
        }
}