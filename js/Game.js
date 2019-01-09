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
      "How are you",
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
    document.getElementById('overlay').style.visibility = 'hidden';
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
      this.gameOver(false);
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
      overLay.className = "win";
      overLay.style.visibility = 'visible';
    } else {
      gameOverMessage.innerHTML = "Sorry, better luch next time!";
      overLay.className = "lose";
      overLay.style.visibility = 'visible';
    }
    this.resetGame();
  };

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    button.disabled = true;
    if (!this.activePhrase.phrase.includes(button.textContent)) {
      button.className = "wrong";
      this.removeLife();
    } else {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    }
  };


  /**
  * remove all li elemets from ul
  * reset all key buttons and heart images
  */
  resetGame() {
    this.missed = 0;
    document.querySelector('ul').innerHTML = " ";
    const keys = document.querySelectorAll('button');
    keys.forEach(key => {
      key.disabled = false;
      key.className = "key";
    });
    const heartImages = document.querySelectorAll('img');
    heartImages.forEach(image => {
      image.src = "images/liveHeart.png";
    });
  };

}
