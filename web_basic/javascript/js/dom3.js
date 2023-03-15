/**
 * 추가버튼클릭시  input에 들어있는 value 값을 list에 추가
 * 확인버튼 클릭시todo-content의 색상을 red로 변경, 취소선 적용
 * 확인버튼 재클릭시  todo-content을 기존으로  
 */


const sList = new Array();
const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].innerHTML +=  `// 이벤트가 일어난 시점에서 들고 와야한다.
    <li><span class="todo-content">${todoText[0].value}</span><button class="ok-button>확인</button></li>
    `
    sList.push(flase);
}