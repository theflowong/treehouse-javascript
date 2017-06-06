const myHeading = document.getElementById('myHeading');
const buttonColor = document.querySelector('button.color');
const inputColor = document.querySelector('input.color');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeLastItem');
const listItems = document.getElementsByTagName('li');

const toggleList = document.querySelector('button#toggleList');
const listDiv = document.querySelector('div.listDiv');
const list = document.querySelector('ul.list');


// Changing color - event handlers
buttonColor.addEventListener('click', () => {
  myHeading.style.color = inputColor.value;
  inputColor.value = '';
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

// Toggle Button - hiding and unhiding elements on page
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') { // list is hidden
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

// Add to list - creating new elements
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = addItemInput.value;
  list.appendChild(li);
  addItemInput.value = '';
})

removeItemButton.addEventListener('click', () => {
  let li = list.querySelector('li:last-child')
  list.removeChild(li);
})
