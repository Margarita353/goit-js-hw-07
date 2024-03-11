const nameInput = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;

    if (inputValue.trim() === "") {
        userName.textContent = "Anonymous";
    } else {
        userName.textContent = inputValue;
    }
});