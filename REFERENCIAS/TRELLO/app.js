(() => {
  const boards = [...document.querySelectorAll('.board')];
  const lists  = [...document.querySelectorAll('.lista-tarefas')];
  const tpl = document.getElementById('tpl-li');

  // Snapshots para reset
  const initialHTML = Object.fromEntries(
    lists.map(ul => [ul.id, ul.innerHTML])
  );

  function updateCounters(){
    boards.forEach(section => {
      const key = section.dataset.col;
      const ul  = section.querySelector('.lista-tarefas');
      const countEl = document.getElementById(`count-${key}`);
      if (countEl) countEl.textContent = ul.querySelectorAll('li.todo').length;
    });
  }

  function getOrder(){
    // retorna um mapa { coluna: [ids...] }
    return Object.fromEntries(
      boards.map(section => {
        const key = section.dataset.col;
        const ids = [...section.querySelectorAll('.lista-tarefas > li.todo')]
          .map(li => li.dataset.id);
        return [key, ids];
      })
    );
  }

  function wireLi(li){
    li.addEventListener('dragstart', e => {
      // Se quiser exigir o handle: descomente as 2 linhas abaixo
      // if (!e.target.classList.contains('handle')) { e.preventDefault(); return; }
      li.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    li.addEventListener('dragend', () => {
      li.classList.remove('dragging');
      document.querySelectorAll('.placeholder').forEach(p => p.remove());
    });

    const trash = li.querySelector('.trash');
    if (trash) {
      trash.addEventListener('click', () => {
        li.remove();
        updateCounters();
      });
    }
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

  function enableDnD(ul){
    ul.addEventListener('dragover', e => {
      e.preventDefault();
      const after = getDragAfterElement(ul, e.clientY);
      const dragging = document.querySelector('.dragging');
      if (!dragging) return;

      let ph = ul.querySelector('.placeholder');
      if (!ph) {
        ph = document.createElement('li');
        ph.className = 'placeholder';
      }
      if (after == null) ul.appendChild(ph);
      else ul.insertBefore(ph, after);
    });

    ul.addEventListener('dragleave', e => {
      if (!ul.contains(e.relatedTarget)) {
        ul.querySelectorAll('.placeholder').forEach(p => p.remove());
      }
    });

    ul.addEventListener('drop', e => {
      e.preventDefault();
      const ph = ul.querySelector('.placeholder');
      const dragging = document.querySelector('.dragging');
      if (ph && dragging) ul.insertBefore(dragging, ph);
      ul.querySelectorAll('.placeholder').forEach(p => p.remove());
      updateCounters();
    });
  }

  function rewireAll(){
    document.querySelectorAll('.lista-tarefas li.todo').forEach(li => {
      li.setAttribute('draggable','true');
      wireLi(li);
    });
    lists.forEach(ul => enableDnD(ul));
    updateCounters();
  }

  function buildLi({id, titulo, prioridade='baixa'}){
    const li = tpl.content.firstElementChild.cloneNode(true);
    li.dataset.id = id;
    li.dataset.prio = prioridade;
    li.querySelector('.title').textContent = titulo;
    li.querySelector('.badge.prioridade').textContent =
      prioridade.charAt(0).toUpperCase() + prioridade.slice(1);
    li.querySelector('.badge.id').textContent = '#' + id;
    wireLi(li);
    return li;
  }

  function addTask(){
    // Pergunta em qual coluna adicionar
    const cols = boards.map(b => b.dataset.col);
    const destino = prompt(`Adicionar em qual coluna? (${cols.join(', ')})`, cols[0]);
    const target = destino ? document.querySelector(`[data-col="${destino}"] .lista-tarefas`) : null;
    if (!target) return;

    const id = String(Math.floor(Math.random()*900+100));
    const prios = ['baixa','media','alta'];
    const prioridade = prios[Math.floor(Math.random()*prios.length)];
    const titulo = prompt('Título da tarefa:', `Nova tarefa ${id}`) || `Nova tarefa ${id}`;

    target.appendChild(buildLi({id, titulo, prioridade}));
    updateCounters();
  }

  document.addEventListener('DOMContentLoaded', () => {
    rewireAll();

    document.getElementById('btn-add').addEventListener('click', addTask);

    document.getElementById('btn-ordem').addEventListener('click', () => {
      alert(JSON.stringify(getOrder(), null, 2));
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
      lists.forEach(ul => ul.innerHTML = initialHTML[ul.id]);
      rewireAll();
    });
  });
})();
