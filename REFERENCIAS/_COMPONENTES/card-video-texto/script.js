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

    var video = card.querySelector('.card-img video');
    if (video) {
        card.addEventListener('mouseenter', function() {
            video.play().catch(function() {});
        }, { once: true });

        var pauseBtn = card.querySelector('.btnPauseCard');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (video.paused) video.play().catch(function() {});
                else video.pause();
            });
            video.addEventListener('play',  function() { pauseBtn.classList.add('playing'); });
            video.addEventListener('pause', function() { pauseBtn.classList.remove('playing'); });
        }
    }
});
