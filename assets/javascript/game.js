$( document ).ready(function() {

// The player will be shown a random number at the start of the game between 19 - 120.
let compChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#compChoice").html(compChoice);
console.log("This is the number to equal: " + compChoice);

// Each crystal will have a random hidden value between 1 - 12.
let crystalOne = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("This is crystalOne: " + crystalOne);
let crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("This is crystalTwo: " + crystalTwo);
let crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("This is crystalThree: " + crystalThree);
let crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
console.log("This is crystalFour: " + crystalFour);

// Counters will display the player's score and win/loss count.
let playerScore = 0;
let wins = 0;
let losses = 0;

// This function holds all of the game logic
function startGame() {

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. Depending on whether the player ins or loses, the win/loss count will go up.
    $("#crystalOne").on ("click", function() {
        console.log("You're clicking crystalOne");
        playerScore += crystalOne
        console.log("This is the new score: " + playerScore);
        $("#playerScore").html(playerScore);
        if (playerScore === compChoice) {
            wins++;
            $("#wins").html(wins);
            console.log("This is the win count: " + wins);
            resetGame();
        } 
        if (playerScore > compChoice) {
            losses++;
            $("#losses").html(losses);
            console.log("This is the loss count: " + losses);
            resetGame();
        }
    })
    $("#crystalTwo").on ("click", function() {
        console.log("You're clicking crystalTwo");
        playerScore += crystalTwo
        console.log("This is the new score: " + playerScore);
        $("#playerScore").html(playerScore);
        if (playerScore === compChoice) {
            wins++;
            $("#wins").html(wins);
            console.log("This is the win count: " + wins);
            resetGame();
        } 
        if (playerScore > compChoice) {
            losses++;
            $("#losses").html(losses);
            console.log("This is the loss count: " + losses);
            resetGame();
        }
    })
    $("#crystalThree").on ("click", function() {
        console.log("You're clicking crystalThree");
        playerScore += crystalThree
        console.log("This is the new score: " + playerScore);
        $("#playerScore").html(playerScore);
        if (playerScore === compChoice) {
            wins++;
            $("#wins").html(wins);
            console.log("This is the win count: " + wins);
            resetGame();
        } 
        if (playerScore > compChoice) {
            losses++;
            $("#losses").html(losses);
            console.log("This is the loss count: " + losses);
            resetGame();
        }
    })
    $("#crystalFour").on ("click", function() {
        console.log("You're clicking crystalFour");
        playerScore += crystalFour
        console.log("This is the new score: " + playerScore);
        $("#playerScore").html(playerScore);
        if (playerScore === compChoice) {
            wins++;
            $("#wins").html(wins);
            console.log("This is the win count: " + wins);
            resetGame();
        } 
        if (playerScore > compChoice) {
            losses++;
            $("#losses").html(losses);
            console.log("This is the loss count: " + losses);
            resetGame();
        }
    })
}

// The game restarts when the player wins or loses. This function generates a new random number and four new values for each of the crytals. The user's score will also reset to zero.
function resetGame () {
    compChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#compChoice").html(compChoice);
    console.log("This is the new number to equal: " + compChoice);
    playerScore = 0;
    $("#playerScore").html(playerScore);
    crystalOne = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log("This is the new crystalOne: " + crystalOne);
    crystalTwo = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log("This is the new crystalTwo: " + crystalTwo);
    crystalThree = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log("This is the new crystalThree: " + crystalThree);
    crystalFour = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    console.log("This is the new crystalFour: " + crystalFour);
}

//Run the startGame function in order to start the game
startGame();

});



