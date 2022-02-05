# vanila-js-chrome-app
노마드코더 바닐라JS로 크롬앱 만들기


## 배운것
  - 자바스크립트가 직접적으로 css를 고치게 하지 말고 HTML을 통해서 바꾸게 하자
  - 변수명.classList.toggle('클래스명') 으로 css로 style 준 클래스명을 on/off 처리
  - 
          
          const loginForm = document.querySelector("#login-form");
          const loginInput = loginForm.querySelector("input");
    이런식으로 loginInput은 loginForm 안에 있는것이니까 
    const loginInput = document.querySelector("#login-form input")
    대신 위와 같이 써줘도 된다.
  - querySelector를 잘 쓰면 모든 element에 id를 넣지 않아도 된다.  
  - HTML input이 제공하는 기능 사용하여 브라우저가 값 검증하게 하기
  - submit시 브라우저가 새로고침하는게 기본동작 
  - preventDefault() 로 브라우저의 기본동작을 막는다.
  - localStorge로 브라우저 내에 키-값 쌍을 저장할 수 있다.!
  - padStart로 날짜를 두자리씩 표현하는데에 쓸데없는 함수 추가할 필요없다
   
        const datee = new Date()
        datee.getDay()//3  -> 날짜를 두자리씩 표현하려고 3일 아닌 03일로 표현하고 싶을때
        String(datee.getDay()).padStart(2,"0") //03
        
## 느낀점
  - 모르는게 많고 갈길이 멀다
  - '이걸 알았더라면 그때 더 깔끔하게 코딩할 수 있었을텐데' 
  
