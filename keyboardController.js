/* this is where you'd change out what the keyboard is controlling */
/* as its imported AFTER script.js where polySynth is defined I can assign it here */
let keyboardSynth = polySynth;
//let keyboardSynth = sampler;

/* find keys by their class and add to array */
let allKeys = Array.from(document.getElementsByClassName("whiteKey")).concat(
  Array.from(document.getElementsByClassName("blackKey"))
);

/* set default octace : we will update based on keys later on */
let octave = 3;

let mouseHeld = false;

window.addEventListener("mousedown", () => {
  mouseHeld = true;
});

window.addEventListener("mouseup", () => {
  mouseHeld = false;
});

/* add an event listener to each key */
allKeys.forEach((key) => {
  key.addEventListener("mousedown", (e) => {
    let note = e.target.dataset.note;
    polySynth.triggerAttack(note + octave);
  });
  key.addEventListener("mouseup", (e) => {
   if (mouseHeld === false) {
      return;
    }
    let note = e.target.dataset.note;
    polySynth.triggerRelease(note + octave, "8n");
  });
  key.addEventListener("mouseenter", (e) => {
    let note = e.target.dataset.note;
    polySynth.triggerAttack(note + octave);
  });
  key.addEventListener("mouseleave", (e) => {
    let note = e.target.dataset.note;
    polySynth.triggerRelease(note + octave, "8n");
  });
});

/* event listener for keyboard (qwerty) */
window.addEventListener("keydown", (e) => {
 if(e.code === "KeyA"){
  if(keyHeld === false){
   polySynth.triggerAttack("c3");
   keyHeld = true;
  }
 }
});
window.addEventListener("keyup", (e) => {
  if (e.code === "KeyA"){
    polySynth.triggerRelease("c3");
    keyHeld = false;
  }
})