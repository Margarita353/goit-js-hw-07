function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const bodyEl = document.body;

changeColorBtn.addEventListener('click', () => {
  const randColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randColor;
  colorSpan.textContent = randColor;
});