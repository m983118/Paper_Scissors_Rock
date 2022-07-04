// set variable to save player and computer wins(initial = 0)
let playerWin = 0;
let playScore = document.querySelector(".pScore");
playScore.textContent = `Player Score : ${playerWin}`;

let computerWin = 0;
let computerScore = document.querySelector(".cScore");
computerScore.textContent = `Computer Score : ${computerWin}`;

// set variable(playerSelection) to save player choice type by click button
const btns = document.querySelectorAll("button");
for (btn of btns) {
    btn.addEventListener("click", () => {
        let playerSelection = btn.textContent;

        // set variable(computerSelection) to save computer choice type
        let computerSelection = computerPlay();

        // compare playerSelection and computerSelection to decide winner
        let roundResult = document.querySelector(".rResult");
        roundResult.textContent = `Round Result : ${playRound(playerSelection, computerSelection)}`;

        // wins of winner +1
        if (roundResult.textContent.includes("Win")) {
            playerWin += 1;
            playScore.textContent = `Player Score : ${playerWin}`;
        }
        else if (roundResult.textContent.includes("Lose")) {
            computerWin+= 1;
            computerScore.textContent = `Computer Score : ${computerWin}`;
        }
        
        // reach five time victories, show result and remove button
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
    })
}

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