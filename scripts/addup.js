let inputField = document.querySelector('.input-field');
let addButton = document.querySelector('.add-btn');
let span = document.querySelector('.addPara');

let numbers = [];

addButton.addEventListener('click', () => {
    let num = parseInt(inputField.value);
    numbers.push(num);
    inputField.value = '';
    let sum = numbers.reduce((total, num) => total + num, 0);

  span.innerHTML = sum;
});
