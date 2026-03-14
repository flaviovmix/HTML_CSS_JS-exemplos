(function () {
  const sidebar  = document.getElementById('mySidebar');
  const menuBtn  = document.querySelector('.menu-btn');
  const backdrop = document.getElementById('sidebarBackdrop');

  function openSidebar() {
    // Mede a largura do scrollbar ANTES de esconder o overflow
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + 'px';
    document.body.classList.add('menu-open');

    sidebar.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');

    if (backdrop) {
      backdrop.removeAttribute('hidden');
      // Força reflow para a transição de opacidade funcionar
      backdrop.offsetHeight; // eslint-disable-line no-unused-expressions
      backdrop.classList.add('show');
    }
  }

  function closeSidebar() {
    document.body.classList.remove('menu-open');
    document.body.style.paddingRight = '';

    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');

    if (backdrop) {
      backdrop.classList.remove('show');
      // Aguarda a transição terminar antes de esconder com hidden
      backdrop.addEventListener('transitionend', () => {
        backdrop.setAttribute('hidden', '');
      }, { once: true });
    }
  }

  window.toggleSidebar = function toggleSidebar() {
    if (sidebar.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };

  window.toggleSubmenu = function toggleSubmenu(id, triggerEl) {
    const el = document.getElementById(id);
    const expanded = triggerEl.getAttribute('aria-expanded') === 'true';
    triggerEl.setAttribute('aria-expanded', String(!expanded));
    el.hidden = expanded;
  };

  // Clique no backdrop fecha a sidebar
  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  // ESC fecha a sidebar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) closeSidebar();
  });

})();
