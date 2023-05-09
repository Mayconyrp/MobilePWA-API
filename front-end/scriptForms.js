//Script para permitir que os dados passados via url sejam utilizados para preencher os campos de INPUT
const params = new URLSearchParams(window.location.search);
document.getElementById("id").value = params.get("id");
document.getElementById("nome").value = params.get("nome");
document.getElementById("email").value = params.get("email");
document.getElementById("depoimento").value = params.get("depoimento");
