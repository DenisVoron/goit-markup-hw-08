(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
const { height: headerHeight } = document
       .querySelector(".header")
       .getBoundingClientRect( );

  document.body.style.paddingTop = `${headerHeight}px`;
})();
  
(() => {
  document
    .querySelector(`.call-form`)
    .addEventListener("submit", e => {
      e.preventdefault();

      new FormData(e.currentTarget).forEach((value, name) =>
        console.log(`${name}: ${value}`),
      );

      e.currentTarget.reset();
    });

})();

/*скрипт открытие моб меню */
/*(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
​
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();*/