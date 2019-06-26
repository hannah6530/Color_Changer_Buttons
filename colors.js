const changeColorDiv = document.querySelector(".color_button");

changeColorDiv.addEventListener('click', changeColor)

const move_red_Object = document.getElementById("move_red_btn");
const move_blue_Object = document.getElementById("move_blue_btn");
const move_green_Object = document.getElementById("move_green_btn");
const move_yellow_Object = document.getElementById("move_yellow_btn");
const move_orange_Object = document.getElementById("move_orange_btn");
const move_cyan_Object = document.getElementById("move_cyan_btn");
const move_brown_Object = document.getElementById("move_brown_btn");
const move_purple_Object = document.getElementById("move_purple_btn");
const move_gray_Object = document.getElementById("move_gray_btn");



move_red_Object.addEventListener('click', moveColorObject)
move_blue_Object.addEventListener('click', moveColorObject)
move_green_Object.addEventListener('click', moveColorObject)
move_yellow_Object.addEventListener('click', moveColorObject)
move_orange_Object.addEventListener('click', moveColorObject)
move_cyan_Object.addEventListener('click', moveColorObject)
move_brown_Object.addEventListener('click', moveColorObject)
move_purple_Object.addEventListener('click', moveColorObject)
move_gray_Object.addEventListener('click', moveColorObject)



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

var changeColorDivX = 0;

if (changeColorDiv.innerText === 'Red'){
  moveColorObject();
}

function moveColorObject(e){



}
