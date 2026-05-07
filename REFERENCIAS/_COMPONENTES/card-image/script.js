document.querySelectorAll('.card').forEach(function(card) {
    var btn = card.querySelector('.btnMenuCard');
    var info = card.querySelector('.card-info');

    if (btn && info) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            info.classList.toggle('aberto');
            btn.classList.toggle('aberto');
        });
    }

    var cardHref = card.getAttribute('data-href');
    if (cardHref) {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a[href]') || e.target.closest('.btnMenuCard')) return;
            window.location.href = cardHref;
        });
    }
});
