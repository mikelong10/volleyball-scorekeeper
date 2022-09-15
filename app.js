const targetScore = document.querySelector("#target");
const allScoreFlips = document.querySelectorAll(".digit");
const [homeLeft, homeRight] = document.querySelectorAll(".digit.home");
const [awayLeft, awayRight] = document.querySelectorAll(".digit.away");
const setFlip = document.querySelector("#set");
const reset = document.querySelector("#reset");

const home = {
  left: homeLeft,
  right: homeRight
}
const away = {
  left: awayLeft,
  right: awayRight
}

function updateScore(flip, player, opponent) {
  let curDigit = parseInt(flip.innerHTML);
  if (curDigit < 9) {
    flip.innerHTML = curDigit + 1;
  } else {
    player.left.innerHTML = parseInt(player.left.innerHTML) + 1;
    flip.innerHTML = 0;
  }
  if (parseInt(player.left.innerHTML + player.right.innerHTML)
    === parseInt(targetScore.value)) {
    for (let flip of Object.values(player)) {
      flip.style.backgroundColor = "#38ae38";
    }
    for (let flip of Object.values(opponent)) {
      flip.style.backgroundColor = "#cf2b2b";
    }
    for (let scoreFlip of allScoreFlips) {
      scoreFlip.disabled = true;
    }
  }
}

function decreaseDigit(event, flip, floor) {
  event.preventDefault();
  if (parseInt(flip.innerHTML) > floor) {
    flip.innerHTML = parseInt(flip.innerHTML) - 1;
  }
}

for (let flip of Object.values(home)) {
  flip.addEventListener("click", () => { updateScore(flip, home, away) });
  flip.addEventListener("contextmenu", (event) => { decreaseDigit(event, flip, 0) })
}

for (let flip of Object.values(away)) {
  flip.addEventListener("click", () => { updateScore(flip, away, home) });
  flip.addEventListener("contextmenu", (event) => { decreaseDigit(event, flip, 0) })
}

setFlip.addEventListener("click", () => {
  if (parseInt(setFlip.innerHTML) < 9) {
    setFlip.innerHTML = parseInt(setFlip.innerHTML) + 1;
  } else {
    setFlip.innerHTML = 1;
  }
});
setFlip.addEventListener("contextmenu", (event) => {
  decreaseDigit(event, setFlip, 1)
})

reset.addEventListener("click", () => {
  for (let scoreFlip of allScoreFlips) {
    scoreFlip.innerHTML = 0;
    scoreFlip.disabled = false;
  }
  for (let homeFlip of Object.values(home)) {
    homeFlip.style.backgroundColor = "#3385c3";
  }
  for (let awayFlip of Object.values(away)) {
    awayFlip.style.backgroundColor = "#b93d91";
  }
})