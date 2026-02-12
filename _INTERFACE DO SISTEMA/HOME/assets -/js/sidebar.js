(function () {
  const sidebar   = document.getElementById('mySidebar');
  const menuBtn   = document.querySelector('.menu-btn');

  window.toggleSidebar = function toggleSidebar() {
    const isOpen = sidebar.classList.toggle('active');
    document.body.classList.toggle('menu-open', isOpen);
    sidebar.setAttribute('aria-hidden', String(!isOpen));
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(isOpen));
  };

  window.toggleSubmenu = function toggleSubmenu(id, triggerEl) {
    const el = document.getElementById(id);
    const expanded = triggerEl.getAttribute('aria-expanded') === 'true';
    triggerEl.setAttribute('aria-expanded', String(!expanded));
    el.hidden = expanded;
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) toggleSidebar();
  });
})();
