const  box = document.getElementsByClassName("box")
box[0].style.backgroundColor="black";

addEvent()

function addEvent(){
    const redButton = document.getElementsByClassName("red-button")
    const blueButton = document.getElementsByClassName("blue-button")
   
    for(let i = 0; i < box.length; i++){
        redButton[i].onclick = () =>{
            box[i].style.backgroundColor = "red";
        }
        blueButton[i].onclick = () =>{
            box[i].style.backgroundColor = "blue";
        }
    }
}
