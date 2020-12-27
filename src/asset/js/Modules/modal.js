const initModal = function() {

    var bodyElem = document.querySelector('body');

    // モーダルを開く処理
    var modalLists = document.querySelectorAll('.js-modal-element');
    var modalOpeners = document.querySelectorAll('.js-modal-opener');

    for (let i = 0; i < modalOpeners.length; i++) {
        modalOpeners[i].addEventListener('click', () => {
            modalLists[i].classList.add('is-show');
            bodyElem.classList.add('is-modal-hidden');
        });
    }

    // モーダルを閉じる処理
    var modalCloser = document.querySelectorAll('.js-modal-closer');
    var modalCover = document.querySelectorAll('.js-modal-cover');

    for (let i = 0; i < modalCloser.length; i++) {
        modalCloser[i].addEventListener('click', () => {
            modalLists[i].classList.remove('is-show');
            bodyElem.classList.remove('is-modal-hidden');

        });
    }

    for (let i = 0; i < modalCover.length; i++) {
        modalCover[i].addEventListener('click', () => {
            modalLists[i].classList.remove('is-show');
            bodyElem.classList.remove('is-modal-hidden');
        });
    }
}

export { initModal };
