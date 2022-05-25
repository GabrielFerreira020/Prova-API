import 'dotenv/config'

import express, { response } from 'express'
import cors from'cors'



const server = express();
server.use(cors());
server.use(express.json());

server.get('/ping' , (req,resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero' , (req , resp) => {
    try{
        const numero = Number(req.params.numero);
        const dobro = numero * 2;

        resp.send({
            dobro:dobro
        });
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }     
})

server.get ('/somar' , (req , resp) => {
    
    try{    
        const a =  Number(req.query.a);
        const b =  Number(req.query.b);

        const x = a + b;
    
        resp.send({
            somar: x
        })
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }    
});


server.post('/somar', (req, resp) => {
        try{
            const a = req.body.a;
            const b = req.body.b;

            const x = a + b;

            resp.send({
                soma:x
            })

        }catch(err){
            resp.status(404).send({
                erro: err.message
            })
        }
})


server.post('/media', (req,resp)=>{
    try{
        const {valores: { n1, n2, n3}} = req.body;

        const x = (n1 + n2 + n3) /3;

        resp.send({
            media:x
        })
    }
    catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.get('/temperatura', (req,resp)=>{
    try {
        const febre = Number(req.params.a);
        
        if(febre > 37){
            resp.send ({
                febre:" true"
            })
        }else{
            resp.send ({
                febre:"false"
            })
        }
        
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/tabuada' , (req , resp) => {
    const {valor} = Number(req.params);

})


server.get('/DIA2/corprimaria/:cor' , (req,resp) =>{
    try {
        const cor = req.params.cor;
        if(cor === "amarelo"|| cor === "azul" || cor === "vermelho"){
            resp.send({
                cor:"true"
            })
        }else{
            resp.send({
                cor:"false"
            })
        }
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/DIA2/ingressoCinema' , (req,resp) =>{
    try {
        const { valores : {qtdint , qtdMeia , diaSemana , nacionalidade}} = req.body;
        if(nacionalidade === "brasileira"){
            resp.send({
                total : (qtdint + qtdMeia) * 5.00
            })
        }else{
            if(diaSemana === "quarta"){
                resp.send({
                    total : (qtdint + qtdMeia) * 14.25
                })
            }else{
                total (qtdMeia * 14.25) + (qtdint * 28.5)
            }
        }
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/DIA2/freqCaracter/:texto/:caracter' , (req , resp) =>{
    try {
        const {texto , caracter} =req.params;
        for(let count = 0; count < texto.length; count++){
            if(texto[count] = caracter){
                resp.send({
                    qtd : count
                })
            }
        }
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})




server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));