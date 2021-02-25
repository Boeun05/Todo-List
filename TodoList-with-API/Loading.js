export default function Loading({ isLoading }) {
  const $target = document.querySelector(".loading");
  this.isLoading = isLoading;
  this.$target = $target;

  this.render = () => {
    const htmlString = isLoading ? `Loading...` : ``;
    $target.innerHTML = htmlString;
  };

  this.setState = (nextLoading) => {
    isLoading = nextLoading;
    this.render();
  };

  this.render();
}
