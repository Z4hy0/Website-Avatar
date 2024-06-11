function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 2) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }
    input.value = value;
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    // Expressão regular para validar o formato do e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    return true;
}

