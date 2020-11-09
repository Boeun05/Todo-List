import TodoList from './TodoList.js'

const data = [
  {
    text: 'JS 공부하기',
    isCompleted: true,
  },
  {
    text: 'JS 복습하기',
    isCompleted: true,
  },
]

try {
  const todoList1 = new TodoList(document.querySelector('#todo-list'), data)

  // 상태 변경
  todoList1.setState([
    ...todoList1.state,
    {
      text: 'EVIL!!! 😎',
      isCompleted: false,
    },
  ])

  document.querySelector('#todo-change').addEventListener('click', () => {
    todoList1.setState([
      ...todoList1.state,
      {
        text: 'Good!!! 😍',
        isCompleted: false,
      },
    ])
  })
} catch (e) {
  document.querySelector('#errors').innerHTML = e.message
}