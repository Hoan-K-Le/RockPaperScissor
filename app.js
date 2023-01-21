const playerDisplay = document.querySelector('.player-choice')
const computerDisplay = document.querySelector('.computer-choice')
const resultDisplay = document.querySelector('.result-display')
const allButtons = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

// FOR LOOP
// Another way to iterate through the buttons and add an event listener to each of them
for (let i = 0; i < allButtons.length; i++) {
  // adding event listener to each button, e = to target the vent being click which is the button aka target.ID
  allButtons[i].addEventListener('click', e => {
    userChoice = e.target.id
    playerDisplay.textContent = userChoice
    generateComputerChoice()
    getResults()
  })
}

// FOR EACH(more modern)
// iterating through each button and adding a event listener to each of the buttons, and putting in an event in the parameter so the userr can target the button's id
// allButtons.forEach(button => {
//   button.addEventListener('click', e => {
//     userChoice = e.target.id
//     playerDisplay.textContent = userChoice
//     generateComputerChoice()
//   })
// })

const generateComputerChoice = () => {
  randomChoice = Math.floor(Math.random() * 3) + 1
  if (randomChoice === 1) {
    computerChoice = 'rock'
  }
  if (randomChoice === 2) {
    computerChoice = 'paper'
  }
  if (randomChoice === 3) {
    randomChoice = 'scissor'
  }
  computerDisplay.textContent = computerChoice
}
const getResults = () => {
  if (computerChoice === userChoice) {
    result = 'it is a draw'
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You have won with paper'
  }
  if (computerChoice === 'rock' && userChoice === 'scissor') {
    result = 'You have lost with scissors'
  }
  if (computerChoice === 'scissor' && userChoice === 'paper') {
    result = 'You have lost with paper'
  }
  if (computerChoice === 'scissor' && userChoice === 'rock') {
    result = 'You have won with rock'
  }
  if (computerChoice === 'paper' && userChoice === 'scissor') {
    result = 'You have won with scissor'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You have lost with rock'
  }
  resultDisplay.textContent = result
}
