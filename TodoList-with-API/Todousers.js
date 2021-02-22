export default function TodoUsers({ user, changeUser }) {
  const $target = document.querySelector(".user-list");

  this.$target = $target;
  this.user = user;

  this.render = () => {
    const htmlString = `${this.user
      .map((userName) => `<li>${userName}</li>`)
      .join("")}`;

    this.$target.innerHTML = htmlString;
  };

  this.setState = (nextUser) => {
    this.user = nextUser;
    this.render();
  };

  this.clickEvent = () => {
    this.$target.addEventListener("click", (e) => {
      const eTarget = e.target;
      const clickedUser = eTarget.textContent;
      changeUser(clickedUser);
    });
  };

  this.clickEvent();
  this.render();
}
