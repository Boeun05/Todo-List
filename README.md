# TodoList

## Description

바닐라 자바스크립트로 구현한 Todo-list입니다. <br/>Api를 이용한 TodoList와 Local Storage에 저장하는 TodoList 두 가지를 구현했습니다.

## Preview
<p align="center">
  <img alt="7" src="https://user-images.githubusercontent.com/71836751/108887461-a05de700-764d-11eb-9dea-3e59e2809f9a.gif">
</p>

### ✔추가 - API 딜레이 시 인터랙션 처리(21.02.26)
<p align="center">
  <img alt="7" src="https://user-images.githubusercontent.com/71836751/109174937-a62c0780-77c8-11eb-87e2-6e5302d6e311.gif">
</p>

## Features

#### 할 일 리스트(공통)
- 각 기능을 하는 컴포넌트들을 만들고(TodoInput, TodoCount...) 모든 컴포넌트들을 App에서 관리
- 새로운 todolist를 입력하고 input의 value를 비워주어 별도의 조작 없이 연속으로 추가할 수 있게 처리
- length와 filter로 총 개수/ 완료 개수 카운트 하기 

#### Validation(공통)
 - new 키워드를 통해 함수의 인스턴스를 만들고 올바른 파라메터가 넘어오지 않을 경우 throw error 처리
 - data가 array형태로 넘어왔는지 여부 
 - new 키워드로 함수를 불러왔는지
 - 데이터의 형태가 올바른지(typeof content === 'string' && typeof isCompleted === 'boolean')
  
#### API
- API Url에서 USER_NAME에 해당하는 할 일 리스트 불러오기
- API 이용하는 모든 userlist를 불러오고 유저 클릭 시 해당 유저의 할 일 리스트 보여주기
- POST method로 할 일 추가하기
- 데이터를 fetch할 때 !response.ok일 경우 throw error 처리
- async/ await로 비동기 처리
- PUT method로 할 일 완료 여부 처리
- 모든 할 일 리스트 삭제하기


#### LocalStorage
- getItem/ setItem 이용해 key값이 TODOS_STORAGE_KEY인 값을 불러오거나 저장
- toggle기능 이용해 complete 여부 처리
- splice로 할 일 리스트 삭제

  
## Requirements

### Language

  - Javascript
  
  
### Framework
 x

##참고자료
- https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage (localStorage)
- https://yookeun.github.io/javascript/2015/03/08/javascript-construct/ (생성자함수)
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals (ES6문법) 
- https://blueshw.github.io/2018/03/12/this/ (this)
