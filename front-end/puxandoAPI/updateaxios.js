function atualizarDados() {
    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const depoimento = document.getElementById("depoimento").value;

    axios.put(`http://localhost:8080/depoimentos/update/${id}`, {
        nome: nome,
        email: email,
        depoimento: depoimento
    })
        .then(function (response) {
            console.log(response.data);
            alert('Dados atualizados com sucesso!');
            window.location.href = 'depoimentos.html';
        })
        .catch(function (error) {
            console.log(error);
            alert('Erro ao atualizar dados');
        });
}
