'use strict';

const defaultSize = 16;
let colorChosen = false
let color = '';

// function setColor(selectedColor) {
//   colorChosen = true;
//   color = selectedColor;
// }

function createGrid(size) {
  let container = document.querySelector('.grid-container');
  // container.style.setProperty('--grid-rows', size);
  // container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  $(container).css('--grid-rows', size);
  $(container).css('--grid-cols', size);
  for (let i = 0; i < Math.pow(size, 2); i++) {
    // let square = document.createElement('div');
    let square = $('<div />');
    $(square).on('mouseover', function() {
      if (color !== 'random') {
        $(this).css('background-color', colorChosen ? color : 'white');
      } else {
        const red = Math.trunc(Math.random() * 256);
        const blue = Math.trunc(256 - Math.random() * 100);
        const green = Math.trunc(Math.random() * 256);
        $(this).css('background-color', `rgb(${red}, ${green}, ${blue})`)
      }
    })
    $(square).addClass('box');
    // container.insertAdjacentElement('beforeend', square);
    $(square).appendTo(container);
  }
}

function chooseSize(value) {
  createGrid(Number(value));
}

// function resetGrid() {
//   // const squares = document.querySelectorAll('.grid-container div');
//   // squares.forEach(div => $(div).css('background-color', 'white'));
//   const squares = $('.grid-container div');
//   $(squares).css('background-color', 'white');
// }

$('.color-choice').click(function() {
  colorChosen = true;
  color = this.name;
});

$('.reset-btn').click(function(){
  const squares = $('.grid-container div');
  $(squares).css('background-color', 'white');
})

createGrid(default);
