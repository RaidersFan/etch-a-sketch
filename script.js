let canvas = document.getElementById('canvas')
let size;
function reset() {
  canvas.innerHTML = ""
}


function storeSize() {
  size = document.getElementById('size').value
  document.getElementById('size').value = ""
  //ensure size is valid, if so create a grid with that dimension
  if (size > 100 || size < 0) {
    alert('Please enter a number between 1-100')
    document.getElementById('size').value = ""
  } else setGrid(size)
}
//Create grids based on size 
function setGrid(size) {
  //reset canvas if not empty
  reset()
  //create Divs
  for (let i = 0; i < (size * size); i++) {
    let div = document.createElement('div')
    div.setAttribute('class', 'grid')
    canvas.append(div)
  }
  //push in-line CSS to set grid rows
  canvas.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
  canvas.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`)

  //adding event listeners to generate random rgb background color on mouse enter if it's still blank
  let allGrids = document.querySelectorAll(".grid")
  allGrids.forEach(grid => grid.addEventListener('mouseenter', (e) => {
    if (e.target.style.backgroundColor == "") {
      e.target.style.setProperty('background-color', `rgb(${((Math.floor(Math.random() * 255)) + 1)}, ${((Math.floor(Math.random() * 255)) + 1)}, ${((Math.floor(Math.random() * 255)) + 1)})`)
    }
  }))
}