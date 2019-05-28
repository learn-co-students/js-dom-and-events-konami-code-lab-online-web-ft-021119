const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  const input = document;
  let i = 0;

  input.addEventListener('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if (key === code[i]) {
     i++;

       if (i === code.length) {
         alert("Yay you got it!");
         i = 0;
       }
     } else {
       i = 0;
     }
  })
}
