do {    
    // user chooses
    var userChoice = prompt("Do you choose rock, paper or scissors?");

    // lets identify some numbers to help the computer choose, 1-4
    var computerChoice = Math.floor((Math.random() * 4) + 1);;

    // a variable for my loop
    var i = 1

    // computer chooses based on random number
    if (computerChoice >= 1 && computerChoice <= 2) {
        computerChoice = "rock";
    } else if(computerChoice > 2 && computerChoice <=3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // test choices by running this line
    // alert("computer chose " + computerChoice + ". And user chose " + userChoice + ".")

    // let's compare them now. who wins?
    if (userChoice==="rock"){
        if (computerChoice === "rock"){
            alert("tie! you both chose rock!");
        } else if(computerChoice === "paper"){
            alert("You LOSE!! computer chose paper. Paper beats rock!");
        } else { // computer chooses scissors
            alert("You WIN! computer chose scissors. Rock beats scissors!");
        }
    }
    else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            alert("You WIN! computer chose rock. Paper beats rock");
        } else if(computerChoice === "paper"){
            alert("TIE! computer chose paper too!");
        } else { // computer chooses scissors
            alert("You LOSE! computer chose scissors. Scissors beat paper!");
        }
    }
         
    else if (userChoice === "scissors"){ // user chose scissors 
        if(computerChoice === "rock"){
            alert("You Lose. computer chose rock. rock beats scissors.");
        } else if(computerChoice === "paper"){
            alert("You WIN! computer chose paper. scissors beats paper");
        } else { // computer chooses scissors
            alert("TIE! you both chose scissors!");
        }
    }

    else {
        alert("Oops! Something went wrong! Please try again.")
    }
  
  // do you want to play again? loopy
    var wantsToPlayAgain = confirm("Would you like to play again?");
    if(wantsToPlayAgain){
        console.log("Ok is true");
        var i = 1;
    }
    else {
        console.log("cancel is false");
        var i = 0;
    }
} while (i === 1);
