const customexpress = require('./config/customexpress')
const conexao = require('./infraestrutura/conexao')
const tabelas = require('./infraestrutura/tabelas')

conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    }
    else {
        console.log('Conectado com sucesso!')

        tabelas.init(conexao)
        const app = customexpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }

})