var num1 = prompt("Ingrese primer número");
var num2 = prompt("Ingrese segundo número");
operacion = prompt("Ingrese operación a realizar");

switch (operacion) {
    case "+": 
        resultado = parseInt(num1) + parseInt(num2);
        document.write("El resultado es: " + resultado);
        break;
    case "-": 
        resultado = parseInt(num1) - parseInt(num2);
        document.write("El resultado es: " + resultado);
        break;
    case "*": 
        resultado = parseInt(num1) * parseInt(num2);
        document.write("El resultado es: " + resultado);
        break;
    case "/": 
        resultado = parseInt(num1) / parseInt(num2);
        document.write("El resultado es: " + resultado);
        break;
    default: document.write("Operación no reconocida")
        break;
}