
const cardsArray = [   
    { "id": "1", "img": "https://i.imgur.com/1gOAW40.jpg", "alt": "AI baby goat with open mouth and cone hat on yellow background",
    },
    { "id": "2", "img": "https://i.imgur.com/4m521am.jpg", "alt": "AI baby goat in serene yoga pose on pink petals with light purple background",
    },
    { "id": "3", "img": "https://i.imgur.com/sWBZrXN.jpg", "alt": "AI baby goat playing with blue ball on white background",
    },
    { "id": "4", "img": "https://i.imgur.com/tJBerl7.jpg", "alt": "adorable AI baby goat painted with rainbow flowers",
    },
    { "id": "5", "img": "https://i.imgur.com/cexNoA2.jpg", "alt": "AI baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
    },
    { "id": "6", "img": "https://i.imgur.com/gH5uPnz.jpg", "alt": "AI baby goat in red pyjama on white background",
    },
  ];

 let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());   

  const rows = 3;
  const cols = 4;
  let firstGuess = '';
  let secondGuess = '';
  let count = 0;
  let previousTarget = null;
  let delay = 1200;

  const game = document.getElementById("game");
  const gameCard = document.createElement("section");
  grid.setAttribute('class', 'grid');
  game.appendChild(grid);

  gameGrid.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = item.name;

    const front = document.createElement("div");
    front.classList.add("front");

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${item.img})`;
    
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

  const match = () =>{
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.add('match');
    });
  }

  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  };

  grid.addEventListener('click', function (event) {
    let clicked = event.target;
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
      return;
    }
    if (count < 2) {
      count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add("selected");
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }  
    if (firstGuess !== "" && secondGuess !== "") {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});