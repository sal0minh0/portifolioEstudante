async function enviarMensagem(event) {
  event.preventDefault();
  const form = document.getElementById("contactForm");
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
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
  } else {
    Swal.fire({
      title: "Falha ao enviar o email",
      color: "rgba(0, 0, 0, 0.8)",
      icon: "error",
      iconColor: "rgba(50, 205, 50, 0.9)",
      confirmButtonColor: "rgba(128, 0, 0, 0.9)",
      backdrop: "rgba(0, 0, 0, 0.8)",
      heightAuto: true,
      width: "28em",
    });
  }
}
