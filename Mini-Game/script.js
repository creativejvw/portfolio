


//Array of 6 pairs of baby goat images
var images = [
        <"/babygoats1.jpg" alt="babygoats1" class="hidden">,
        <"/babygoats2.jpg" alt="babygoats2" class="hidden">,
        <"/babygoats3.jpg" alt="babygoats3" class="hidden">,
        <"/babygoats4.jpg" alt="babygoats4" class="hidden">,
        <"/babygoats5.jpg" alt="babygoats5" class="hidden">,
        <"/babygoats6.jpg" alt="babygoats6" class="hidden">,
        <"/babygoats1.jpg" alt="babygoats1" class="hidden">,
        <"/babygoats2.jpg" alt="babygoats2" class="hidden">,
        <"/babygoats3.jpg" alt="babygoats3" class="hidden">,
        <"/babygoats4.jpg" alt="babygoats4" class="hidden">,
        <"/babygoats5.jpg" alt="babygoats5" class="hidden">,
        <"/babygoats6.jpg" alt="babygoats6" class="hidden">,
    ];
    images = images.concat(images);
    images.sort(() => 0.5 - Math.random());
    var main = document.getElementById("main");
    var firstClick, secondClick;

//Shuffle array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  shuffle(myArray);
  console.log(myArray);

//Add timer
var timer;
var time = 0;
var timerElement = document.getElementById('timer');

function startTimer() {
  timer = setInterval(function() {
    time++;
    timerElement.innerHTML = time;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
var resultsElement = document.getElementById('results');
var finalScoreElement = document.getElementById('final-score');
var finalTimeElement = document.getElementById('final-time');

// Start the timer when the first box is clicked
main.addEventListener('click', function(e) {
  if (!timer) {
    startTimer();
  }
});
if (matchedPairs === 6) {
    // The game is over, show the results screen
    resultsElement.style.display = 'block';
  
    // Update the final score and time
    finalScoreElement.innerHTML = 'Your score: ' + score;
    finalTimeElement.innerHTML = 'Your time: ' + time + ' seconds';
  
    // Stop the timer when the game is over
    // You need to determine when the game is over based on your game logic
    if (gameIsOver) {
    stopTimer();
    } else {}

//Add images to game board
    for (var i = 0; i < images.length; i++) {
        var img = document.createElement("img");
        img.src = images[i];
        img.classList.add("hidden");
        
        var box = document.createElement("div");
        box.classList.add("box");
        box.appendChild(img);

        var score = 0;
        var scoreElement = document.getElementById('score');

        box.addEventListener("click", function() {
            if (!firstClick) {
                firstClick = e.target;
                firstClick.firstChild.classList.remove("hidden");
            } else if (!secondClick) {
                secondClick = e.target;
                secondClick.firstChild.classList.remove("hidden");

                if (firstClick.firstChild.src === secondClick.firstChild.src) {
                    //increment the score
                    score++;
                    scoreElement.innerHTML = score;
                    //images match, so remove boxes
                    firstClick.classList.remove("box");
                    secondClick.classList.remove("box");

                    matchedPairs++;
                    if (matchedPairs === 6) {
                        alert("You won!");
                        stopTimer(); 
                    
                } else {
                    //images don't match, so hide images again
                    setTimeout(function() {
                        firstClick.firstChild.classList.add("hidden");
                        secondClick.firstChild.classList.add("hidden");
                    }, 1000);
                }
  //Reset firstClick and secondClick
            firstClick = null;
            secondClick = null;
            }
        });
        main.appendChild(box);
    }
  