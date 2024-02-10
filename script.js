const dataBase = {
    key1: '8XDT9',
    key2: 'JOK5HT',
    key3: 'QFV1MK'
}

const directories = ['/img/0.jpeg', '/img/1.jpg', '/img/2.jpg', '/img/3.jpg']

let modal = document.querySelector('.modal'),
    form = document.querySelector('.hb__form'),
    modalCross = document.querySelector('.modal__cross');

form.addEventListener('submit', e => {
    e.preventDefault();
    checker = 0;
    for (key in dataBase) {
        if (document.querySelector('.hb__form_input').value.toLowerCase() == dataBase[key].toLowerCase()) {
            openModal(key.slice(-1));
            document.querySelector('.modal__header').innerHTML = `Правильно! ${key.slice(-1)}/3`;
            checker++;
        }
    }
    if (checker == 0) {
        openModal(0);
    }
})

modalCross.addEventListener('click', () => {
    closeModal();
})

function openModal(arg) {
    document.querySelector('.hb__form_input').value = '';
    modal.classList.add('active');
    document.querySelector('.modal__img img').src = directories[arg];
    if (arg == 0) {
        document.querySelector('.modal__header').innerHTML = `Неправильно!`
    }
}
function closeModal() {
    modal.classList.remove('active');
}