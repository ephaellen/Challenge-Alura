document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    window.adicionarAmigo = function () {
        let input = document.getElementById("amigo");
        let nome = input.value.trim();
        let lista = document.getElementById("listaAmigos");

        if (nome === "") {
            alert("Você precisa digitar um nome antes de adicionar!");
            return;
        }

        if (amigos.includes(nome)) {
            alert("Esse nome já foi adicionado!");
            return;
        }

        amigos.push(nome);
        atualizarLista();
        input.value = ""; // Limpa o campo de entrada
        input.focus(); // Mantém o cursor no campo de entrada
    };

    window.sortearAmigo = function () {
        let resultado = document.getElementById("resultado");

        if (amigos.length === 0) {
            alert("Você precisa adicionar pelo menos um nome antes de sortear!");
            return;
        }

        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;
    };

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpa a lista antes de atualizar

        amigos.forEach(nome => {
            let li = document.createElement("li");
            li.textContent = nome;
            lista.appendChild(li);
        });
    }
});