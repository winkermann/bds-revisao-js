// São importantes para dividir o código de um projeto em módulos/componentes reaproveitáveis.
// Facilita a manutenção e o encapsulamento do código.


const sum = (num1, num2) => num1 + num2;

//uso interno, não será exportada
const exp = (base, exponent) => base ** exponent;

const round = (value, precision) => {
    let multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export { sum, round };
