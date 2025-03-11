const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (!isNaN(nombre)) {
        alert("Solo se permiten letras. No ingrese números.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    listaAmigos.push(nombre);

    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ${amigoSeleccionado} es el amigo secreto! 😀</li>`;
}