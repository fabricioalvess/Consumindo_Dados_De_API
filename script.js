// requisicao assincrona com promisses:


//var consultarCep = fetch("https://viacep.com.br/ws/01001000/json/ ")
//     .then(resposta => resposta.json())
//     .then(r => {
//         if(r.erro){
//             throw Error("Esse cep nao existe")
//         }
//             console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log("Procedimento concluido!"))
//     console.log(consultarCep)

//Requisição assincrona com async e await

async function buscarEndereco(cep){
       var err = document.getElementById("erro")
       err.innerHTML="";
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error('Cep nao existente.');
        }

        var cidade = document.getElementById("cidade");
        var logradouro = document.getElementById("endereco");
        var estado = document.getElementById("estado");
        var bairro = document.getElementById("bairro");
        setInterval(function(){
            cidade.value = consultaCepConvertida.localidade;
            logradouro.value = consultaCepConvertida.logradouro;
            estado.value = consultaCepConvertida.uf;
            bairro.value = consultaCepConvertida.bairro;
        },1000)
        
        console.table(consultaCepConvertida);
        return consultaCepConvertida;
    }catch(erro){
       err.innerHTML= `<p>cep invalido.</p>`
        console.log(erro)
    }

}



var cep = document.querySelector("#cep");
("#endereco");

cep.addEventListener('focusout', ()=>{
    console.table(buscarEndereco(cep.value))
    
})