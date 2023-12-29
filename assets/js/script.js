
function formu() {
    const form = document.querySelector('.form');
    const sucess = document.querySelector('.sucess');

    function receberEvento(evento) {
        evento.preventDefault();
        sucess.innerHTML = `<p> Seu feedback foi enviado. Obrigado :)</p>`
    }
    form.addEventListener('submit', receberEvento);
}
formu();