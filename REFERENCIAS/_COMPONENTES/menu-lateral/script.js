// ─── Dados do menu ───────────────────────────────────────────────
// Estrutura:
//   { grupo, subgrupos: [...] }   — grupo com subgrupos
//   { grupo, items: [...] }        — grupo com items diretos
//   subgrupo: { label, href }     → link direto
//             { label, items }    → expansível
//             { label, disabled } → texto não-clicável
//   item:     { label, arquivo, tipo } — tipo: 'novo' | 'editar' | 'check'

var MENU = [
    {
        grupo: 'FUNDAMENTOS',
        pasta: '1-fundamentos',
        subgrupos: [
            { label: 'JAVA', href: '#java' },
            { label: 'SQL',  href: '#sql' },
            {
                label: 'CLASSES E OBJETOS',
                items: [
                    { label: 'Visão Geral',       arquivo: '#visao-geral', tipo: 'check' },
                    { label: 'Molde e Instância', arquivo: '#molde',       tipo: 'novo' },
                    { label: 'Anatomia da Classe', arquivo: '#anatomia',   tipo: 'editar' }
                ]
            },
            { label: 'EM BREVE', disabled: true }
        ]
    },
    {
        grupo: 'JASAP',
        pasta: '2-jasap',
        items: [
            { label: 'Visão Geral', arquivo: '#jasap', tipo: 'check' }
        ]
    },
    {
        grupo: 'NEXUS',
        pasta: '3-nexus',
        items: [
            { label: 'Fase 0', arquivo: '#fase-0', tipo: 'check' },
            { label: 'Fase 1', arquivo: '#fase-1', tipo: 'novo' }
        ]
    }
];

// Pasta "ativa" — simulada (no projeto real vem do path da URL)
var currentFolder = '1-fundamentos';
var currentPage = '#molde';

// ─── Build do drawer ─────────────────────────────────────────────
function buildMenu() {
    var inner = document.getElementById('drawer-inner');
    if (!inner) return;

    var html = '';
    for (var i = 0; i < MENU.length; i++) {
        var g = MENU[i];
        var isActiveGroup = (currentFolder === g.pasta);

        html += '<div class="menu-group' + (isActiveGroup ? '' : ' collapsed') + '">';
        html += '<div class="menu-group-header" onclick="toggleGroup(this)">';
        html += g.grupo;
        html += ' <span class="menu-group-arrow">&#9660;</span>';
        html += '</div>';
        html += '<div class="menu-group-items">';

        if (g.subgrupos) {
            for (var s = 0; s < g.subgrupos.length; s++) {
                var sub = g.subgrupos[s];

                // Subgrupo-link (href direto)
                if (sub.href) {
                    html += '<a class="menu-item menu-subgroup-link" href="' + sub.href + '">';
                    html += sub.label;
                    html += '</a>';
                    continue;
                }

                // Subgrupo desabilitado
                if (sub.disabled) {
                    html += '<span class="menu-item menu-subgroup-link disabled">' + sub.label + '</span>';
                    continue;
                }

                // Subgrupo expansível (com items)
                var hasActive = false;
                for (var k = 0; k < sub.items.length; k++) {
                    if (sub.items[k].arquivo === currentPage) { hasActive = true; break; }
                }
                var subCollapsed = hasActive ? '' : ' collapsed';

                html += '<div class="menu-subgroup' + subCollapsed + '">';
                html += '<div class="menu-subgroup-label" onclick="toggleSubgroup(this)">';
                html += sub.label;
                html += ' <span class="menu-subgroup-arrow">&#9660;</span>';
                html += '</div>';
                html += '<div class="menu-subgroup-items">';
                html += renderItems(sub.items);
                html += '</div></div>';
            }
        } else if (g.items) {
            html += renderItems(g.items);
        }

        html += '</div></div>';
    }

    inner.innerHTML = html;
}

function renderItems(items) {
    var out = '';
    for (var j = 0; j < items.length; j++) {
        var item = items[j];
        var active = (item.arquivo === currentPage) ? ' active' : '';
        var badge = '';

        if (item.tipo === 'novo') {
            badge = ' <span title="novo" style="color:#16a34a;">+</span>';
        } else if (item.tipo === 'editar') {
            badge = ' <span title="editar" style="color:#d97706;">✎</span>';
        } else if (item.tipo === 'check') {
            badge = ' <span title="ok" style="color:#999;">✓</span>';
        }

        out += '<a class="menu-item' + active + '" href="' + item.arquivo + '">' + item.label + badge + '</a>';
    }
    return out;
}

// ─── Toggles ─────────────────────────────────────────────────────
function toggleGroup(header) {
    header.closest('.menu-group').classList.toggle('collapsed');
}

function toggleSubgroup(label) {
    label.closest('.menu-subgroup').classList.toggle('collapsed');
}

// ─── Drawer open/close ───────────────────────────────────────────
function createDrawerOverlay(show) {
    var overlay = document.getElementById('drawer-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'drawer-overlay';
        overlay.addEventListener('click', toggleDrawer);
        document.body.appendChild(overlay);
    }
    overlay.style.display = show ? 'block' : 'none';
}

function toggleDrawer() {
    var drawer = document.getElementById('drawer');
    var isOpen = drawer.classList.toggle('open');
    document.getElementById('hamburger').classList.toggle('open');
    document.body.classList.toggle('drawer-open', isOpen);
    localStorage.setItem('drawerOpen', isOpen);

    if (window.innerWidth <= 768) {
        createDrawerOverlay(isOpen);
    }
}

// ─── Boot ────────────────────────────────────────────────────────
buildMenu();

// Restaura estado salvo
if (localStorage.getItem('drawerOpen') === 'true') {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('hamburger').classList.add('open');
    document.body.classList.add('drawer-open');
}
