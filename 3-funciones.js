// Ejercicio 1: Crear una función que sume dos números
function sumar(a, b) {
    return a + b;
}
// Ejercicio 2: Crear una función que reste dos números
const restar = function(a, b) {
    return a - b;
};
// Ejercicio 3: Crear una función que multiplique dos números
const multiplicar = (a, b) => {
    return a * b;
};
// Ejercicio 4: Crear una función que calcule el factorial de un número
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
