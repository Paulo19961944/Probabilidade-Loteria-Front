document.addEventListener("DOMContentLoaded", function() {
    
    // Chama as ID
    let inputNumerosTotais = document.getElementById("input-1");
    let inputNumerosAcertos = document.getElementById("input-2");
    let calcularBtn = document.getElementById("btn");
    let exibeResultado = document.getElementById("exibe-resultado");
    let escolher = document.getElementById("checkbox");

    // Variáveis
    let formulaFatorial;
    let resultadoNumerosAcertos;
    let resultadoNumerosTotais;
    let resultadoFormulaFatorial;
    let resultado;
    let resultadoFormatado;
    let numerosAcertos;
    let numerosTotais;

    // Adiciona Eventos na Tela
    calcularBtn.addEventListener("click", calcular);

    // Calcula
    function calcular(){
        
        if(escolher.checked){
            combinacaoSimples();
        } else{
            combinacaoComposta();
        }

        // Faz o Calculo
        function combinacaoComposta() {
            resultadoNumerosAcertos = 1n;
            resultadoNumerosTotais = 1n;
            resultadoFormulaFatorial = 1n;

            numerosAcertos = Number.parseInt(inputNumerosAcertos.value);
            numerosTotais = Number.parseInt(inputNumerosTotais.value);
            formulaFatorial = numerosTotais - numerosAcertos;

            for (let i = 1; i <= numerosAcertos; i++) {
                resultadoNumerosAcertos *= BigInt(i);
            }

            for (let i = 1; i <= numerosTotais; i++) {
                resultadoNumerosTotais *= BigInt(i);
            }

            for (let i = 1; i <= formulaFatorial; i++) {
                resultadoFormulaFatorial *= BigInt(i);
            }

            resultado = resultadoNumerosTotais / (resultadoFormulaFatorial * resultadoNumerosAcertos);

            // Formata o resultado com separadores de milhares
            resultadoFormatado = resultado.toLocaleString();

            // Exibe o Resultado
            console.log("A Probabilidade de ganhar é: 1 em " + resultadoFormatado);
            exibeResultado.textContent = "A Probabilidade de ganhar é: 1 em " + resultadoFormatado;
        }

        function combinacaoSimples(){
            resultadoNumerosAcertos = 1n;
            resultadoNumerosTotais = 1n;
            resultadoFormulaFatorial = 1n;

            numerosAcertos = Number.parseInt(inputNumerosAcertos.value);
            numerosTotais = Number.parseInt(inputNumerosTotais.value);

            // Calcula o Resultado
            resultado = Math.pow(numerosTotais, numerosAcertos);
            resultadoFormatado = resultado.toLocaleString();

            // Exibe o Resultado
            exibeResultado.textContent = "A Probabilidade de ganhar é: 1 em " + resultadoFormatado;
        }

        // Inicia o Valor em 0
        inputNumerosTotais.value = 0;
        inputNumerosAcertos.value = 0;
    }
});
