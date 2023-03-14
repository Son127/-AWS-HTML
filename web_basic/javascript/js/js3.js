window.onload = () => {

}

// function a() {
//     console.log("a호출")
// }
// ↑랑 같은 뜻
let a = function() { 
    console.log("a호출")
}

a();

console.log(typeof a);

let b = function(f) {
    console.log("테스트가 프린트 되기 전에 무조건 실행");
    f();
}
b(a); //  정의된 함수를 전달 

// 콜백 함수
b(function(){console.log("test")});

// 즉시실행 함수 : 정의와 동시에 실행
(function(){console.log("test2")}());

//화살표함수
let c = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행");
    f();
}