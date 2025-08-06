
  const home = document.getElementById('home');
  const botao = document.getElementById('botao-flutuante');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        botao.style.display = "none";
      } else {
        botao.style.display = "block";
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(home);