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
    const lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
      if (lis[i].className.includes("hide letter")) {
        return false;
      } else {
        return true;
      }
    }
  };

}
