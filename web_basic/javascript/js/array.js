let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];
let numbers3 = new Array();

let number4 = numbers1.concat(numbers2);

console.log(numbers1)
console.log(typeof numbers2)
console.log(typeof numbers3)
console.log(number4)

function odd(num){
    return num % 2 != 0;
}

let numbers5 = number4.filter(odd);

console.log(numbers5)

let numbers6 = number4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i = 0; i < numbers5.length; i++){
    console.log("i: " + numbers5[i]);
}

for(let num of numbers5){
    console.log(`forEach: ${num}`)
}

// list<string> list = new arrayList<String>();
// list.forEach( n-> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

console.log(numbers5.indexOf(5)); // 특정 값 인덱스번호 찾아줌 
console.log(numbers5.lastIndexOf(2));// 뒤에서 붙어 찾음 없는  값이면 -1 리턴
console.log(numbers5.join(" "));// 문자열 형태로 잘라줌 

console.log(numbers5.push(11)); // 값 추가
console.log(numbers5);

console.log(numbers5.unshift(13)); // 제일 앞에 값 추가
console.log(numbers5);

console.log(numbers5.pop()); // 무조건 제일 마지막 값 제거
console.log(numbers5);

// splice(a,b,n) a = 인덱스 번호 b = a에서부터 삭제하고자 하는 갯수 n = 추가
// 추가와 삭제를 동시에 할 수 있다.
// n 자리에 다른 객체들도 들어올 수 있다.
numbers5.splice(2,1,15,17); 
console.log(numbers5);

// slice 해당영역 추출)
console.log(numbers5.slice(3,6));

//크기 순대로 정렬
function compare(n1,n2){
    if(n1 > n2) return 1;
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;

}
console.log(numbers5.sort(compare));
//역정렬
console.log(numbers5.reverse());
//쉼표를 가지고 나눠줌
console.log(numbers5.toString());

// print();

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () =>{
    history.back
}

