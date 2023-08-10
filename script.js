function calcular(){
    //pegando os dados do formulário
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");

    //realizando a conta do IMC
    let imc = peso / (altura * altura);


    //exibindo em tela o resultado do IMC
    resultado.innerHTML = imc
}