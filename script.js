//函數 : 隨機返回電腦出拳種類
function computerPlay() {
  let type = ["Paper", "Scissors", "Rock"];
  let rand = Math.floor(Math.random() * type.length);
  return type[rand];
}

//函數 : 根據電腦及用戶出拳返回結果
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

// 變數:存放用戶勝場數
let playerWin = 0;
// 變數:存放電腦勝場數
let computerWin = 0;

//迴圈 : 開始五輪遊戲(無論勝敗或平手)
for (let i = 0; i < 5; i++) {  
  // 變數:存放用戶出拳種類
  let playerShow = prompt("【Paper】or【Scissors】or【Rock】");
  // 變數:引用函數返回電腦出拳種類
  let computerShow = computerPlay();
  // 變數:引用函數返回本輪結果
  let roundResult = playRound(playerShow, computerShow)
  // 顯示本輪結果
  console.log(roundResult);
  // 若本輪結果含有win
  if (roundResult.includes("Win")) {
    // 用戶勝場數+1
    ++playerWin;
  }
  // 若lose字眼出現
  else if (roundResult.includes("Lose")) {
    // 電腦勝場數+1
    ++computerWin;
  }
}

// 比較勝場數，顯示GAME OVER! YOU WIN OR LOSE
if (playerWin > computerWin) {
  console.log("GAME OVER, YOU WIN!");
}
else if (playerWin < computerWin) {
  console.log("GAME OVER, YOU LOSE!")
}
else {
  console.log("GAME OVER, TIE!")
}