<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link id="tema" rel="stylesheet" href="assets/css/temas/variaveis-tema-claro.css"> 
        <link rel="stylesheet" href="assets/css/login.css">
        <title>Document</title>
    </head>
    <body>
        <div class="mensagem-18">
            <span> 🔞 </span>
            <span class="span-maior"> 🔞 </span>
            <h3>CONTEÚDO PARA MAIORES DE 18 ANOS</h3>
        </div>

        <div class="container">
            <div class="blueBg">
                <div class="box signin">
                    <span>🍑</span>
                    <h2>Já tem uma conta?</h2>
                    <h3>Não vejo a hora de te desarivar!</h3>                
                    <button class="signinBtn">Volte para aquela chata! 😈</button>
                </div>
                <div class="box signup">
                    <span>🔥</span>
                    <h2>Ainda não tem uma conta?</h2>
                    <h3>Estamos te esperando!</h3>
                    <button class="signupBtn">Venha me concontrar ✨</button>
                </div>            
            </div>
            <div class="formBx">
                <div class="form signinForm">
                    <form method="post" action="entidades/usuario/loginUsuario.jsp">
                        <h3>Logar</h3>
                        <input 
                            type="text" 
                            name="usuario"
                            placeholder="usuário" 
                            value="a"
                            />
                        <input 
                            type="password" 
                            name="senha"
                            placeholder="senha" 
                            value="a"
                            />
                        <button class="btn-logar" type="submit">Logar</button>
                        <a class="link" href="#">Esqueci minha senha</a>
                    </form>
                    <div>

                        <div class="form signupForm">
                            <form method="post" action="entidades/usuario/salvarUsuario.jsp">
                                <h3>Cadastrar</h3>
                                <label>diga pra gente seu nome ou apelido</label>
<div class="input-container">
    <input 
        type="text" 
        name="primeiroNomeOuApelido" 
        id="nomeInput"
        onfocus="esconderTexto()" 
        onblur="mostrarTexto()"
    />
    <span id="textoPlaceholder">certeza que é <span class="apelido">Docinho</span> 🍒💦👄</span>
</div>
                                <input 
                                    type="text" 
                                    name="usuario"
                                    placeholder="usuário" 
                                    />

                                <input 
                                    type="password"
                                    name="senha"
                                    placeholder="senha" 
                                    />

                                <button class="btn-logar" type="submit">Cadastrar</button>

                            </form>
                            <div>                
                            </div>
                        </div>

                        <script>
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


                          
                        </script>
                        </body>
                        </html>