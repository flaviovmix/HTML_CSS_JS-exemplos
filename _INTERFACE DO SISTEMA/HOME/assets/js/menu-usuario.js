  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".user-btn");
    const menu = e.target.closest(".user-menu");

    // Se clicou no botão
    if (btn && menu) {
      e.stopPropagation();
      const dropdown = menu.querySelector(".user-dropdown");
      const expanded = btn.getAttribute("aria-expanded") === "true";

      // fecha se já estiver aberto
      if (expanded) {
        btn.setAttribute("aria-expanded", "false");
        dropdown.classList.remove("show");
        dropdown.setAttribute("hidden", "");
      } else {
        // fecha todos antes de abrir este
        document.querySelectorAll(".user-dropdown").forEach(dd => {
          dd.classList.remove("show");
          dd.setAttribute("hidden", "");
        });
        document.querySelectorAll(".user-btn").forEach(b => {
          b.setAttribute("aria-expanded", "false");
        });

        btn.setAttribute("aria-expanded", "true");
        dropdown.classList.add("show");
        dropdown.removeAttribute("hidden");
      }
      return;
    }

    // Clique fora fecha todos
    document.querySelectorAll(".user-dropdown").forEach(dd => {
      dd.classList.remove("show");
      dd.setAttribute("hidden", "");
    });
    document.querySelectorAll(".user-btn").forEach(b => {
      b.setAttribute("aria-expanded", "false");
    });
  });

  // Fecha no ESC
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".user-dropdown").forEach(dd => {
        dd.classList.remove("show");
        dd.setAttribute("hidden", "");
      });
      document.querySelectorAll(".user-btn").forEach(b => {
        b.setAttribute("aria-expanded", "false");
      });
    }
  });