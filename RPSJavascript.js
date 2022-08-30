function computerPlay() {
    let randoNumber = Math.random() * 10;

    if (randoNumber <= 3.333) {
        return "Rock";
    }
    else if (randoNumber >= 3.333 && randoNumber <= 6.666) {
        return "Scissors";
    }
    else if (randoNumber >= 6.666) {
        return "Paper";
    }
}

let result = 0;

function playerChoice(choice) {
    let computerChoice = computerPlay();

    document.getElementById("computerChoiceView").textContent = computerChoice;
    document.getElementById("playerChoiceView").textContent = choice;


    if (choice == computerChoice) {
        resultDiv.textContent = "It's a tie!";
        result = "tie";

    document.getElementById("computerChoiceView").style.color = "black";
    document.getElementById("playerChoiceView").style.color = "black";
    } else if ((((choice == "Rock") && (computerChoice == "Scissors")) || ((choice == "Scissors") && (computerChoice == "Paper")) || ((choice == "Paper") && (computerChoice == "Rock")))) {
        resultDiv.textContent = "You win!";
        result = "win";
    document.getElementById("computerChoiceView").style.color = "red";
    document.getElementById("playerChoiceView").style.color = "green";
    } else if (((choice == "Scissors") && (computerChoice == "Rock") || (choice == "Paper") && (computerChoice == "Scissors") || (choice == "Rock") && (computerChoice == "Paper"))) {
        resultDiv.textContent = "You lose!";
        result = "loss";

    document.getElementById("computerChoiceView").style.color = "green";
    document.getElementById("playerChoiceView").style.color = "red";
    }

    roundIncrement(result);

}

let rounds = 0;
let wins = 0;
let losses = 0;
let ties = 0;

/* function roundIncrement() {
    rounds = rounds + 1;
    document.getElementById("roundCounter").textContent = rounds;
} */

function roundIncrement(result) {
    rounds = rounds + 1;

if (result == "win") {
    wins = wins + 1;
} else if (result == "loss") {
    losses = losses + 1;
}
else if (result == "tie") {
    ties = ties + 1;
}
    document.getElementById("roundCounter").textContent = `You are on round ${rounds}, have won ${wins} times, lost ${losses} times, and tied ${ties} times.`;

    if (rounds == 5){
        announceWinner();
    }
}

function announceWinner() {
    if (wins > losses) {
        document.getElementById("winAnnouncer").textContent = "The player wins the game!"
    } else if (wins < losses) {
        document.getElementById("winAnnouncer").textContent = "The computer wins the game!"
    } else {
        document.getElementById("winAnnouncer").textContent = "You tied the game!"}
    rounds = 0;
wins = 0;
losses = 0;
ties = 0;    
}