const panel = document.querySelectorAll(".panel");

      function toggleop() {
        this.classList.toggle("open");
      }

      function toggleact(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes("flex")) {
          this.classList.toggle("open-active");
        }
      }

      panel.forEach((pan) => pan.addEventListener("click", toggleop));
      panel.forEach((pan) => pan.addEventListener("transitionend", toggleact));