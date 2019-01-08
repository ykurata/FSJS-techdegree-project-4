class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = 'null';
  }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases() {
    const rawPhrases = [
      "Barking up the wrong tree",
      "Faith will move mountains",
      "A drop in the bucket",
      "Nail you color to the mast",
      "Safe as houses",
    ]

    const phrases = [];
    for (let i = 0; i < rawPhrases.length; i ++) {
      phrases.push(new Phrase(rawPhrases[i]))
    }
    return phrases;
  };

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    const phrase = this.phrases[randomNumber];
    return phrase;
  };

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const hides = document.querySelectorAll('.hide');
    if (hides.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed += 1;
    const hearts = document.querySelectorAll('img');
    for (let i = 0; i < this.missed; i ++) {
      hearts[i].src = "images/lostHeart.png";
    }
    if (this.missed === 5) {
      this.gameOver();
    }
  };

  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    const gameOverMessage = document.getElementById('game-over-message');
    const overLay = document.getElementById('overlay');
    if (gameWon === true) {
      gameOverMessage.innerHTML = "Great job!";
      overLay.style.display = "block";
      overLay.className = "win";
    } else {
      gameOverMessage.innerHTML = "Sorry, better luch next time!";
      overLay.className = "lose";
      overLay.style.display = "block";
    }
  };
}
