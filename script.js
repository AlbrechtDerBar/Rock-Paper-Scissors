  let winNum = 0;
  let lossNum = 0;
  let tieNum = 0;


function gameStart(elem) {
  var id = elem.id;
  var bot = Math.floor(Math.random() * 3);

  var win = document.getElementById("win-stat");
  var wins = document.getElementById("wins");
  var losses = document.getElementById("losses");
  var ties = document.getElementById("ties");

  switch(true) {
    case(id == "Rock" && bot == "0"):
      win.innerHTML = "Tie";
      tieNum += 1;
      ties.innerHTML = tieNum;
    break
    case(id == "Rock" && bot == "1"):
      win.innerHTML = "Bot Wins";
      lossNum += 1;
      losses.innerHTML = lossNum;
    break
    case(id == "Rock" && bot == "2"):
      win.innerHTML = "Player Wins";
      winNum += 1;
      wins.innerHTML = winNum;
    break
    case(id == "Paper" && bot == "0"):
      win.innerHTML = "Player Wins";
      winNum += 1;
      wins.innerHTML = winNum;
    break
    case(id == "Paper" && bot == "1"):
      win.innerHTML = "Tie";
      tieNum += 1;
      ties.innerHTML = tieNum;
    break
    case(id == "Paper" && bot == "2"):
      win.innerHTML = "Bot Wins";
      lossNum += 1;
      losses.innerHTML = lossNum;
    break
    case(id == "Scissors" && bot == "0"):
      win.innerHTML = "Bot Wins";
      lossNum += 1;
      losses.innerHTML = lossNum;
    break
    case(id == "Scissors" && bot == "1"):
      win.innerHTML = "Player Wins";
      winNum += 1;
      wins.innerHTML = winNum;
    break
    case(id == "Scissors" && bot == "2"):
      win.innerHTML = "Tie";
      tieNum += 1;
      ties.innerHTML = tieNum;
    break
  }
}