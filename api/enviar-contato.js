document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('/api/enviar-contato', { // <-- Rota corrigida
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)), // Converter para JSON
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const result = await response.json();
      console.log('Sucesso:', result);
    } catch (error) {
      console.error('Erro:', error);
    }
  });