function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
    } else {
        return 'You suck at spelling, input bear, human, or gun!';
    }
}; 
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0){
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}
function winner (userChoice, computerChoice) {
    if (userChoice === computerChoice){
        return 'It\'s a tie!';
    }
    if (userChoice === 'human'){
        if (computerChoice === 'bear') {
            return 'You\'ve been mauled!';
        } else {
            return 'You\'ve disarmed the gun!';
        }
    }
    if (userChoice === 'bear') {
        if (computerChoice === 'gun'){
            return 'You got shot idiot!';
        }else {
            return 'You mauled the innocent man!';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You\'ve shot the bear';
        }
    }
    }
function playGame() {
    var promptUsesChoice = prompt('Choose bear, human, or gun!');
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(winner(userChoice, computerChoice));
}
playGame();



