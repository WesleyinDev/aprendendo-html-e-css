const nome = prompt('Qual o seu nome?');
alert(`Olá,${nome} seja muito bem vindo ao meu primeiro projeto!`);
const nam = document.getElementById('name');
const nam1 = document.getElementById('name2');


nam.innerHTML = `<mark class="cor">${nome}</mark>`;
nam1.innerHTML = `<mark class="cor">${nome}</mark>`;




let idade = prompt('Qual sua idade?');
anos = Number(idade);
if (anos >= 18) {
    alert('Obrigado por estar aqui, considere enviar-me um feedback sobre o que achou do site :)')
} else {
    let confirmar = confirm('Este site pode conter conteúdo não adequado para sua idade. Deseja continuar?');
    if (confirmar === false) {
        alert('Você escolheu não continuar, Fechando a pagina ... (Isso é apenas um experimento, não há conteudo pronografico aqui :))');
        window.close();
    } else {
        alert('Você decidiu continuar mesmo sendo menor de idade. Tenha cuidado ao explorar o conteúdo. (Isto não é um site pornografico, estou apenas brincando com o codigo:)');
    }
}

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