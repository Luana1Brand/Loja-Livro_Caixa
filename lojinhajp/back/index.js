const express = require ("express");
const cors = require ("cors");
const mysql = require ("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const conexao =mysql.createConnection({

    user:'root',
    host:'localhost',
    database: 'lojinhajp'
});


 //se deve fazer isso para todas as tabelas no banco de dados
app.get('/lojinhajp/lancamentos', (req,res)=>{ 
   
    let string ="select*from lancamentos"
    conexao.query(string, (erro,resultado) => {
    if(erro==null){
            res.json(resultado);
    }
    })
})


app.post("/lojinhajp/lancamentos", (req, res) => {

    let query = `insert into lancamentos values (default, curdate(), '${req.body.descricao}',${req.body.valor},'${req.body.tipo}')`;
    
    conexao.query(query, (erro, result) =>{

        if(erro == null) {
            res.status(201).json(req.body).end();
        }else {
           res.status(400).json(erro).end();
        }
    });
});



app.listen(5000, () => {
    console.log("respondendo na porta 5000")
})