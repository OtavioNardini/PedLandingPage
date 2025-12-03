// Script simples para interatividade básica

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botão de play do vídeo (exemplo simples)
const playButton = document.querySelector('.btn-play');
if (playButton) {
    playButton.addEventListener('click', function () {
        alert('Aqui você pode adicionar um iframe do YouTube ou Vimeo com seu vídeo!');
        // Exemplo: substituir o placeholder por um iframe
        // const videoContainer = document.querySelector('.video-placeholder');
        // videoContainer.innerHTML = '<iframe width="100%" height="100%" src="SEU_VIDEO_URL" frameborder="0" allowfullscreen></iframe>';
    });
}

// Animação ao scroll (elementos aparecem conforme usuário rola a página)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Adiciona animação aos cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.phase-card, .guarantee-item, .testimonial-card');

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Efeito nos botões CTA
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Aqui você pode adicionar ação de conversão, redirect, etc.
        console.log('Botão CTA clicado!');
        // window.location.href = 'sua-pagina-de-checkout.html';
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Fecha todas as outras perguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Abre a pergunta clicada (se não estava aberta)
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});
