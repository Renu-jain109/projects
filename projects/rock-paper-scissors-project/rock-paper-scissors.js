let you = document.querySelector("#you");
let bot = document.querySelector("#bot");
let result = document.querySelector("#result");


var choice = ["rock", "paper", "scissors"];
function getbot() {
var randomNumber = Math.floor(Math.random() * choice.length); 
return choice[randomNumber];
}

function youResult(item){
    if(item === "rock"){
        you.textContent = "you clicked rock. ";
    } else if(item === "paper"){
    you.textContent = "you clicked paper. ";
} else{
    you.textContent = "you clicked scissors. "; 
}
};    

document.querySelector("#btn1").addEventListener("click",function() {
    youResult("rock");
    var botChoice = getbot();
 bot.textContent =  `Bot clicked ${botChoice}`;
 checkResult("rock",botChoice);
});

document.querySelector("#btn2").addEventListener("click",function() {
    youResult("paper");
    var botChoice = getbot();
    bot.textContent = `Bot clicked ${botChoice}`;
    checkResult("paper",botChoice);
});

document.querySelector("#btn3").addEventListener("click",function() {
    youResult("scissors");
    var botChoice = getbot();
    bot.textContent = `Bot clicked ${botChoice}`;
    checkResult("scissors",botChoice);
});

 var youCount = 0;
 var botCount = 0;

function checkResult(yourChoice,botChoice) {
    if(
        (yourChoice === "rock" && botChoice === "scissors") ||
        (yourChoice === "paper" && botChoice === "rock") ||
        (yourChoice === "scissors" && botChoice === "paper"))
        { result.textContent = "You Win";
            youCount++;
            document.querySelector("#yScore").textContent = youCount;
        } else if (yourChoice === botChoice){
            result.textContent = "It's Tie";
        } else {
            result.textContent = "Bot Win";
            botCount++;
            document.querySelector("#bScore").textContent = botCount;
        }    
}


