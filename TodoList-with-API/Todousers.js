export default function TodoUsers({ user, changeUser }) {
  const $target = document.querySelector(".user-list");

  this.$target = $target;
  this.user = user;

  this.render = () => {
    const htmlString = `${this.user
      .map((userName) => `<li>${userName}</li>`)
      .join("")}`;

    $target.innerHTML = htmlString;
  };

  this.setState = (nextUser) => {
    user = nextUser;
    this.render();
  };

  this.clickEvent = () => {
    $target.addEventListener("click", (e) => {
      const eTarget = e.target;
      const clickedUser = eTarget.textContent;
      changeUser(clickedUser);
    });
  };

  this.clickEvent();
  this.render();
}
