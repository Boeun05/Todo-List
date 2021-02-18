# TodoList

## Description

[프로그래머스](https://programmers.co.kr/)에서 진행한 프론트엔드 개발 온라인 스터디를 통해 구현한 바닐라 자바스크립트 Todo-list입니다. <br/>Api를 이용한 TodoList와 Local Storage에 저장하는 TodoList 두 가지를 구현했습니다.

## Preview

  <img width="800" alt="7" src="https://user-images.githubusercontent.com/71836751/108251703-191afa00-719b-11eb-9376-ebe934e3df6a.gif">


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
  
#### API사용
- API Url에서 USER_NAME에 해당하는 할 일 리스트 불러오기
- POST method로 할 일 추가하기
- 데이터를 fetch할 때 !response.ok일 경우 throw error 처리
- async/ await로 비동기 처리
- PUT method로 할 일 완료 여부 처리


#### LocalStorage사용
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
