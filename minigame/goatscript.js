document.addEventListener("DOMContentLoaded", () => {
  let cardArray = [
      {
        id: 1,
        image: "babygoats1_licensed.jpeg",
        newAlt: "baby goat with open mouth and cone hat on yellow background",
      },
      {
        id: 2,
        image: "babygoats2_licensed.jpeg",
        newAlt: "baby goat in serene yoga pose on pink petals with light purple background",
      },
      {
        id: 3,
        image: "babygoats3_licensed.jpeg",
        newAlt: "baby goat playing with blue ball on white background",
      },
      {
        id: 4,
        image: "babygoats4_licensed.jpeg",
        newAlt: "adorable baby goat painted with rainbow flowers",
      },
      {
        id: 5,
        image: "babygoats5_licensed.jpeg",
        newAlt: "baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
      },
      {
        id: 6,
        image: "babygoats6_licensed.jpeg",
        newAlt: "baby goat in red pyjama on white background"
      },
      {
        id: 7,
        image: "babygoats1_licensed.jpeg",
        newAlt: "baby goat with open mouth and cone hat on yellow background",
      },
      {
        id: 8,
        image: "babygoats2_licensed.jpeg",
        newAlt: "baby goat in serene yoga pose on pink petals with light purple background",
      },
      {
        id: 9,
        image: "babygoats3_licensed.jpeg",
        newAlt: "baby goat playing with blue ball on white background",
      },
      {
        id: 10,
        image: "babygoats4_licensed.jpeg",
        newAlt: "adorable baby goat painted with rainbow flowers",
      },
      {
        id: 11,
        image: "babygoats5_licensed.jpeg",
        newAlt: "baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
      },
      {
        id: 12,
        image: "babygoats6_licensed.jpeg",
        newAlt: "baby goat in red pyjama on white background"
      },
  ];

  let placeholder = "question_mark_licensed.jpg";
  let blank = "pink_ribbon_licensed.jpeg";
  var cardsClicked = [];
  var cardsClickedID = [];
  var cardsMatched = [];

  let cardsContainer = document.querySelector(".cards-container");
  let result = document.getElementById("score");
  let movesDisplay = document.querySelector(".move-counter");
  let timerDisplay = document.querySelector(".timer");
  let restartButton = document.querySelector(".restart");
  let toggledCards = [];
  let moves = 0;
  let matches = 0;
  let timer;

  function startGame() {
    let shuffledCards = [...cardArray].sort(() => Math.random() - 0.5);
    moves = 0;
    matches = 0;
    toggledCards = [];
    movesDisplay.textContent = moves;
    cardsContainer.innerHTML = '';
    clearInterval(timer);
    timerDisplay.textContent = '00:00';
    timer = setInterval(startTimer, 1000);

    shuffledCards.forEach(card => {
      let cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.name = card.newAlt;
      cardElement.innerHTML = `
        <div class="front" style="background-image: url(${card.image})"></div>
        <div class="back"></div>
      `;
      cardsContainer.appendChild(cardElement);
    });
  }

  function startTimer() {
    let minutes = Math.floor(moves / 60);
    let seconds = moves % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    moves++;
  }

  function checkForMatch() {
    let cards = Array.from(cardsContainer.children);
    let [card1, card2] = toggledCards;
    if (card1.dataset.name === card2.dataset.name) {
      card1.removeEventListener('click', onCardClick);
      card2.removeEventListener('click', onCardClick);
      matches++;
      if (matches === cardArray.length) {
        clearInterval(timer);
        alert('Congratulations! You found them all!');
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }, 1000);
    }
    toggledCards = [];
  }

  function onCardClick(e) {
    let card = e.currentTarget;
    if (toggledCards.length < 2 && !toggledCards.includes(card)) {
      card.classList.add('flipped');
      toggledCards.push(card);
      if (toggledCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        checkForMatch();
      }
    }
  }

  cardsContainer.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains('card')) {
      onCardClick(e);
    }
  });

  restartButton.addEventListener('click', startGame);

  startGame();
});