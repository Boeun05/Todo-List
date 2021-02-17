export default function TodoUser({ user }) {
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
  

  this.render();
}
