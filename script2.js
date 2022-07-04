// 分別建立變數存放玩家與電腦勝場數並呈現在初始畫面
let playerWin = 0;
let playScore = document.querySelector(".pScore");
playScore.textContent = `Player Score : ${playerWin}`;
let computerWin = 0;
let computerScore = document.querySelector(".cScore");
computerScore.textContent = `Computer Score : ${computerWin}`;

// 聆聽button事件，
const btns = document.querySelectorAll("button");
btns.forEach ((btn) => {
  btn.addEventListener("click", () => {
// 建立playerSelection變數存放玩家選擇的button
    let playerSelection = btn.textContent;
// 建立computerSelection變數存放電腦的出拳
    let computerSelection = computerPlay();
// 比較playerSelection & computerSelection，顯示當輪結果
    let roundResult = document.querySelector(".rResult");
    roundResult.textContent = `Round Result : ${playRound(playerSelection, computerSelection)}`;
// 贏家勝場數+1
    if (roundResult.textContent.includes("Win")) {
      playerWin += 1;
      playScore.textContent = `Player Score : ${playerWin}`;
      // console.log(playerWin, computerWin);
    }
    else if (roundResult.textContent.includes("Lose")) {
      computerWin+= 1;
      computerScore.textContent = `Computer Score : ${computerWin}`;
      // console.log(playerWin, computerWin);
    }    
// 若有人贏五場，宣布贏家，拔掉所有按鈕
    if (playerWin === 5) {
      roundResult.textContent ="You Win";   
      for (const btn of btns) {
        btn.setAttribute("style", "display:none");
      }
    }
    else if (computerWin === 5) {
      roundResult.textContent ="You Lose";
      for (const btn of btns) {
        btn.setAttribute("style", "display:none");
      }
    }
  });
});

// 建立computerPlay函數，隨機產生電腦出拳，並返回出拳種類。
function computerPlay() {
  let type = ["Paper", "Scissors", "Rock"];
  let rand = Math.floor(Math.random() * type.length);
  return type[rand];
}
// 建立playRound函數，比較兩者出拳，並返回當輪贏結果
function playRound(playerSelection, computerSelection) {
  //假如用戶出剪刀
  if (playerSelection == "Scissors") {
    //假如電腦出剪刀
    if (computerSelection == "Scissors") {
      //返回"Tie"
      return "Tie"
    }
    //假如電腦出石頭
    if (computerSelection == "Rock") {
      //返回"You Lose! Rock beats Scissors"
      return "You Lose! Rock beats Scissors"
    }
  	//假如電腦出布
    if (computerSelection == "Paper") {
  		//返回"You Win! Scissors beats Paper"
      return "You Win! Scissors beats Paper"
    }
  }
  //假如用戶出石頭
  if (playerSelection == "Rock") {
  	//假如電腦出剪刀
    if (computerSelection == "Scissors") {
  		//返回"You Win! Rock beats Scissors"
      return "You Win! Rock beats Scissors"
    }
  	//假如電腦出石頭
    if (computerSelection == "Rock") {
  		//返回"Tie"
      return "Tie"
    }
  	//假如電腦出布
    if (computerSelection == "Paper") {
  		//返回"You Lose! Paper beats Rock"
      return "You Lose! Paper beats Rock"
    }
  }
  //假如用戶出布
  if (playerSelection == "Paper") {
  	//假如電腦出剪刀
    if (computerSelection == "Scissors") {
  		//返回"You Lose! Scissors beats Paper"
      return "You Lose! Scissors beats Paper"
    }
  	//假如電腦出石頭
    if (computerSelection == "Rock") {
  		//返回"You Win! Paper beats Rock"
      return "You Win! Paper beats Rock"
    }
  	//假如電腦出布
    if (computerSelection == "Paper") {
  		//返回"Tie"
      return "Tie"
    }
  }
}