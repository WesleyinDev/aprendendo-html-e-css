const formuCadastro = document.querySelector('.formuCadastro')


function cadastro (event) {
    event.preventDefault();



    const cadastroUsuario = document.querySelector('#cadastro-usuario').value;
    const cadastroSenha = document.querySelector('#cadastro-senha').value;
    const sucessCadastro = document.querySelector('.cadastro-sucess');


    sucessCadastro.classList.add('sucesso-cadastro')
    sucessCadastro.innerHTML = 'Cadastro realizado com sucesso. Aguarde ...';

    localStorage.setItem('cadastroUsuario', cadastroUsuario);
    localStorage.setItem('cadastroSenha', cadastroSenha);

    setTimeout (function () {
        window.location.href ='index.html';
    }, 3000);


}
formuCadastro.addEventListener('submit', cadastro);

function relogio () {
    const hora = document.querySelector('.clock');
    const data = new Date();

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart (2,'0');
    const segundos = String(data.getSeconds()).padStart (2, '0');

    const dia = String(data.getDate()).padStart (2,'0');
    const mes = String(data.getMonth() + 1).padStart (2, '0');
    const ano = data.getFullYear();

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    const diaAtual = `${dia}/${mes}/${ano}`;


    hora.innerHTML = `Horario: ${horaAtual} Data: ${diaAtual}`;

}

setInterval(relogio, 1000);

relogio();
