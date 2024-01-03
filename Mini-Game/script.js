const cards = document.getElementsByClassName("card");
let allImages=
  document.getElementsByClassName("card-image");
let movesDisplay =
  document.querySelector(".move-counter");
let toggledCardsArray = [];
let move = 0;
let winCount = 0;

const imagesLinkArray = [
  {
  id: 2,
  src: "babygoats1_licensed.jpeg",
  alt: "baby goat with open mouth and cone hat on yellow background",
    },
  {
  id: 3,
  src: "babygoats2_licensed.jpeg",
  alt: "baby goat in serene yoga pose on pink petals with light purple background",
    },
  {
  id: 4,
  src: "babygoats3_licensed.jpeg",
  alt: "baby goat playing with blue ball on white background",
    },
  {
  id: 5,
  src: "babygoats4_licensed.jpeg",
  alt: "adorable baby goat painted with rainbow flowers",
      },
  {
  id: 6,
  src: "babygoats5_licensed.jpeg",
  alt: "baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
      },
  {
  id: 7,
  src: "babygoats6_licensed.jpeg",
  alt: "baby goat in red pyjama on white background",
      },
  {
  id: 8,
  src: "babygoats1_licensed.jpeg",
  alt: "baby goat with open mouth and cone hat on yellow background",
      },
  {
  id: 9,
  src: "babygoats2_licensed.jpeg",
  alt: "baby goat in serene yoga pose on pink petals with light purple background",
      },
  {
  id: 10,
  src: "babygoats3_licensed.jpeg",
  alt: "baby goat playing with blue ball on white background",
      },
  {
  id: 11,
  src: "babygoats4_licensed.jpeg",
  alt: "adorable baby goat painted with rainbow flowers",
      },
  {id: 12,
  src: "babygoats5_licensed.jpeg",
  alt: "baby goats side-by-side wearing plain hoodies in lavender, magenta, rainbox, teal, and yellow",
      },
  {id: 13,
  src: "babygoats6_licensed.jpeg",
  alt: "baby goat in red pyjama on white background",
    }
];
const restartGame = () => {
  let toggledCard = document.getElementsByClassName("card toggled");
  imagesLinkArray.sort(() => Math.random() -0.5);
  
Array.from(toggledCard).forEach(function (el) {
  setTimeout (() => {
    el.classList.remove("toggled");
  }, 0);
});

toggledCardsArray.length = 0;
move = 0;
winCount=0;
movesDisplay.innerText = `Moves: ${move}`;
    
let allImagesSrc = document.getElementsByClassName("card-image");

Array.from(allImagesSrc).forEach((el, index)=> {
    el.src =imagesLinkArray[index].src;
    el.alt=imagesLinkArray[index].alt;
    el.id=imagesLinkArray[index].id;
  });
};

const startGame = document.getElementById("startGame");
startGame.addEventListener("click", startGame);

const restart = document.getElementById("restart");
restartGame.addEventListener("click", restartGame);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    this.classList.add("toggled");
    toggledCardsArray.push(this);

    if(toggledCardsArray.length > 1) {
      let thisImgSrc = this.querySelector(".card-image").src;
      let previousImgSrc = toggledCardsArray[toggledCardsArray.length -2].querySelector(".card-image").src;
    
      if(thisImgSrc !== previousImgSrc){
        toggledCardsArray.forEach(function (el){
          setTimeout(()=> {
            el.classList.remove("toggled");
          }, 500);
        });

        toggledCardsArray.length = 0;
        move++;
      } else {
        toggledCardsArray.length = 0;
        move++;
        winCount++;
      }
    
      movesDisplay.innerText = `Moves: $(move)`;
    
      if(winCount===6) {
        setTimeout(()=> {
          alert(`Congratulations! You matched all the pairs in $(move) moves! You win!`);
        }, 300)
      }
    }
  });
}
startGame();
