import React, { useEffect } from "react";

function Modal() {
  useEffect(() => {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const btnCloseModal = document.querySelector(".btn--close-modal");
    const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

    const openModal = function (e) {
      e.preventDefault();
      modal.classList.remove("hidden");
      overlay.classList.remove("hidden");
    };

    const closeModal = function () {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    };

    btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });
  });

  return (
    <div>
      <div class="modal hidden">
        <button class="btn--close-modal">&times;</button>
        <h2 class="modal__header">
          Open your bank account <br />
          in just <span class="highlight">5 minutes</span>
        </h2>
        <form class="modal__form">
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <button class="btn">Next step &rarr;</button>
        </form>
      </div>
      <div class="overlay hidden"></div>
    </div>
  );
}

export default Modal;
