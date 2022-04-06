function cadastrarClient(){
    //DOM Documento Object Model
    var nome = document.getElementById("nome")
    if(nome.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe nome";
        nome.focus();
        return;
    }

    var phone = document.getElementById("phone")
    if(phone.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe phone";
        phone.focus();
        return;
    }
    
    var email = document.getElementById("email")
    if(email.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe email";
        email.focus();
        return;
    }   
    
    var rua = document.getElementById("rua")
    if(rua.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe rua";
        rua.focus();
        return;
    }   

    var bairro = document.getElementById("bairro")
    if(bairro.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe bairro";
        bairro.focus();
        return;
    }   

    var cidade = document.getElementById("cidade")
    if(cidade.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe cidade";
        cidade.focus();
        return;
    }  

    var cep = document.getElementById("cep")
    if(cep.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe cep";
        cep.focus();
        return;
    }  

    var credito = document.getElementById("credito")
    if(credito.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe credito";
        credito.focus();
        return;
    }  

    var foto = document.getElementById("foto")
    if(foto.value == ""){
        document.getElementById("mensagemError").innerHTML = "informe foto";
        foto.focus();
        return;
    }  

    document.getElementById("mensagemError").innerHTML = "CADASTRO REALIZADO COM SUCESSO";
    
    
}