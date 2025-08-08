const ano_html = document.getElementById("ano_atual");
const data_completa = new Date();

const ano_atual = data_completa.getFullYear();

ano_html.textContent = ano_atual;