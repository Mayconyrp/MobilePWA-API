//Deletando Dados
function deletarUsuario(id) {
    axios.delete(`http://localhost:8080/depoimentos/delete/${id}`)
        .then(function (response) {
            alert('Usuário deletado com sucesso!');
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}



