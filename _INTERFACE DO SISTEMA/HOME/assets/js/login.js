
const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const container = document.querySelector('.container');
const body = document.querySelector('body');

signupBtn.onclick = function () {
    formBx.classList.add('ativa');
    body.classList.add('ativa');
    container.classList.add('ativa');
}

signinBtn.onclick = function () {
    formBx.classList.remove('ativa');
    body.classList.remove('ativa');
    container.classList.remove('ativa');
}



//faz texto placeholder aparecer ou desaparecer
function esconderTexto() {
    // Não esconde o texto no foco, ele só desaparecerá quando o usuário começar a digitar
    const input = document.getElementById('nomeInput');
    const textoPlaceholder = document.getElementById('textoPlaceholder');

    // Exibe o texto do placeholder quando o campo está vazio e não em foco
    if (input.value === '') {
        textoPlaceholder.style.display = 'block';
    }
}

function esconderQuandoDigitar() {
    // Esconde o texto quando o usuário começa a digitar
    const input = document.getElementById('nomeInput');
    const textoPlaceholder = document.getElementById('textoPlaceholder');

    // Se o campo não estiver vazio, esconde o texto
    if (input.value !== '') {
        textoPlaceholder.style.display = 'none';
    } else {
        // Se o campo estiver vazio, mostra o texto novamente
        textoPlaceholder.style.display = 'block';
    }
}

document.getElementById('nomeInput').addEventListener('focus', esconderTexto);
document.getElementById('nomeInput').addEventListener('blur', esconderTexto);
document.getElementById('nomeInput').addEventListener('input', esconderQuandoDigitar);



