const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert("Obrigado(a) por se cadastrar! Entraremos em contato em breve.");
});

document.querySelector('.whatsapp_button').addEventListener('click', () => {
    window.open("https//wa.me/5511999999999", "_blanck");
});

function verificarHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    const aberto = (hora >= 11 && hora < 20);
    document.querySelector('footer').insertAdjacentHTML('beforeend',
    `<p>Status: ${aberto ? "Aberto ✅" : "Fechado ❌"}</p>`
);
}
verificarHorario();

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