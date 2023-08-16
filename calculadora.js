// Funciones para traer valores desde HTML//
function traerValor(id) {
    return (document.getElementById(id).value);}
function traerOperario(id) {
    return document.getElementById(id).value;}

// Función para validar los datos ingresados //    
function validar() {
    let num1 = traerValor("numero1");
    let num2 = traerValor("numero2");
    let operacion = traerOperario("operacion");
    let mensaje;
    if (isNaN(num1) || isNaN(num2)) {
        mensaje = "¡Error! solo debe introducir numeros validos"}
    else if (operacion === "divicion" && num2 === 0) {
        mensaje = "¡Error! operación invalida"} 
    return mensaje;}

// Función que permite obtener los valores y dar un resultado según operacion elegida //    
function calcular() {
    let num1 = traerValor("numero1");
    let num2 = traerValor("numero2");
    let operacion = traerOperario("operacion");
    let resul = 0;
    switch (operacion) {
        case "suma":
            resul = num1 + num2
            break;
        case "resta":
            resul = num1 - num2
            break;
        case "multiplicacion":
            resul = num1 * num2
            break;
        case "divicion":
            resul = num1 / num2
            break;
        default:
            break;}
    document.getElementById("resultado").innerHTML = parseFloat(resul);}

// Función que el boton llama para poder obtener un resultado //    
function funcionBoton() {
    if (validar()){
        document.getElementById("resultado").innerHTML = validar()}
    else {calcular()}}

// Función para resetear el formulario //
function reset() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("operacion").value = "-Elegir Operación-"
    document.getElementById("resultado").innerHTML = "0"}