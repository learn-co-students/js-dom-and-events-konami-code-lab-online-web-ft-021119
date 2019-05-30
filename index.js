const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


const body = document.querySelector('body');

let input = [];

function init() {
  body.addEventListener('keydown', function(e) {


    if (e.keyCode === code[input.length]) {
      input.push(e.keyCode);
      if (input.length === code.length) {
        alert("Hurray!");
      }
    } else {
        input = [];
    }
  });
}
