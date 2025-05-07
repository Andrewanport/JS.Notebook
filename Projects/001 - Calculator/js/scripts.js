let i = "S";

while (i === "S") {
    let n1 = parseFloat(prompt("Digite um número (1): "));
    let n2 = parseFloat(prompt("Digite um número (2): "));

    const soma = n1 + n2;
    const sub = n1 - n2;
    const multi = n1 * n2;
    const div = n2 !== 0 ? (n1 / n2) : "Erro: divisão por zero";
    const expo = n1 ** n2;

    let op = parseInt(prompt(
        "Selecione uma opção:" +
        "\n [1] - Soma" +
        "\n [2] - Subtração" +
        "\n [3] - Multiplicação" +
        "\n [4] - Divisão" +
        "\n [5] - Exponenciação"
    ));

    switch (op) {
        case 1:
            alert("O resultado da soma é: " + soma);
            break;
        case 2:
            alert("O resultado da subtração é: " + sub);
            break;
        case 3:
            alert("O resultado da multiplicação é: " + multi);
            break;
        case 4:
            alert("O resultado da divisão é: " + div);
            break;
        case 5:
            alert("O resultado da exponenciação é: " + expo);
            break;
        default:
            alert("Opção inválida!");
    }

    i = prompt("Deseja continuar? [S/N]: ").toUpperCase();
}

alert("Programa encerrado!")


