function cadastrarNoSenai(){
    //Capturar os valores e criar variavel para o objeto JSON

    var cadastroSenai = new Object()

    cadastroSenai.nome = document.getElementById('inputNome').value
    cadastroSenai.cpf = document.getElementById('inputCPF').value
    cadastroSenai.eMail = document.getElementById('inputEMail').value
    cadastroSenai.dataDeNascimento = document.getElementById('inputDataDeNascimento').value
    cadastroSenai.escolaridade = document.getElementById('inputEscolaridade').value
    cadastroSenai.curso = document.getElementById('inputCurso').value
    cadastroSenai.unidadeDoSenai = document.getElementById('inputUnidadeDoSenai').value
    cadastroSenai.senha = document.getElementById('inputSenha').value

    //Converter para STRING JSON
    var meuJSON = JSON.stringify(cadastroSenai)

    console.log(meuJSON)
    console.log(cadastroSenai.valueOf())

    // if(){}
    document.getElementById("cadastrado").innerHTML = "Cadastro concluido"
}