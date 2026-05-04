document.addEventListener('DOMContentLoaded', function() {

    const menuBtn = document.getElementById('menuBtn');
    const menuLateral = document.getElementById('menuLateral');
    const closeBtn = document.getElementById('closeBtn');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            menuLateral.classList.add('ouvert');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            menuLateral.classList.remove('ouvert');
        });
    }

    document.addEventListener('click', function(event) {
        if (menuLateral && !menuLateral.contains(event.target) && event.target !== menuBtn) {
            menuLateral.classList.remove('ouvert');
        }
    });

});
