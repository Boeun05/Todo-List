import {
  useNewKeyword,
  useArrayState,
  checkTarget,
  checkTypes,
} from "./validation.js";

export default function TodoList({ initialState, deleteTodo, toggleTodo }) {
  this.state = initialState;
  const $target = document.querySelector(".todo-list");
  this.$target = $target;

  this.validation = (state) => {
    useNewKeyword(this);
    useArrayState(state);
    checkTarget($target);
    checkTypes(
      state,
      ({ content, isCompleted }) =>
        typeof content === "string" && typeof isCompleted === "boolean"
    );
  };

  this.render = () => {
    console.log("rendered");
    const htmlString =
      this.state.length > 0
        ? `<ul>${this.state
            .map(
              ({ content, isCompleted }, index) =>
                `<li id='${index}'>
                ${isCompleted ? `<s id='${index}'>${content}</s>` : content}
                <button class="delete"><i id='${index}' class="fas fa-trash-alt"></i></button>
                </li>`
            )
            .join("")}</ul>`
        : "";
    $target.innerHTML = htmlString;
  };

  this.setState = (nextState) => {
    this.validation(nextState);
    this.state = nextState;
    this.render();
  };

  this.clickEvent = () => {
    $target.addEventListener("click", (e) => {
      const eTarget = e.target;
      const idx = eTarget.id;
      if (eTarget.tagName === "LI" || eTarget.tagName === "S") {
        toggleTodo(this.state[idx]._id);
      } else if (eTarget.tagName === "I") {
        deleteTodo(this.state[idx]._id);
      }
    });
  };

  this.clickEvent();
  this.validation(this.state);
  this.render();
}
