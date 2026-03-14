const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        } 

        leitor.readAsDataURL(arquivo);
    });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaimagem = document.querySelector(".container-imagem-nome p")

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaimagem.textContent = conteudoDoArquivo.nome;
        } catch (error) {
            console.error("Erro na leitura do arquivo");
        }
    }
});

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");


listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
});

const tagsDisponiveis = ["Algoritmo", "Banco de Dados", "Computação em Nuvem", "Inteligência Artificial", "Big Data", "Segurança da Informação", "Redes de Computadores", "Blockchain", "Sistema Operacional", "Virtualização", "Compilador", "Criptografia", "Cibersegurança", "Linguagem de Programação", "Internet das Coisas (IoT)", "DevOps", "Aprendizado de Máquina (Machine Learning)", "Engenharia de Software", "Arquitetura de Sistemas", "Virtual Reality (VR)","HTML", "CSS", "JavaScript", "React.js", "Vue.js", "Angular", "TypeScript", "Python", "R", "Machine Learning", "Deep Learning", "SQL", "APIs", "Git/GitHub", "UX/UI Design", "Bootstrap", "Pandas", "TensorFlow", "Data Visualization", "D3.js", "Node.js", "Express", "Flask", "Django", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Sass", "Less", "Webpack", "jQuery", "GraphQL", "REST", "JSON", "JSON Web Tokens (JWT)", "OAuth", "Matplotlib", "Seaborn", "NumPy", "SciPy", "Keras", "PyTorch", "NLP", "Computer Vision"]
async function verificaTagDiponivel(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        },1000)
    });
}

inputTags.addEventListener("keypress", async (evento) => {
    if(evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();

        if(tagTexto !== "") {
            try {
                const tagExiste = await verificaTagDiponivel(tagTexto);

                if(tagExiste) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag" alt="">`;
                    listaTags.appendChild(tagNova);
                    inputTags.value = "";
                }else {
                    alert("Tag não encontrada");
                }

            } catch (error){
                console.error("Erro ao verificar a existência da Tag.");
                alert("Erro ao verificar a existência da Tag. Solicita suporte técnico")
            }
        }

    }
});

const botaoPublicar = document.querySelector(".botao-publicar");

async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto,tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if(deuCerto) {
                resolve("Projeto publicado com sucesso.");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000);
    });
}

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("P")).map((tag) => tag.textContent);
    
    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Deu tudo certo!");
    } catch (error) {
        console.log("Deu errado: ", error);
        alert("Deu tudo errado!");
    }
});

const botaoDescartar = document.querySelector(".botao-descartar");
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const formulaio = document.querySelector("form");
    formulaio.reset();

    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaimagem.textContent = "imagem vazia"

    listaTags.innerHTML = "";

});