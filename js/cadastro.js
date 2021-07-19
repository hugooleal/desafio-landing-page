const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    localStorage.setItem(email, nome);
    document.getElementById('email').value = '';
    document.getElementById('nome').value = '';

    document.getElementById('cadastro').innerHTML = `
    <p>Obrigado por se cadastrar e boas compras!</p>
    `;
})