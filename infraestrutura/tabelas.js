class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS ATENDIMENTOS (ID INT NOT NULL AUTO_INCREMENT, 
                                                CLIENTE VARCHAR(50) NOT NULL, 
                                                PET VARCHAR(20), 
                                                SERVICO VARCHAR(20) NOT NULL, 
                                                DATA DATETIME NOT NULL,
                                                DATACRIACAO DATETIME NOT NULL,
                                                STATUS VARCHAR(20) NOT NULL,
                                                OBSERVACOES TEXT, PRIMARY KEY(ID))`
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas