function load() {
    fetch("http://localhost:3000/categorias")
        .then(x => x.text())
        .then(cat => display(cat))
}

function display(dados) {
    console.log(dados)
    let lista = JSON.parse(dados)
    var options = ""
    for (let ob in lista) {
        options += "<option>"+ lista[ob].descricao + "</option>"
    }
    document.getElementById("categoria").innerHTML = options;
}