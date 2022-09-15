const targetScore = document.querySelector("#target");
const allScoreFlips = document.querySelectorAll(".digit");
const homeFlips = document.querySelectorAll(".digit.home");
const awayFlips = document.querySelectorAll(".digit.away");
const setFlip = document.querySelector("#set");
const reset = document.querySelector("#reset");

function updateScore(flip, playerFlips, opponentFlips) {
  let curNum = parseInt(flip.innerHTML);
  if (curNum < 9) {
    flip.innerHTML = curNum + 1;
  } else {
    flip.innerHTML = 0;
  }
  if (parseInt(playerFlips[0].innerHTML + playerFlips[1].innerHTML) === parseInt(targetScore.value)) {
    for (let flip of playerFlips) {
      flip.style.backgroundColor = "#38ae38";
    }
    for (let flip of opponentFlips) {
      flip.style.backgroundColor = "#cf2b2b";
    }
    for (let scoreFlip of allScoreFlips) {
      scoreFlip.disabled = true;
    }
  } else {
    for (let flip of playerFlips) {
      flip.style.backgroundColor = "#3385c3";
    }
  }
}

for (let flip of homeFlips) {
  flip.addEventListener("click", () => { updateScore(flip, homeFlips, awayFlips) });
  flip.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (parseInt(flip.innerHTML) > 0) {
      flip.innerHTML = parseInt(flip.innerHTML) - 1;
    }
  })
}

for (let flip of awayFlips) {
  flip.addEventListener("click", () => { updateScore(flip, awayFlips, homeFlips) });
  flip.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    if (parseInt(flip.innerHTML) > 0) {
      flip.innerHTML = parseInt(flip.innerHTML) - 1;
    }
  })
}

setFlip.addEventListener("click", () => {
  if (parseInt(setFlip.innerHTML) < 9) {
    setFlip.innerHTML = parseInt(setFlip.innerHTML) + 1;
  } else {
    setFlip.innerHTML = 1;
  }
});
setFlip.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  if (parseInt(setFlip.innerHTML) > 1) {
    setFlip.innerHTML = parseInt(setFlip.innerHTML) - 1;
  }
})

reset.addEventListener("click", () => {
  for (let scoreFlip of allScoreFlips) {
    scoreFlip.innerHTML = 0;
    scoreFlip.disabled = false;
  }
  for (let homeFlip of homeFlips) {
    homeFlip.style.backgroundColor = "#3385c3";
  }
  for (let awayFlip of awayFlips) {
    awayFlip.style.backgroundColor = "#b93d91";
  }
})