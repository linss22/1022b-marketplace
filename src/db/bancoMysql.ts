import mysql, { Connection } from 'mysql2/promise'
class BancoMysql{
    //Propriedade
    private conexao:Connection|null

    //Métodos
    constructor (){
        this.conexao = null
        mysql.createConnection({
            host: process.env.dbhost?process.env.dbhost:"localhost",
            user:process.env.dbuser?process.env.dbuser:"root",
            password:process.env.dbpassword?process.env.dbpassword:"",
            database:process.env.dbname?process.env.dbname:"banco1022b",
            port:process.env.dbport?parseInt(process.env.dbport):3306
        })
        .then(conn=>this.conexao=conn)
        .catch(e=>console.log(e))
    }

    async query(){
        if(!this.conexao) return new Error("Não existe conexão")
        const [result,fields]  = await this.conexao.query("SELECT * FROM produtos")
        return result
    }
    async end(){
        if(!this.conexao) return new Error("Não existe conexão")
        await this.conexao.end()
    }
}


export default BancoMysql
