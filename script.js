document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('#form');
const mensagem = document.querySelector('#mensagem');
if (form && mensagem) {
form.addEventListener('submit', (e) =>{
   e.preventDefault();
            mensagem.textContent = "Obrigado(a) por se cadastrar! Entraremos em contato em breve.";
            mensagem.style.color = "green";
            mensagem.style.fontFamily = "arial";
            mensagem.styledisplay = "block";
            form.reset();
         
});
}



document.querySelector('.whatsapp_button').addEventListener('click', () => {
    window.open("https//wa.me/5511999999999", "_blanck");
});

function verificarHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    const aberto = (hora >= 11 && hora < 20);
    const footer = document.querySelector('footer');
    if (footer) {
        document.querySelector('footer').insertAdjacentHTML('beforeend',
            `<p>Status: ${aberto ? "Aberto ✅" : "Fechado ❌"}</p>`
        );
    }
}
    verificarHorario();
});

document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('mouseenter', () => {
        const estilo = foto.getAttribute('data-estilo');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.textContent = estilo;
        foto.appendChild(overlay);
    });

    foto.addEventListener('mouseleave', () => {
        const overlay = foto.querySelector('.overlay');
        if (overlay) overlay.remove();
    });
});

