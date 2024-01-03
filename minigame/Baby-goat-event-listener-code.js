document.addEventListener("DOMContentLoaded", () => {
  <button id="startButton">Start Game</button>
    { name: "Baby Goat 1",
      img: "babygoats1.jpeg", height: "25", width: "25", alt: "baby goat with open mouth and cone hat on yellow background"
    },
    { name: "Baby Goat 2",
      img: "babygoats2.jpeg", height: "25", width: "25", alt: "AI baby goat to left of dark orb with other planets in background"
    },
    { name: "Baby Goat 3",
      img: "babygoats3.jpeg", height: "25", width: "25", alt: "AI baby goat in floral coat with pink collar"
    },
    { name: "Baby Goat 4",
      img: "babygoats4.jpeg", height: "25", width: "25", alt: "AI goat facing left with rainbow striped body"
    },
    { name: "Baby Goat 5",
      img: "babygoats5.jpeg", height: "25", width: "25", alt: "AI baby goat facing forward with white fur, red polkadot bows on each ear, and tongue sticking out"
    },
    { name: "Baby Goat 6",
      img: "babygoats6.jpeg", height: "25", width: "25", alt: "goat with orange sunglasses facing forward on orange background"
    },
    { name: "Baby Goat 1",
      img: "babygoats1.jpeg", height: "25", width: "25", alt: "baby goat with open mouth and cone hat on yellow background"
    },
    { name: "Baby Goat 2",
      img: "babygoats2.jpeg", height: "25", width: "25", alt: "AI baby goat to left of dark orb with other planets in background"
    },
    { name: "Baby Goat 3",
      img: "babygoats3.jpeg", height: "25", width: "25", alt: "AI baby goat in floral coat with pink collar"
    },
    { name: "Baby Goat 4",
      img: "babygoats4.jpeg", height: "25", width: "25", alt: "AI goat facing left with rainbow striped body"
    },
    { name: "Baby Goat 5",
      img: "babygoats5.jpeg", height: "25", width: "25", alt: "AI baby goat facing forward with white fur, red polkadot bows on each ear, and tongue sticking out"
    },
    { name: "Baby Goat 6",
      img: "babygoats6.jpeg", height: "25", width: "25", alt: "goat with orange sunglasses facing forward on orange background"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const board = document.querySelector('.board');
  const result = document.getElementById('score');
  const placeholder = "questionmark.jpeg";
  const blank = "pinkbackground.jpeg";
  var cardsClicked = [];
  var cardsClickedID = [];
  var cardsMatched = [];

  // game board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", placeholder);
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }

  // card flip
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsClicked.push(cardArray[cardId].name);
    cardsClickedID.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsClicked.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // check match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const firstCard = cardsClickedID[0];
    const secondCard = cardsClickedID[1];

    if (firstCard === secondCard) {
      cards[firstCard].setAttribute("src", placeholder);
      cards[secondCard].setAttribute("src", placeholder);
      alert("You have clicked the same image!");
    } else if (cardsClicked[0] === cardsClicked[1]) {
      cards[firstCard].setAttribute("src", blank);
      cards[secondCard].setAttribute("src", blank);
      cards[firstCard].removeEventListener("click", flipCard);
      cards[secondCard].removeEventListener("click", flipCard);
      cardsMatched.push(cardsClicked);
    } else {
      setTimeout(() => {
        cards[firstCard].setAttribute("src", placeholder);
        cards[secondCard].setAttribute("src", placeholder);
      }, 300);
    }
    cardsClicked = [];
    cardsClickedID = [];
    result.textContent = cardsMatched.length;
    if (cardsMatched.length === cardArray.length / 2) {
      result.textContent = "Congratulations! You found them all!";
    }
  }

  createBoard();
});
