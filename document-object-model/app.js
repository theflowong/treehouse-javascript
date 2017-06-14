const pageTitle = document.getElementById('_pageTitle');
const buttonColor = document.querySelector('button.color');
const inputColor = document.querySelector('input.color');

const togList = document.querySelector('button#_togList');
const listDiv = document.querySelector('div.listDiv');
const list = document.querySelector('ul.list');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const listItems = document.getElementsByTagName('li');

// Changing color - event handlers
buttonColor.addEventListener('click', () => {
  pageTitle.style.color = inputColor.value;
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
togList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') { // list is hidden
    listDiv.style.display = 'block';
    togList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    togList.textContent = 'Show list';
  }
});

const attachListItemButtons = (li) => {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove button';
  li.appendChild(remove);
}

// Add to list - creating new elements
addItemButton.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = addItemInput.value;
  list.appendChild(li);
  attachListItemButtons(li);
  addItemInput.value = '';
})

// Mouseover list items - event handlers (event bubbling and delegation)

list.addEventListener('mouseover', (event) => {
  if (event.target.tagName == 'LI') {
    let orig_content = event.target.firstChild.textContent;
    event.target.firstChild.textContent = orig_content.toUpperCase();
    event.target.addEventListener('mouseout', () => {
      event.target.firstChild.textContent = orig_content;
    })
  }
});

// update order of list items
updateListOrderStyles = (list) => {
  list.children[1].className = '';
  list.children[list.children.length-2].className = '';
  list.firstElementChild.className = 'first';
  list.lastElementChild.className = 'last';

  list.children[1].style.backgroundColor = '';
  list.querySelector('.first').style.backgroundColor = 'blue';
  list.children[list.children.length-2].style.backgroundColor = '';
  list.querySelector('.last').style.backgroundColor = 'orange';
  console.log('updating');
}

// add buttons to each list item
for (let i = 0; i < listItems.length; i++) {
  attachListItemButtons(listItems[i]);
}
list.firstElementChild.className = 'first';
list.lastElementChild.className = 'last';
updateListOrderStyles(list);

// Up, down, remove buttons - use parentNode to traverse up DOM

list.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    if (event.target.className == 'remove') {
      ul.removeChild(li);
    } else if (event.target.className == 'up') {
      let prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
        if (ul.firstElementChild === li || ul.lastElementChild === prevLi) {
          updateListOrderStyles(ul);
        }
      }
    } else if (event.target.className == 'down') {
      let nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
        if (ul.firstElementChild === nextLi || ul.lastElementChild === li) {
          updateListOrderStyles(ul);
        }
      }
    }
  }
})
