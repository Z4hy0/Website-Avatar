let emailSalvo 
let senhaSalva 


function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
    input.value = value;
}

function validateEmail(email) {


    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const formularioCadastro = document.getElementById("formulario_cadastro");
    if (formularioCadastro) {
        formularioCadastro.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            const emailValidado = validateEmail(email);
            const senha = document.getElementById("senha").value;
            const confirmarSenha = document.getElementById("confirmar_senha").value;

            if(senha !== confirmarSenha){
                alert('As senhas informadas estão divergentes.');
            } else {
                localStorage.setItem('email', email);
                localStorage.setItem('senha', senha);
                window.location.href = "login.html";
            }
        });
    }

    const formularioLogin = document.getElementById("formulario_login");
    if (formularioLogin) {
        formularioLogin.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;
            const emailSalvo = localStorage.getItem('email');
            const senhaSalva = localStorage.getItem('senha');
            if(email !== emailSalvo || senha !== senhaSalva){
                alert('As senhas informadas estão divergentes.');
            } else {
                window.location.href = "home.html";
            }
        });
    }
});

