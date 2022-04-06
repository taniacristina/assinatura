function assinar(){
    var nome = document.getElementById("nome");
    if(nome.value ==""){
        document.getElementById("nomeass").innerHTML = "Preencha o nome"
        return;
    }

    var ramo = document.getElementById("ramo");
    if(ramo.value == ""){
        document.getElementById("ramoass").innerHTML = "Preencha o frase de apresentação"
        return;
    }

    var telefone = document.getElementById("telefone");
    if(telefone.value == ""){
        document.getElementById("telefoneass").innerHTML = "Preencha o contato telefone"
        return;
    }

    var email = document.getElementById("email");
    if(email.value == ""){
        document.getElementById("emailass").innerHTML = "Preencha o contato e-mail"
        return;
    }
    

    document.getElementById("nomeass").innerHTML = "Nome: " + nome.value
    document.getElementById("ramoass").innerHTML = ramo.value
    document.getElementById("telefoneass").innerHTML = "Phone: " + telefone.value
    document.getElementById("emailass").innerHTML = "E-mail: " + email.value


    return;

}