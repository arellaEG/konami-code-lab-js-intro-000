const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

document.body.addEventListener('keydown', (e) => {
  const key = KeyboardEvent.key);
let index =0;

function init() {
  if (key===codes[index]){
    index++;
    if (index===codes.length-1){
      alert("YES!");
      index=0;
    }
  } else {
    index=0;
  }
}
