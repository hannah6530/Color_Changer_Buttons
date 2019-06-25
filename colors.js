const changeColorDiv = document.querySelector(".color_button");

changeColorDiv.addEventListener('click', changeColor)

function changeColor(e){
  if (e.target.innerText === 'Green') {
    e.target.id = 'green'
  }else if (e.target.innerText === 'Red') {
    e.target.id = 'red'
  }else if (e.target.innerText === 'Blue') {
    e.target.id = 'blue'
  }else if (e.target.innerText === 'Orange'){
    e.target.id = 'orange'
  }else if (e.target.innerText === 'Purple'){
    e.target.id = 'purple'
  }else if (e.target.innerText === 'Yellow'){
    e.target.id = 'yellow'
  }else if (e.target.innerText === 'Cyan'){
    e.target.id = 'cyan'
  }else if (e.target.innerText === 'Brown'){
    e.target.id = 'brown'
  }else if (e.target.innerText === 'Gray'){
    e.target.id = 'gray'
  }
}
