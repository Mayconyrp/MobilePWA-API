const express = require("express")
const app = express()
const cors = require("cors")

// Import BD
const conexaodb = require("./database/db")
const Testemunha = require("./models/testemunha")

//utilizando o EXPRESS

app.use(cors())
app.use(express.json())

//Conexao c banco de dados
conexaodb
    .authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })


// API'S

app.get("/", (req, res) => {
    res.send("hi")
})


//API PARA CADASTRO
app.post("/enviardados", (req, res) => {
    const { nome, email, depoimento } = req.body

    console.log(nome, email, depoimento)

    Testemunha.create({
        nome: nome,
        email: email,
        depoimento: depoimento,
    }).then((dadoscadastro) => {
        console.log(dadoscadastro.toJSON()) // Linha para limpeza de Dados
        res.send("Dados enviado")
    })

})

//Exibir Dados
app.get("/depoimentos", (req, res) => {
    Testemunha.findAll({
    }).then((Testemunhas) => {
        console.log(Testemunhas.map(Testemunhas => Testemunhas.toJSON())) // Linha para limpeza de Dados
        res.send(Testemunhas)
    }).catch((error) => {
        console.log(error)
    })
})

//Update



app.put('/depoimentos/update/:id', (req, res) => {
    const id = req.params.id;
    const { nome, email, depoimento } = req.body;

    Testemunha.update(
        { nome: nome, email: email, depoimento: depoimento },
        { where: { id: id } }
    )
        .then(() => {
            res.status(200).send('Testemunha atualizada com sucesso!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao atualizar Testemunha');
        });
});

//Delete
app.delete('/depoimentos/delete/:id', (req, res) => {
    const id = req.params.id;

    Testemunha.destroy({
        where: { id: id }
    })
        .then(() => {
            res.status(204).send();
            res.send("Deletado com sucesso!")
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao deletar Testemunha');
        });
});



//Porta do servidor
app.listen(8080, () => {
    console.log("Aplicação on-line!")
})      
