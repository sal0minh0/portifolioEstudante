function enviarMensagem(event) {
  // Previne o comportamento padrão do formulário
  event.preventDefault();
  
  // Pega o formulário
  const form = document.querySelector('form');
  
  // Verifica se o formulário é válido
  if (form.checkValidity()) {
    // Se for válido, envia o formulário
    form.submit();
    
    // Mostra o SweetAlert2
    Swal.fire({
      title: "Seu E-mail foi enviado!",
      color: "rgba(0, 0, 0, 0.8)",
      icon: "success",
      iconColor: "rgba(50, 205, 50, 0.9)",
      confirmButtonColor: "rgba(128, 0, 0, 0.9)",
      backdrop: "rgba(0, 0, 0, 0.8)",
      heightAuto: true,
      width: "28em",
    });
  }
}

// Adiciona o event listener no formulário
document.querySelector('form').addEventListener('submit', enviarMensagem);