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

function listen(){
  document.body.addEventListener('keydown', (e) => {
  const key = KeyboardEvent.key)}

let index =0;

function init() {
  listen()
  if (key===codes[index]){
    index++;
    listen();
    if (index===codes.length-1){
      alert("YES!");
      index=0;
    }
  } else {
    listen()
    index=0;
  }
}
