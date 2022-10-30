
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
        let str = "pictures/pic" + Math.round(value) + ".svg";
        urls[i] = "/pictures/pic" + Math.round(value) + ".svg";
        console.log(str);
        }


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

        let minuteValue = 10;
        let secondValue = 0;
        let minute = doccument.getElementById("minute");
        let second = doccument.getElementById("second");
        let timecontrol = setInterval(function(){
        secondValue--;
        if (secondValue < 0){
            secondValue = 59;
            minuteValue--;
        } 
        minute.innerHTML = minuteValue;
        second.innerHTML = secondValue;
        console.log("minute")
        }, 1000);
        console.log("minute")

