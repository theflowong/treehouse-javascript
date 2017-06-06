// Button - event handlers

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const textInput = document.getElementById('textInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = textInput.value;
});
  

// List - selectors
  
const myTitle = document.querySelector('[title=list]');
  
myTitle.style.color = 'green';

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}
  
const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = 'lightgray';
}