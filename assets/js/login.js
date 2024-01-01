const formuCadastro = document.querySelector('.formuLogin');
const loginSucess = document.querySelector('.login-sucess');

function login(event) {
    event.preventDefault();



    const loginUsuario = localStorage.getItem('cadastroUsuario');
    const loginSenha = localStorage.getItem('cadastroSenha');
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    if (usuario === loginUsuario && senha === loginSenha) {
        loginSucess.classList.add('sucesso-login');
        loginSucess.classList.remove('erro-login');
        loginSucess.innerHTML = 'Seja bem-vindo. Entrando ...';

        setTimeout(function () {
            window.location.href = 'pagina.html';
        }, 3000);


    } else {
        loginSucess.classList.add('erro-login');
        loginSucess.innerHTML = 'Usuário ou Senha Invalidos';
    }



}

formuCadastro.addEventListener('submit', login);


function relogio() {
    const hora = document.querySelector('.clock');
    const data = new Date()

    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, ('0'));
    const ano = data.getFullYear();

    hora.innerHTML = `Hora atual: ${horas}:${minutos}:${segundos}<br>Data atual: ${dia}/${mes}/${ano}`;


}

setInterval(relogio, 1000);

relogio();