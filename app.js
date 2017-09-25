/***** DRUMKIT EXERCISE *****/

// When correct keyboard letter is pressed, access sound file and play once
// When correct keyboard letter is pressed, change class to 'playing' and trigger transform

// Step 1 - Add an event listener to listen for a keyup event and play the sound/trigger the div change

window.addEventListener('keydown', function (e) { // Using (e) as the event handler argument
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Note use of esx template selectors
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

   if (!audio) {
      return; // Stops the function from running by 'returning' with no result
   }

   audio.currentTime = 0; // rewinds the audio to the start, on keypress
   audio.play(); // plays the audio from the start of the rewind position

   key.classList.add('playing'); // add the playing class to the key div, to trigger the css attached to it
});


// Step 2 - Add an event listener for the end of the transition, to remove the playing class at the end


const keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
   key.addEventListener('transitionend', function (e) {
      if (e.propertyName !== 'transform') { // doesn't do anything if the transition is not a transform
         return;
      }
      this.classList.remove('playing');
   });
});


// The bottom section creates an array of all divs with class 'key', then iterates over each to add an event listner for transition end, that fires a function when the event occurs.  It's a way to add an event listener to a number of divs rather than just one.
