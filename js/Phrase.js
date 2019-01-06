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
}
