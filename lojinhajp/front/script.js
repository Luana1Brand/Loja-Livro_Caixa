const URI = 'http://localhost:5000/lojinhajp/lancamentos';




const n_lan = document.querySelector("#n_lan");
console.log(n_lan);
const data_lancamento = document.querySelector("#data_lancamento");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const tipo = document.querySelector("#tipo");




var listarTodos = [];

function carregar() {
    const options = { method: 'GET' };
    fetch(URI, options)
        .then(resp => resp.json())
        .then(resp => {
            listaTodos = resp;
            montarTabelaEntradas();
        })
        .catch(err => console.error(err));
}



function montarTabelaEntradas() {
    listaTodos.forEach(e=>{
        n_lan.innerHTML += e.n_lan+"<br/>";
        data_lancamento.innerHTML += e.data_lancamento+"<br/>";
        descricao.innerHTML += e.descricao+"<br/>";
        valor.innerHTML += e.valor+"<br/>";
        tipo.innerHTML += e.tipo+"<br/>";

    });
}
