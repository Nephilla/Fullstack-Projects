
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardCell = document.getElementById("card-cell")




function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardCell.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardCell.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        sumEl.textContent = "Sum: " + sum
        sumEl.style.color = "lightblue"
        message = "Draw another?"
    } else if (sum === 21) {
        sumEl.textContent = "Sum: " + sum + "!"
        sumEl.style.color = "gold"
        message = "Blackjack!"
        let hasBlackJack = true
    } else {
        sumEl.textContent = "Sum: " + sum
        sumEl.style.color = "red"
        message = "Sorry, you're out."
        let isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}