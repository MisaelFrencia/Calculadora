#Documentacion Calculadora

Calculadora para realizar operaciones basicas (suma, resta, multiplicacion, divición)

##Primeros Pasos

Cree un archivo *HTML*, un archivo *CSS* y uno *Javascrip*. 
En el archivo *HTML* escribi los link para referime a los archivos *CSS* y *Javascrip* para no sobrecagar la pagina de *HTML* y que sea un codigo ilegible.

##Codigo

###Estructura de la Calculadora

En *HTML* escribimos los datos y etiquetas que componen la calculadora, estos son:
---"input" para que el usuario introduzaca los números
---"select" que utilizamos para seleccionar la operación
---"button" para llamar a las funciones y nos devuelvan el resultado

###Funciones
En *Javascrip* creamos las funciones:

--- Funcion "validar" que nos ayuda a filtrar lo que introducimos en "input" y "select" que solo sean numeros validos

--- Funcion "calcular" que contiene las operaciones y lo que debe hacer en cada una

--- Función "funcionboton" que llama las dos funciones anteriores y nos devuelve un resultado o mensaje dependiendo de los datos introducidos.

###Estilo

En *CSS* le di estilo a la calculadora. Utilizamos diferentes colores, radios, margenes, etc para poder darle mas calidad y vision para el usuario.

##Errores

###Boton Reset
La idea de hacer que sea mas facil la interaccion, introduje un boton que reseteara y poder volver hacer otra cuenta. Esto evitaria que el usuario tenga que volver a cambiar la pagina. El problema es que no lograba hacer funcionar el boton. 
Finalmente, gracias la ayuda de un profesor, pude hacer que funcione con el siguiente codigo
```
function reset() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("operacion").value = "-Elegir Operación-"
    document.getElementById("resultado").innerHTML = "0"}
```
###Funcion Validar
Dentro de la funcion "validar" debia lograr, que si el usuario queria dividir por el numero cero ("0"), saliera un aviso de "operacion invalida". 
Pude escribirle de la siguiente manera:
```
else if (operacion = "divicion" && num2 === 0) {
        mensaje = "¡Error! operación invalida"}
```
pero la misma no salia porque no me tomaba el valor de la variable *operacion* causando que cada vez que se colocara el numero cero ("0") en la variable *num2*, independientemente de la operacion, diera "Error". Despues de analizar el codigo me di cuenta que la comparacion que estaba haciendo entre *operacion* y "divicion" utilizaba solo un signo igual ("="), pero debian ser tres (3) signos.
```
else if (operacion === "divicion" && num2 === 0) {
        mensaje = "¡Error! operación invalida"}
```
Hice la modificacion y funciono.

