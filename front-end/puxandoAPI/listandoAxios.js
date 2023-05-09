//Listando Dados
axios.get("http://localhost:8080/depoimentos")
    .then(function (response) {
        var tbody = document.querySelector("tbody");
        response.data.forEach(function (item) {
            var tr = document.createElement("tr");
            tr.innerHTML = `
            <tr>
            <td>${item.id}</td>
            <td>${item.nome}</td>
            <td>${item.depoimento}</td>
            <td>
            <button class="btn btn-success btn-update" onclick="preencherFormulario(${item.id}, '${item.nome}', '${item.email}', '${item.depoimento}')">Update</button>
            <button class="btn btn-danger btn-delete" onclick="deletarUsuario(${item.id})" type="submit">Delete</button>
            
                </td>
        </tr>
                          `;
            tbody.appendChild(tr);
        });
    })
    .catch(function (error) {
        console.log(error);
    });

/*function preencherFormulario(id, nome, email, depoimento) {
    
    window.location.href = `update.html?id=${id}&nome=${nome}&email=${email}&depoimento=${depoimento}`;
}

*/
//Função para permitir que os dados passados via URL sejam preenchidos nos inputs da página 'update.html'
function preencherFormulario(id, nome, email, depoimento) {
    const queryString = new URLSearchParams({
        id: id,
        nome: nome,
        email: email,
        depoimento: depoimento
    });
    window.location.href = `update.html?${queryString}`;
}



