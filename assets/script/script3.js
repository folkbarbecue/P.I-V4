    function salvarDados() {
        var nome = document.getElementById("nome").value;
        var dataNascimento = document.querySelector("input[type='date']").value;
        var cpf = document.getElementById("cpf").value;
        var telefone = document.getElementById("telefone").value;
        var sanguineo = document.getElementById("sanguineo").value;
        var remedio = document.getElementById("remedio").value;
        var restricaoAlimentar = document.getElementById("restricaoAlimentar").value;

        var dados = {
            nome: nome,
            dataNascimento: dataNascimento,
            cpf: cpf,
            telefone: telefone,
            sanguineo: sanguineo,
            remedio: remedio,
            restricaoAlimentar: restricaoAlimentar
        };

        console.log(dados);

        // Store data in local storage
        localStorage.setItem("dados", JSON.stringify(dados));

        // Alert the user
        alert("Enviado");

        // Redirect to another page
        window.location.href = "./p10.html";
    }