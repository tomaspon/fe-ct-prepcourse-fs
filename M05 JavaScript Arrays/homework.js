/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var listaDeCompras = [0, 1, 2, 3, 4];
   listaDeCompras[0] = "Tomate";
   listaDeCompras[2] = "Huevos";
   listaDeCompras[4] = "Lechuga";
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var ultimoElemento = [0]
   ultimoElemento = array[array.length -1]
   return ultimoElemento
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var listaDeCompras=[]
   listaDeCompras[0] ="T"
   listaDeCompras[3] ="L"
   listaDeCompras[5] ="B"
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray = []
   for (var i = 0; i < array.length; i++){
      nuevoArray.push(array[i] + 1)}
      return nuevoArray
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:  

   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)){
   return true}
   else {
      return false
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código
   var suma = 0
   for (i = 0; i < arrayOfNums.length; i++){
   suma = suma + arrayOfNums[i];
   }
   return suma 
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var promedio = 0
   for (var i = 0; i < resultadosTest.length; i++){
   promedio += resultadosTest[i];}
   return promedio/resultadosTest.length 
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   for (let i = 0; i < arrayOfNums.length; i++){
      if (arrayOfNums[i] > arrayOfNums[i + 1]){
      return arrayOfNums[i]
      }
   }
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
    if (arguments.length === 0){
    return 0;
   } else if (arguments.length === 1){
      return 1;
   } else {
      var producto = 1
      for (var i = 0; i < arguments.length; i++){
         producto *= arguments[i]
      }
      return producto
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 18){
      contador++;
    }
  }
  return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia == 1 || numeroDeDia == 7) {
      return 'Es fin de semana';
   } else return 'Es dia laboral';
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let array = num.toString();
   if (array[0] == 9){
   return true
}  else return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   const num = array[0]
   if (array.every (elem => elem == num)){
   return true
   }
   else return false  
}

function mesesDelAño(array) {

   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArray=[]
   for (i = 0; i < array.length; i++){
      if (array[i] == "Enero"){
         nuevoArray.push("Enero");

   }  if (array[i] == "Marzo"){
         nuevoArray.push("Marzo");

   }  if (array[i] == "Noviembre"){
         nuevoArray.push("Noviembre")
   }
}
   for (i = 0; i < nuevoArray.length; i++){
      if (!nuevoArray.includes("Enero", "Marzo", "Noviembre"))
      return "No se encontraron los meses pedidos"
   }
return nuevoArray
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var resultados = []
   for (var i = 0; i <= 10; i++){
   resultados.push(6*i)}
   return resultados
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let resultado = array.filter(num => num > 100)
   return resultado
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let resultados = [];
   let sum = num;
   for (i = 0; i < 10; i++) {
      sum += 2;
      resultados.push(sum)
    if (sum === i){
      return "Se interrumpió la ejecución"
      break;
    }
   }
      return resultados
}


function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let resultados = [];
   let sum = num;
   for (i = 0; i < 10; i++){
      if (i === 5){
         continue;
      }  sum += 2;
         resultados.push(sum)
      }
      return resultados
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
