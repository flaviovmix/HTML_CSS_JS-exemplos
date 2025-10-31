(() => {
  const listas = document.querySelectorAll(".lista-tarefas");

  listas.forEach(ul => {
    // início do arraste
    ul.addEventListener("dragstart", e => {
      const li = e.target.closest(".todo");
      if (!li) return;
      li.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
    });

    // fim do arraste
    ul.addEventListener("dragend", e => {
      const li = e.target.closest(".todo");
      if (li) li.classList.remove("dragging");
    });

    // durante o arraste
    ul.addEventListener("dragover", e => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      const after = getDragAfterElement(ul, e.clientY);
      if (!dragging) return;
      if (after == null) ul.appendChild(dragging);
      else ul.insertBefore(dragging, after);
    });
  });

  function getDragAfterElement(container, y) {
    const els = [...container.querySelectorAll(".todo:not(.dragging)")];
    return els.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - (box.top + box.height / 2);
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
})();
