export function mobileMenu() {
  const accordionBttn = document.querySelector("#mobile-menu");
  const mobileMenu = document.querySelector("dialog");
  const closeModal = document.querySelector("dialog button");

  accordionBttn.addEventListener("click", () => mobileMenu.show());
  closeModal.addEventListener("click", () => mobileMenu.close());

  window.onresize = () => mobileMenu.close();
}
