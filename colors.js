const changeColorDiv = document.querySelector(".color_button");

changeColorDiv.addEventListener('click', changeColor)

// ternary operator for green color second line
//if the target.id is equal to green make it blank, otherwise make it to green
function changeColor(e){
  if (e.target.innerText === 'Green') {
    e.target.id === 'green' ? e.target.id = '' : e.target.id = 'green'
  }else if (e.target.innerText === 'Red') {
    e.target.id === 'red' ? e.target.id = '' : e.target.id = 'red'
  }else if (e.target.innerText === 'Blue') {
    e.target.id === 'blue' ? e.target.id = '' : e.target.id = 'blue'
  }else if (e.target.innerText === 'Orange'){
    e.target.id === 'orange' ? e.target.id = '' : e.target.id = 'orange'
  }else if (e.target.innerText === 'Purple'){
    e.target.id === 'purple' ? e.target.id = '' : e.target.id = 'purple'
  }else if (e.target.innerText === 'Yellow'){
    e.target.id === 'yellow' ? e.target.id = '' : e.target.id = 'yellow'
  }else if (e.target.innerText === 'Cyan'){
    e.target.id === 'cyan' ? e.target.id = '' : e.target.id = 'cyan'
  }else if (e.target.innerText === 'Brown'){
    e.target.id === 'brown' ? e.target.id = '' : e.target.id = 'brown'
  }else if (e.target.innerText === 'Gray'){
  e.target.id === 'gray' ? e.target.id = '' : e.target.id = 'gray'
  }
}
// changeColorDiv.addEventListener('click', changeColorBack)
//
// let allColors = ['Green', 'Red', 'Blue', 'Orange', 'Purple', 'Yellow', 'Cyan'), 'Brown', 'Gray']
//
//
//
// function changeColorBack(color){
//
//   for(var i = 0; i < allColors.length(); i++){
//
//     if color.target.innerText === allColors[i]
//     color.target.id = ' '
//
//
//   }
//
// }
