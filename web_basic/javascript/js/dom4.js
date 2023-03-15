/**
 * 추가버튼클릭시  input에 들어있는 value 값을 list에 추가
 * 확인버튼 클릭시todo-content의 색상을 red로 변경, 취소선 적용
 * 확인버튼 재클릭시  todo-content을 기존으로  
 */


const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {0
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li  = document.createElement("li");
    li.innerHTML +=  `
    <input type="checkbox" class="ok-check"><span class="todo-content"${todoText[0].value}</span>
    `// 이벤트가 일어난 시점에서 들고와야함

    todoList[0].appendChild(li);
    addEvent();
    
}
function addEvent(){
    const okCheck = document.getElementsByClassName("ok-check")
    const todoContent = document.getElementsByClassName("todo-content");
    for( let i = 0; i < okCheck.length; i++){
        okCheck[i].onchange = () =>{
            if(okCheck[i].checked){
                todoContent[i].style.color = "red";
                todoContent[i].style.textDecoration = "line-through";
            }else{
                todoContent[i].style.color = "blck";
                todoContent[i].style.textDecoration = "none";
            
            }
        }
    }
}



// function addEvent(){
//     const okCheck = document.getElementsByClassName("ok-check")
//     okCheck[0].Checked
//     const okButton = document.getElementsByClassName("ok-button");
//     const todoContent = document.getElementsByClassName("todo-content");
//     for (let i =  0; i < okButton.lengthl; i++){
//         okButton[i].onclick = () => {
//             if(sList[i]){
//                 todoContent[i].style.color = 'blck';
//                 todoContent[i].style.textDecoration = 'none';
//                 sList[i] = false;
//             }else{
//                 todoContent[i].style.color = 'red';
//                 todoContent[i].style.textDecoration = 'none';
//                 sList[i] = true;
//             }
//         }
//     }
// }