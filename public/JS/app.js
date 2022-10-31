let board = document.getElementById("board");

let numbers = [];
for (let i = 1; i <= 100; i++){
  numbers[i] = i;
}
let urls = [];
let maxValue = 100;
for (let i = 1; i <= 100; i++){
  let index = Math.floor(Math.random() * maxValue) + 1;
  maxValue --;
  
  value = numbers[index];
  numbers.splice(index, 1);
  value /= 2;
  urls[i] = "./pictures/pic" + Math.round(value) + ".svg"
}
let winDiv = document.getElementById("win");
let loseDiv = document.getElementById("lose");
winDiv.style.display = "none"
loseDiv.style.display = "none"
let countTotal = 50;
let checked = 0;
for (let i = 1; i <= 100; i++){
  let animal = document.createElement("img");
  animal.src = urls[i];
  animal.id = "animal" + i; 
  animal.classList.add("animal-item");
  animal.addEventListener("click", function(){

    animal.classList.add("animal-active");
    if (checked == 0){
      checked = i;
    } else{
      let animalChecked = document.getElementById("animal" + checked);
      if (animalChecked.src == animal.src && animalChecked.id != animal.id){
        animalChecked.classList.add("animal-hidden");
        animal.classList.add("animal-hidden");
        countTotal--;
        if (countTotal == 0)
        {
          winDiv.style.display = "block"
        }
        checked = 0;
      } else{
        animalChecked.classList.remove("animal-active");
        animal.classList.remove("animal-active");
        checked = 0
      }
    }
    console.log(checked);
  });
  board.appendChild(animal);
}

let minuteValue = 3;
let secondValue = 0;
let timeDiv = document.getElementById("time")


let timecontrol = setInterval(function(){
  let stringvalue = "";
  secondValue--;
  if (secondValue < 0){
    secondValue = 59;
    minuteValue--;
  } 
  if(minuteValue < 0)
  {
    loseDiv.style.display = "block"
    clearInterval(timecontrol)
  }
  stringvalue += "0";
  stringvalue += minuteValue;
  stringvalue += ":"
  if (secondValue < 10){
    stringvalue += "0";
  }
  stringvalue += secondValue
  timeDiv.innerText = stringvalue
}, 1000);




