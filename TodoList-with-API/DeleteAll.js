export default function DeleteAll({ $app, deleteAll }) {
  const $target = document.createElement("button");
  this.$target = $target;
  this.$app = $app;
  $app.appendChild($target);
  $target.textContent = "Delete all";
  $target.className = "delete-all";

  this.render = () => {
    $target.addEventListener("click", () => {
      deleteAll();
    });
  };

  this.render();
}
