const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const headerMenu = document.querySelector('[data-header="menu"]');
const menuLinks = document.querySelectorAll(".menu a"); // seleciona todos os links do menu

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

function AnimateMenuScroll() {
    const windowTop = window.pageYOffset;
    if (windowTop > 0) {
        headerMenu.classList.add('menu-shadow');
    } else {
        headerMenu.classList.remove('menu-shadow');
    }
}

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});


window.addEventListener('scroll', function() {
    AnimateMenuScroll();
})

// Botão Whatsapp
const botoesWhatsapp = document.querySelectorAll(".whatsapp-btn");

botoesWhatsapp.forEach(botao => {
botao.addEventListener("click", function (e) {
    e.preventDefault();
    const numero = "5583987219309";
    const mensagem = encodeURIComponent("Olá, vim pelo seu site e gostaria de saber mais!");
    const url = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(url, "_blank");
});
});
