/* Task 1 --------------------------------------------------------------------------------------- */

/* This is a line with exactly 100 characters --------------------------------------------------- */

/**
 * The question about the DOM:
 * El DOM (Document Object Model) és una manera de representar una web com una estructura d'objectes a la cual podem afegir llenguatges de programació convertint els elements d'un document en objectes que es poden modificar dinàmicament, i gràcies a aixo podem crear pàgines web interactives i dinàmiques.
 */

/**
 * The question about `defer`:
 * Quan posem l'atribut defer el que fem és que els scripts es carreguin de manera asíncrona. D'aquesta manera ens assegurem que els scripts es carregaran un cop tinguem la pàgina de HTML carregada.
 */

/**
 * The question about `getElementBy...` vs `getElementsBy...`:
 * La diferencia és que getElementBy retorna un sol element i getElementsBy retorna múltiples elements. Els mètodes que son semblants serien el querySelector i el querySelectorAll.
 */

/* Task 2 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 2 solution ------------------------------------------------------------------------------ */

const roles = document.getElementsByClassName("nav-role")[0];
const user = roles.querySelectorAll("li")[0];
const admin = roles.querySelectorAll("li")[1];
const adminOptions = document.getElementsByClassName("admin");
const userOptions = document.getElementsByClassName("nav-options");

user.addEventListener("click", () => {
  user.classList.add("role-selected");
  admin.classList.remove("role-selected");
  for (const element of adminOptions) {
    element.style.display = "none";
  }
});
admin.addEventListener("click", () => {
  admin.classList.add("role-selected");
  user.classList.remove("role-selected");
  for (const element of adminOptions) {
    element.style.display = "inline";
  }
});

/* Task 3 --------------------------------------------------------------------------------------- */

let teams = [
  {
    team: "South Korea",
    games: {
      wins: 0,
      draws: 1,
      losses: 2,
    },
  },
  {
    team: "Denmark",
    games: {
      wins: 1,
      draws: 0,
      losses: 2,
    },
  },
  {
    team: "Iceland",
    games: {
      wins: 2,
      draws: 1,
      losses: 0,
    },
  },
  {
    team: "France",
    games: {
      wins: 1,
      draws: 2,
      losses: 0,
    },
  },
];

/* Task 3 solution ------------------------------------------------------------------------------ */

const teamsWithPoints = teams.map((team) => {
  const totalPoints = team.games.wins * 3 + team.games.draws * 1;
  return { team: team.team, totalPoints };
});

teamsWithPoints.sort((a, b) => b.totalPoints - a.totalPoints);

const tableClassification = document.getElementById("classification");

let i = 0;
for (const teamWithPoints of teamsWithPoints) {
  const team = teams.find((el) => el.team === teamWithPoints.team);
  const newRow = document.createElement("tr");

  const teamCell = document.createElement("td");
  teamCell.textContent = team.team;
  newRow.appendChild(teamCell);

  const winCell = document.createElement("td");
  winCell.textContent = team.games.wins;
  newRow.appendChild(winCell);

  const drawsCell = document.createElement("td");
  drawsCell.textContent = team.games.draws;
  newRow.appendChild(drawsCell);

  const lossesCell = document.createElement("td");
  lossesCell.textContent = team.games.losses;
  newRow.appendChild(lossesCell);

  const pointsCell = document.createElement("td");
  pointsCell.textContent = teamWithPoints.totalPoints;
  newRow.appendChild(pointsCell);

  if (i === 0) {
    newRow.classList.add("classification-first");
  }
  tableClassification.appendChild(newRow);
  i++;
}

/* Task 4 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 4 solution ------------------------------------------------------------------------------ */

const clients = document.getElementById("customers");
const unpaid = clients.querySelectorAll("tbody tr td:nth-child(3)");
const amounts = clients.getElementsByClassName("amount");
const finalResult = clients.querySelectorAll("tfoot tr td:nth-child(2)")[0];
const removeUnpaid = clients.querySelectorAll("tfoot tr td:nth-child(3)")[0];
for (const element of unpaid) {
  const days = parseInt(element.textContent);
  if (days < 0) {
    element.classList.add("unpaid");
  }
}

const balance = () => {
  let total = 0;
  for (const element of amounts) {
    const amount = parseFloat(element.textContent);
    if (!isNaN(amount)) {
      total += amount;
    }
  }
  finalResult.textContent = total;
};
balance();
removeUnpaid.addEventListener("click", () => {
  finalResult.textContent = "";
  const unpaid = clients.getElementsByClassName("unpaid");
  for (i = unpaid.length - 1; i >= 0; i--) {
    unpaid[i].closest("tr").remove();
  }
  balance();
});

/* Task 5 --------------------------------------------------------------------------------------- */

let rating = 0;

/* Task 5 solution ------------------------------------------------------------------------------ */
const stars = document.querySelectorAll(".star-gray");
for (const [index, star] of stars.entries()) {
  star.addEventListener("click", () => {
    for (const element of stars) {
      element.classList.remove("star-pink");
      element.classList.add("star-gray");
    }
    for (let i = index; i >= 0; i--) {
      stars[i].classList.remove("star-gray");
      stars[i].classList.add("star-pink");
    }
    rating = index + 1;
  });
}

/* Task 6 --------------------------------------------------------------------------------------- */

// This is how many pixels the bar has to move each time.
const delta = 20;
// Same initial value as left: 200px in CSS.
let left = 200;

/* Task 6 solution ------------------------------------------------------------------------------ */

let rightPressed = false;
let leftPressed = false;
const barContainer = document.querySelector(".bar-container");
const bar = document.querySelector(".bar");
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const containerWidth = barContainer.offsetWidth;
const barWidth = bar.offsetWidth;

function moveBar() {
  if (rightPressed) {
    left += delta;
    if (left + barWidth > containerWidth) {
      left = containerWidth - barWidth;
    }
    bar.style.left = left + "px";
  } else if (leftPressed) {
    left -= delta;
    if (left < 0) {
      left = 0;
    }
    bar.style.left = left + "px";
  }
}

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

setInterval(moveBar, 40);

/* Task 7 --------------------------------------------------------------------------------------- */

// These indicate how many pixels the ball has to move each time on each axis.
let topDelta = (leftDelta = 5);
// These are the coordinates for ball position.
let topCoord = (leftCoord = 0);
// This is the width of the playground area.
const fieldWidth = document.querySelector(".ball-container").clientWidth;
// This is the height of the playground area.
const fieldHeight = document.querySelector(".ball-container").clientHeight;

/* Task 7 solution ------------------------------------------------------------------------------ */

const ball = document.querySelector(".ball-container div");

function moveBall() {
  topCoord += topDelta;
  leftCoord += leftDelta;

  if (topCoord <= 0 || topCoord >= fieldHeight - ball.clientHeight) {
    topDelta = -topDelta;
  }
  if (leftCoord <= 0 || leftCoord >= fieldWidth - ball.clientWidth) {
    leftDelta = -leftDelta;
  }

  ball.style.top = topCoord + "px";
  ball.style.left = leftCoord + "px";
}

ball.style.top = topCoord + "px";
ball.style.left = leftCoord + "px";

setInterval(moveBall, 20);
