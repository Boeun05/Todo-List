const ENTER_KEY = 13;

export default function TodoInput({ addTodo }) {
  const $input = document.querySelector(".todo-input");

  this.$input = $input;
  this.addTodo = addTodo;

  $input.addEventListener("keypress", (e) => {
    if (e.keyCode === ENTER_KEY && $input.value.length > 0) {
      addTodo($input.value);
      $input.value = "";
    }
  });
}
