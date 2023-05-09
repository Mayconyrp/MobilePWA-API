function enviarDados() {
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const depoimento = document.querySelector('#depoimento').value;

    axios.post('http://localhost:8080/enviardados', {
        nome: nome,
        email: email,
        depoimento: depoimento
    })
        .then(function (response) {
            console.log(response.data);
            alert('Dados enviados!');
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
            alert('Erro ao enviar dados!');
        });
}

