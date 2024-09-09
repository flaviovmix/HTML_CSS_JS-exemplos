document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
    if (file) {
        const reader = new FileReader(); // Criando uma instância do FileReader
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
            preview.style.display = 'block'; // Tornando a pré-visualização visível
        };
        reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
    }
});