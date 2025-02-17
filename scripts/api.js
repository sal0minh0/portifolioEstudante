document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('/enviar-contato', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        console.log('Sucesso:', result);
    } catch (error) {
        console.error('Erro:', error);
    }
});