import { Router } from "express";

const server = Router();

import { dobro , somar , media , temperatura , corprimaria , ingressoCinema , tabuada} from './services.js'


server.get('/ping' , (req,resp) =>{
    resp.send('pong');
})

server.get('/dobro/:numero' , (req , resp) => {
    try{
        const numero = Number(req.params.numero);

        const d= dobro(numero);

        resp.send({
            dobro: d
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

        const x = somar( a , b);
    
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

            const x = somar(a , b);

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

        const x =  media(n1 , n2 , n3);

        resp.send({
            media: x
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
        const febre = Number(req.query.a);
        
        const x = temperatura(febre);
        resp.send({
            temperatura : x
        })
        
    }catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/tabuada' , (req , resp) => {
    try {
        const {valor} = Number(req.query);

        const x = tabuada (valor)
        resp.send({
            response : x
        })
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})


server.get('/DIA2/corprimaria/:cor' , (req,resp) =>{
    try {
        const cor = req.params.cor;
        
        const x = corprimaria(cor);
        
        resp.send({
            cor : x
        })
    
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/DIA2/ingressoCinema' , (req,resp) =>{
    try {
        const { valores : {qtdint , qtdMeia , diaSemana , nacionalidade}} = req.body;
     
        const x = ingressoCinema (qtdint,qtdMeia,diaSemana,nacionalidade)

        resp.send({
            total : x
        })
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


export default server