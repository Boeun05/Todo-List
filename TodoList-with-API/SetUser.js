export default function SetUser({ currentUser }) {
  const $target = document.querySelector(".title");
  this.currentUser = currentUser;
  this.$target = $target;

  this.render = () => {
    const htmlString = `${currentUser}'s TodoList`;
    $target.innerHTML = htmlString;
  };

  this.setState = (nextUser) => {
    currentUser = nextUser;
    this.render();
  };

  this.render();
}
