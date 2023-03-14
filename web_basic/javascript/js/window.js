// window 객체는 생략 가능

// herf  해당 url로 이동시켜줌 
// console.log(location.href);
// location.href = "http://www.naver.com" ;

const naverButton = document.getElementsByTagName("button")
naverButton[0].onclick = () =>{
    // location.herf = "http://www.naver.com";
    location.replace("http://www.naver.com");
}

naverButton[1].onclick = () => {
    location.href = "http://127.0.0.1:5500/javascript/array.html";
} 