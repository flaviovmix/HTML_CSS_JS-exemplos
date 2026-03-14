function toggleMenu() {
    const menu = document.getElementById("menu");
    const container = document.getElementById("conteudo");
    const button = document.getElementById("menu-hamburger-button");
    menu.classList.toggle("show");
    container.classList.toggle("menu-open");
    
    if (menu.classList.contains("show")) {
        button.textContent = "✖";
    } else {
        button.textContent = "☰";
    }
}