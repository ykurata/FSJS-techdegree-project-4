const game = new Game();
const startButton = document.getElementById('btn__reset')
const keys = document.querySelectorAll('.key');


startButton.addEventListener('click', function() {
  game.startGame()});

keys.forEach(key => {
  key.addEventListener('click', function() {
    game.handleInteraction(key);
  })
})
