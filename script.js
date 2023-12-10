function addUser(){
  let player1=document.getElementById("player1")
  let player2=document.getElementById("player2")
  localStorage.setItem("player1", player1.value)
  localStorage.setItem("player2", player2.value)
  window.location="gamepage.html"
}