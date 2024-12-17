import mysql, { Connection } from "mysql2/promise"


class bancoMysql{

    //propriedade
    private conexao:Connection|null

    //Método
     constructor(){
        this.conexao = null
        mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"banco1022b",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        .then(conn=>this.conexao=conn)
    }

    async query() {
        if(!this.conexao) return new Error("Não existe conexão")
         const [result,fields]  =  await this.conexao.query("INSERT INTO produtos VALUES (?,?,?,?,?)",[id,nome,descricao,preco,imagem])
        result
    }

    async end() {
        if(!this.conexao) return new Error("Não existe conexão")
         await this.conexao.end()
    }

}

export default bancoMysql


