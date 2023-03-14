/**
 * window.onload : 파일이 정상적으로 로드가 된 이후에 실행
 * 오버로딩이 없다.
 * static : 무조건 클래스명을 통해서  스태틱에 접근해야한다.
 */
window.onload = () => { 
   console.log("온로드 테스트"); 
   let calc = new Calc('손지호',30);
   calc.showInfo();
   console.log(Calc.testNumber2);
   TestService.getInstance().showInfo();

}

// 함수정의 ( 자바스크립트 )
function add(a,b){
    return a + b;
}

// =====<<파이썬>>===== 
// def add(a,b):
//     return a + b
// =====<<자바>>=====
// int add (int a , int b){
//     return a + b
// }

console.log(add(10,20));

/** Javascript에서의  class
*
* 클래스 안에서는 변수명만 입력
* # : private
* 자료형은 선언하지 않는다.
* 맴버변수 또는 맴버메소드를 참조할 때는  항상 this를 붙인다.
* 맴버메소드를 정의할 때는  function 키워드를 사용하지 않는다.
* 생성자는 constructor로 정의한다.
*/
class Calc {
    #PI = null
    testNumber = 10;
    static testNumber2 = 20;

    name = null;
    age = null;
    constructor(name, age){
        if(typeof name == "string" && typeof age == "number"){
            this.name = name;
            this.age = age;
        }
        else if(typeof name == "string"){
            this.age = null;
            this.name = name;
        }
        else if(typeof name == "number"){
            this.name = null;        
            this.age = name;
        }
        else{
            this.name = null;        
            this.age = null;
        }        
    }

    showInfo() {
        console.log(this.#PI);
        console.log(this.testNumber);
        console.log(this.testNumber2);
        console.log(this.name);
        console.log(this.age);
    }

    static staticPrint() {
        console.log ("스태틱테스트");
    }
}
// javascript object
let calc2 = {
    name: "손지호",
    age: 26,
    showInfo: function() {
        consol.log(calc2.name);
        consol.log(calc2.age);
   }
}
// 싱글톤
class TestService{
    static #instance = null;
  
    static getInstance(){
        if(this.#instance == null){
            this.#instance = new TestService();
        }
        return this.#instance
    }

    showInfo() {
        console.log("싱글톤 테스트")
    }
}
