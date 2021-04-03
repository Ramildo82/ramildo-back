const express = require('express');
const path = require('path');
const config = require('config');

const port = process.env.PORT || config.get('server.port');

const  lancamentos = [
    { data: '2021-03-10,',
    descricao:'pagamento',
    valor: -100.00
    },
    { data: '2021-02-06,',
    descricao:'pagamento',
    valor: -20.00
    },
    { data: '2021-05-24,',
    descricao:'pagamento',
    valor: -500.00
    },
]

const app = express();

app.set('port', port);

app.route('/extrato').get(
    (req, res)=> {
        res.status(200).json(lancamentos)
    }
)

app.listen(port, ()=> {
    console.log("Servidor iniciado na porta " + port);
})

console.log("serviço iniciado")