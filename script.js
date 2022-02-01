let canvas = document.getElementById('canvas')

function reset() {
  canvas.innerHTML = ""
}
//Get Grid Size 
function setGrid() {
  //reset canvas if not empty
  reset()
  //get user input
  let size = document.getElementById('size').value
  //ensure size is valid
  if (size > 100 || size < 0) {
    alert('Please enter a number between 1-100')
    document.getElementById('size').value = ""
  } else {
    //create Divs
    for (let i = 0; i < (size * size); i++) {
      let div = document.createElement('div')
      div.setAttribute('class', 'grid')
      canvas.append(div)
    }
    //push size variable to css
    canvas.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);
    canvas.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`)
    document.getElementById('size').value = ""
  }
  //adding event listeners
  let allGrids = canvas.querySelectorAll(".grid")
  console.dir(allGrids)
  allGrids.forEach(grid => grid.addEventListener('mouseenter', (e) => e.target.style.setProperty('background-color', 'red')))
}