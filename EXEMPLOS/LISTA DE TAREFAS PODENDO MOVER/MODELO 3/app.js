(() => {
  const initial = [
    { id:"101", titulo:"Ler documentação",    prioridade:"baixa"  },
    { id:"102", titulo:"Criar layout",       prioridade:"media"  },
    { id:"103", titulo:"Implementar drag & drop", prioridade:"alta"  },
  ];
  const initialDone = [
    { id:"201", titulo:"Configurar projeto", prioridade:"baixa"  },
    { id:"202", titulo:"Instalar dependências", prioridade:"media"  },
  ];

  const ulAtivas   = document.getElementById('lista-ativas');
  const ulInativas = document.getElementById('lista-inativas');
  const tpl = document.getElementById('tpl-li');

  function renderList(ul, items){
    ul.innerHTML = '';
    items.forEach(item => ul.appendChild(buildLi(item)));
    updateCounters();
  }

  function buildLi({id, titulo, prioridade="baixa"}){
    const li = tpl.content.firstElementChild.cloneNode(true);
    li.dataset.id = id;
    li.dataset.prio = prioridade;

    li.querySelector('.title').textContent = titulo;
    li.querySelector('.badge.prioridade').textContent = prioridade.charAt(0).toUpperCase() + prioridade.slice(1);
    li.querySelector('.badge.id').textContent = "#" + id;

    // arrastar
    li.addEventListener('dragstart', e => {
      // se quiser obrigar arrastar só pelo "handle":
      if (!e.target.classList.contains('handle')) {
        // permite arrastar por qualquer área — comente estas 3 linhas para deixar só pelo handle
      }
      li.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      // drag image ligeiramente transparente
      const crt = li.cloneNode(true);
      crt.style.opacity = '.85';
      crt.style.position = 'absolute';
      crt.style.top = '-9999px';
      document.body.appendChild(crt);
      e.dataTransfer.setDragImage(crt, 20, 20);
      setTimeout(() => document.body.removeChild(crt), 0);
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('dragging');
      document.querySelectorAll('.placeholder').forEach(p => p.remove());
    });

    // excluir
    li.querySelector('.trash').addEventListener('click', () => {
      li.remove();
      updateCounters();
    });

    return li;
  }

  function enableDnD(ul){
    ul.addEventListener('dragover', e => {
      e.preventDefault();
      ul.classList.add('drag-over');

      const after = getDragAfterElement(ul, e.clientY);
      const dragging = document.querySelector('.dragging');
      if (!dragging) return;

      // placeholder visual
      let ph = ul.querySelector('.placeholder');
      if (!ph) {
        ph = document.createElement('li');
        ph.className = 'placeholder';
      }
      if (after == null) {
        ul.appendChild(ph);
      } else {
        ul.insertBefore(ph, after);
      }
    });

    ul.addEventListener('dragleave', e => {
      if (!ul.contains(e.relatedTarget)) {
        ul.classList.remove('drag-over');
        ul.querySelectorAll('.placeholder').forEach(p => p.remove());
      }
    });

    ul.addEventListener('drop', e => {
      e.preventDefault();
      ul.classList.remove('drag-over');
      const ph = ul.querySelector('.placeholder');
      const dragging = document.querySelector('.dragging');
      if (ph && dragging) {
        ul.insertBefore(dragging, ph);
      }
      ul.querySelectorAll('.placeholder').forEach(p => p.remove());
      updateCounters();
    });
  }

  function getDragAfterElement(container, y){
    const els = [...container.querySelectorAll('li:not(.dragging):not(.placeholder)')];
    return els.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - (box.top + box.height / 2);
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  }

  function getOrder(selector){
    return [...document.querySelectorAll(`${selector} > li.todo`)].map(li => li.dataset.id);
  }

  function updateCounters(){
    document.getElementById('count-ativas').textContent   =
      document.querySelectorAll('#lista-ativas > li.todo').length;
    document.getElementById('count-inativas').textContent =
      document.querySelectorAll('#lista-inativas > li.todo').length;
  }

  function addTask(){
    // mock simples com prioridade alternada
    const id = String(Math.floor(Math.random()*900+100));
    const prios = ['baixa','media','alta'];
    const prioridade = prios[Math.floor(Math.random()*prios.length)];
    const titulo = 'Nova tarefa ' + id;
    ulAtivas.appendChild(buildLi({id, titulo, prioridade}));
    updateCounters();
  }

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    renderList(ulAtivas, initial);
    renderList(ulInativas, initialDone);

    enableDnD(ulAtivas);
    enableDnD(ulInativas);

    document.querySelectorAll('.lista-tarefas li.todo').forEach(li => li.setAttribute('draggable','true'));

    document.getElementById('btn-add').addEventListener('click', addTask);

    document.getElementById('btn-ordem').addEventListener('click', () => {
      const a = getOrder('#lista-ativas');
      const i = getOrder('#lista-inativas');
      alert(`Ativas: ${JSON.stringify(a)}\nConcluídas: ${JSON.stringify(i)}`);
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
      renderList(ulAtivas, initial);
      renderList(ulInativas, initialDone);
    });
  });
})();

li.addEventListener('dragstart', e => {
  // inicia arraste sem imagem customizada (evita salto)
  li.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  // dica: se quiser exigir arrastar só pelo handle, cheque:
  // if (!e.target.classList.contains('handle')) { e.preventDefault(); return; }
});

li.addEventListener('dragend', () => {
  li.classList.remove('dragging');
  document.querySelectorAll('.placeholder').forEach(p => p.remove());
});
