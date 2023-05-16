

// Get the count element
const countElement = document.getElementById('count');
// Set the initial count value
let count = 0;

// Function to increment the count
function increment() {
  count++;
  countElement.innerText = count;
}

// Function to decrement the count
function decrement() {
  count--;
  countElement.innerText = count;
}

// Function to reset the count
function reset() {
  count = 0;
  countElement.innerText = count;
}

let a = document.getElementById("1");
let b = document.getElementById("2");
let c = document.getElementById("3");
const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};

console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}

a.addEventListener("click" , changeRandomColor );
b.addEventListener("click" , changeRandomColor );
c.addEventListener("click" , changeRandomColor );