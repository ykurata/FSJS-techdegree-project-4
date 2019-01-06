class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < this.phrase.length; i++) {
      const li = document.createElement('LI');
      const letter = this.phrase[i];
      li.textContent = letter;
      li.setAttribute('class', `hide letter ${letter}`);
      if (letter === " ") {
        li.setAttribute('class', 'space');
      }
      ul.appendChild(li);
    }
  };

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  };

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    if (this.checkLetter(letter) === true) {
      const hiddenLetter = document.getElementsByClassName(`hide letter ${letter}`)[0];
      hiddenLetter.className = "show";
    }
  };
  
}
