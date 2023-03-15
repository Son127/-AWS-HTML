
const divs = document.getElementsByTagName("div");

console.log(divs[0]);

divs[0].innerHTML += `<button type="button">버튼</button>`;

console.log(divs[0].innerHTML);

const newButton = document.createElement("button");
const newButtonText = document.createTextNode("버튼2");
const buttonType = document.createAttribute("type");
newButton.setAttributeNode(buttonType);
newButton.setAttribute("type","button");
newButton.appendChild(newButtonText);
divs[0].appendChild(newButton);