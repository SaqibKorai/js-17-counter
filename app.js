let counter = 0;

function updateCounter() {
  document.getElementById('counterDisplay').innerText = counter;
}

function increaseCounter() {
  counter++;
  updateCounter();
}

function decreaseCounter() {
  counter--;
  updateCounter();
}
