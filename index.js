let countTeamOne = 0
let countTeamTwo = 0
const teamOneScoreEl = document.getElementById("team_1_score")
const teamTwoScoreEl = document.getElementById("team_2_score")
const winner = document.getElementById("winner")
const teamOneName = document.getElementById("team-1-name")
const teamTwoName = document.getElementById("team-2-name")

const incrementOne = () => {
  countTeamOne += 1
  teamOneScoreEl.innerText = countTeamOne
  winnerCheck(countTeamOne, teamOneName)
}

const incrementTwo = () => {
  countTeamTwo += 1
  teamTwoScoreEl.innerText = countTeamTwo
  winnerCheck(countTeamTwo, teamTwoName)
}


const winnerCheck = (number, name) => {
  if (number == 18) {
    winner.innerText = `Winner is ${name.value}!`
    teamOneScoreEl.disabled = true
    teamTwoScoreEl.disabled = true
  }
}
