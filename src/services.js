


export  function somar (n1 , n2){
    return n1 + n2 ;
}

export  function dobro (n1){
    return n1 * 2;
}

export function media (n1, n2, n3){ 
    return (n1 + n2 + n3) / 3;
}

export function temperatura(a){
    console.log(a)
    let msg= ""
    if(a > 37){
        msg = "true"
    }else{
        msg = "false"
    }
    return msg
}

export function corprimaria(cor){
    let msg = "";
    if( cor === "amarelo"|| cor === "azul" || cor === "vermelho" ){
        msg = "true"
    }else{
        msg ="false"
    }
    return msg
}

export function ingressoCinema(qtdint,qtdMeia,diaSemana,nacionalidade){
    let total = 0;

    if(nacionalidade === "brasileira"){
            total = (qtdint + qtdMeia) * 5.0
    }else{
        if(diaSemana === "quarta"){
                total = (qtdint + qtdMeia) * 14.25
        }else{
            total = (qtdMeia * 14.25) + (qtdint * 28.5)
        }
    }

    return total
}


export function tabuada(a){
    let msg = 0;

    for(let i = 0; i < 10; i++){
       msg = a + a
    }
    return msg
}

