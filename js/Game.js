/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrase = [];
    this.activePhrase = 'null';
    this.phrases = this.createPhrases();
  }
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
  }

}
