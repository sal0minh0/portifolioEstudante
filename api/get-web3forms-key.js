require('dotenv').config();

app.get('/api/get-web3forms-key', (req, res) => {
    res.json({ accessKey: process.env.WEB3FORMS_ACCESS_KEY });
});
/*
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
  */