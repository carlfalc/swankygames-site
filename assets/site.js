// Tap the cube to spin it round to the next face.
(function () {
  var button = document.getElementById('swCube');
  if (!button) return;
  var cube = button.querySelector('.sw-cube');
  var turns = 0;
  button.addEventListener('click', function () {
    turns += 1;
    cube.style.transition = 'transform 1.4s cubic-bezier(.1,.7,.1,1)';
    cube.style.transform = 'rotateY(' + (-(turns * 90) - 720 * turns) + 'deg)';
  });
  // On touch screens a tap flips the games tile, and a second tap flips it back.
  var flip = document.getElementById('games');
  if (flip && window.matchMedia('(hover: none)').matches) {
    flip.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      flip.classList.toggle('is-flipped');
    });
  }
})();
