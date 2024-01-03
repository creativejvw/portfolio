var cardsArray = [   
    { "name": "1", "img": "https://www.dropbox.com/scl/fi/r9vy6gezpfl245l58igh6/babygoats1_licensed.jpeg?rlkey=km4k9o7rnvyhsyt2p9059jps2&dl=0", "alt": "AI baby goat with open mouth and cone hat on yellow background",
    },
    { "name": "2", "img": "https://www.dropbox.com/scl/fi/8o3lezw70y3axl2xmtu6d/babygoats2_licensed.jpeg?rlkey=uwt4d028snl1qn34p886bns3o&dl=0", "alt": "AI baby goat in serene yoga pose on pink petals with light purple background",
    },
    { "name": "3", "img": "https://www.dropbox.com/scl/fi/5k6p9aop95c2qt6m342bq/babygoats3_licensed.jpeg?rlkey=c0j0qqtn1brbtzdr9qk7hk8gf&dl=0", "alt": "AI baby goat playing with blue ball on white background",
    },
    { "name": "4", "img": "https://www.dropbox.com/scl/fi/7t14kr8cnv8jcdhm8avl1/babygoats4_licensed.jpeg?rlkey=4nv9vvydpov00u333ldyq544k&dl=0", "alt": "adorable AI baby goat painted with rainbow flowers",
    },
    { "name": "5", "img": "https://www.dropbox.com/scl/fi/6rn4n4m6lzv7r5ubiegvz/babygoats5_licensed.jpeg?rlkey=6v3k4zioqzfof3ywzoti302uz&dl=0", "alt": "AI baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
    },
    { "name": "6", "img": "https://www.dropbox.com/scl/fi/0dhqcflvys33dmpr6kekj/babygoats6_licensed.jpeg?rlkey=t50c6rvi2bciehqs5g9hk2w4d&dl=0", "alt": "AI baby goat in red pyjama on white background",
    },
  ];
var gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(function() {
    return 0.5 - Math.random();   
  })
var game = document.getElementById('game-board');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);
for(var i=0; i<gameGrid.length; i++) {
  var card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('data-name', gameGrid[i].name);
  var front = document.createElement('div');
  front.classList.add('front');
  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${gameGrid[i].img})`;
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
}
var firstGuess = '';
var secondGuess = '';

var count = 0;
var previousTarget = null;

var delay = 1200;

var match = function() {
var selected = document.querySelectorAll('.selected');
for (i = 0; i<selected.length; i++) {
  selected[i].classList.add('match');
  }
};

var resetGuesses = function() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;
  var selected = document.querySelectorAll('.selected');
  for (i = 0; i<selected.length; i++) {
    selected[i].classList.remove('selected');
  }
};

grid.addEventListener('click', function(event) {
  var clicked = event.target;
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) 
    {
      return;
    }
  if (count < 2) {
    count++;
      if (count === 1) {
        firstGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
      } else {
        secondGuess = clicked.parentNode.dataset.name;
        clicked.parentNode.classList.add('selected');
      }
  if (firstGuess !== '' && secondGuess !== '') {
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