const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init(e) {
// This is the function that would be invoked by the event listener.
  document.addEventListener("keydown", onKeyDownHandler)
}

function onKeyDownHandler(e) {
// This function is the event handler
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}