export default function TodoCount({ initialState }) {
  const $target = document.querySelector(".todo-count");
  this.$target = $target;
  this.state = initialState;

  this.getCount = () => ({
    totalCount: this.state.length,
    completedCount: this.state.filter((todo) => todo.isCompleted).length,
  });

  this.render = () => {
    const { totalCount, completedCount } = this.getCount();
    $target.innerHTML = `<span class="count-result" title="총 todo list 수"><i class="fas fa-list-alt"></i> : ${totalCount} </span><span class="count-result" title="완료된 todo list 수"><i class="fas fa-check-circle"></i> : ${completedCount}</span>`;
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
