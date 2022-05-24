import 'dotenv/config'

import express from 'express'
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




server.listen(process.env.PORT,
                () => console.log(`API online na porta ${process.env.PORT}`));