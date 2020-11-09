  
// DOM 접근을 최소화
// DOM을 변경하는 곳은 하나의 패턴으로만 해야할 것
export default function TodoList($target, initalState) {
  this.state = initalState;
  this.$target = $target;

  this.render = () => {
    this.$target.innerHTML = `<ul>${this.state
      // todo { text, isCompleted }
      .map(({ text, isCompleted }) =>
        isCompleted ? `<li><s>${text}</s></li>` : `<li>${text}</li>`
      )
      .join("")}</ul>`;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render();
}