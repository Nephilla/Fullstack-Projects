let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

let homeScore = 0
let guestScore = 0


function homeInc1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeInc2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeInc3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestInc1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestInc2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestInc3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
    guestScore = 0
    homeScore = 0
    guestScoreEl.textContent = "00"
    homeScoreEl.textContent = "00"
}