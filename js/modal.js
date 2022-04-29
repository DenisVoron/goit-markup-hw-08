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