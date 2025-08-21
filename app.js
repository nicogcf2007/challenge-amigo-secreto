// Definimos lista de amigos
var amigos = [];
// Actualizamos la lista de amigos
const actualizarAmigos = () => {
    let listaAmigosInput = document.getElementById("listaAmigos");
    listaAmigosInput.innerHTML = "Tus amigos son:";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosInput.appendChild(li);
    });
}
// Agregamos amigo
const agregarAmigo = () => { 
    let amigoInput = document.getElementById("amigo");
    let amigoValue = amigoInput.value;
    if (amigoValue === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    amigos.push(amigoValue);
    console.log(amigos);
    amigoInput.value = "";
    actualizarAmigos();
}
// Sorteamos amigo
const sortearAmigo = () => {
    let numero = Math.floor(Math.random() * amigos.length);
    let seleccionado = amigos[numero];
    console.log(seleccionado);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${seleccionado}`;
}