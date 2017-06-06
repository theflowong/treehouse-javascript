// Button - event handlers

const myHeading = document.getElementById('myHeading');
const buttonColor = document.querySelector('button.color');
const inputColor = document.querySelector('input.color');

buttonColor.addEventListener('click', () => {
  myHeading.style.color = inputColor.value;
});

// Toggle Button - hiding and unhiding elements on page

const toggleList = document.querySelector('button#toggleList');
const listDiv = document.querySelector('div.listDiv');

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') { // list is hidden
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

// List - selectors

const myTitle = document.querySelector('[title=listTitle]');

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
