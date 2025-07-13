window.addEventListener("load", () => {
    document.body.classList.add("no-scroll");

    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3000);
  });