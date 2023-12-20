document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    { name: "Baby Goat 1",
      img: "babygoats1.jpeg height="100" width="100" alt="baby goat with open mouth and cone hat on yellow background""
    },
    { name: "Baby Goat 2",
      img: "babygoats2.jpeg height="100" width="100" alt="AI baby goat to left of dark orb with other planets in background""
    },
    { name: "Baby Goat 3",
      img: "babygoats3.jpeg height="100" width="100" alt="AI baby goat in floral coat with pink collar""
    },
    { name: "Baby Goat 4",
      img: "babygoats4.jpeg height="100" width="100" alt="AI goat facing left with rainbow striped body""
    },
    { name: "Baby Goat 5",
      img: "babygoats5.jpeg height="100" width="100" alt="AI baby goat facing forward with white fur, red polkadot bows on each ear, and tongue sticking out""
    },
    { name: "Baby Goat 6",
      img: "babygoats6.jpeg height="100" width="100" alt="goat with orange sunglasses facing forward on orange background"
    },
{ name: "Baby Goat 1",
  img: "babygoats1.jpeg height="100" width="100" alt="baby goat with open mouth and cone hat on yellow background""
},
{ name: "Baby Goat 2",
  img: "babygoats2.jpeg height="100" width="100" alt="AI baby goat to left of dark orb with other planets in background""
},
{ name: "Baby Goat 3",
  img: "babygoats3.jpeg height="100" width="100" alt="AI baby goat in floral coat with pink collar""
},
{ name: "Baby Goat 4",
  img: "babygoats4.jpeg height="100" width="100" alt="AI goat facing left with rainbow striped body""
},
{ name: "Baby Goat 5",
  img: "babygoats5.jpeg height="100" width="100" alt="AI baby goat facing forward with white fur, red polkadot bows on each ear, and tongue sticking out""
},
{ name: "Baby Goat 6",
  img: "babygoats6.jpeg height="100" width="100" alt="goat with orange sunglasses facing forward on orange background"
  }
]

cardArray.sort(() => 0.5 - Math.random()) 

const board = document.queryselector('.board')
const result = document.getElementById('score')
const placeholder = "https://www.dropbox.com/scl/fi/9sdqemjsbur7m4vxu2290/Question-mark.jpeg?rlkey=1lus6dcoqef4gwo6yuxil6fe9&dl=0"
const blank = "https://www.dropbox.com/scl/fi/dxcg0dzbfn9bv2tl43ujt/Pink.jpeg?rlkey=3ngmzbmlmn17bnhxjfgcf1jfi&dl=0"
var cardsClicked = []
var cardsClickedID = []
var cardsMatched = []

// game board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement("img")
    card.setAttribute("src", placeholder)
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    board.appendChild(card)
  }
}

// card flip
function flipCard() {
  var cardId = this.getAttribute("data-id")
  cardsClicked.push(cardArray[cardId].name)
  cardsClickedId.push(cardId)
  this.setAttribute("src", cardArray[cardId].img)
  if (cardsClicked.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

// check match
function checkForMatch() {
  var cards = document.querySelectorAll("img")
  const firstCard = cardsClickedId[0]
  const secondCard = cardsClickedId[1]

  if(firstCard === secondCard) {
      cards[firstCard].setAttribute("src", placeholder)
      cards[secondCard].setAttribute("src", placeholder)
      alert("You have clicked the same image!")
}
  else if(cardsClicked[0] === cardsClicked[1]) {
    cards[firstCard].setAttribute("src", blank)
    cards[secondCard].setAttribute("src", blank)
    cards[firstCard].removeEventListener("click", flipCard)
    cards[secondCard].removeEventListener("click", flipCard)
    cardsMatched.push(cardsClicked)
  } else {
    setTimeout(() => {
      cards[firstCard].setAttribute("src", placeholder)
      cards[secondCard].setAttribute("src", placeholder)
    }, 300)
  }
  cardsClicked = []
  cardsClickedId = []
  result.textContent = cardsMatched.length
  if (cardsMatched.length === cardArray.length/2 {
    result.textContent = "Congratulations! You found them all!"
  }
}

createBoard()

})