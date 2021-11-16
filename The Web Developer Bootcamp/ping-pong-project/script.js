let playerOneBtn = document.getElementById("player-one-btn");
let playerTwoBtn = document.getElementById("player-two-btn");
let resetScoreBtn = document.getElementById("reset-score-btn");
let noMatchesInput = document.getElementById("no-matches");

let noMatches = parseInt(noMatchesInput.value);
let playerOneScore = 0;
let playerTwoScore = 0;

noMatchesInput.addEventListener("input", (e) => {
  noMatches = parseInt(e.target.value);
});

playerOneBtn.addEventListener("click", () => {
  playerOneScore++;
  if (playerOneScore === noMatches) {
    playerOneScore = noMatches;
    playerOneBtn.disabled = true;
  }
  document.getElementById("player-one-score").innerHTML = playerOneScore;
});

playerTwoBtn.addEventListener("click", () => {
  playerTwoScore++;
  if (playerTwoScore === noMatches) {
    playerTwoScore = noMatches;
    playerTwoBtn.disabled = true;
  }
  document.getElementById("player-two-score").innerHTML = playerTwoScore;
});

resetScoreBtn.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  document.getElementById("player-one-score").innerHTML = 0;
  document.getElementById("player-two-score").innerHTML = 0;
});
