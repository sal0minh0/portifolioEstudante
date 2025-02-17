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

    let timerInterval;
    Swal.fire({
      title: "<strong>Seu E-mail foi enviado!</strong>",
      html: 'Clique no "Go back" para voltar',
      color: "rgba(0, 0, 0, 0.8)",
      icon: "success",
      iconColor: "rgba(50, 205, 50, 0.9)",
      confirmButtonColor: "rgba(128, 0, 0, 0.9)",
      backdrop: "rgba(0, 0, 0, 0.8)",
      padding: "0 0 1.5em 0",
      heightAuto: false,
      width: "28em",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  }
}

// Adiciona o event listener no formulário
document.querySelector('form').addEventListener('submit', enviarMensagem);