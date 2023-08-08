/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre[0].toUpperCase() + nombre.slice(1);
   }
   
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   function invocarCallback(cb) {
   cb();
   }

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   cb(num1, num2);
   return cb();
   }

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var suma=0
   for (var i = 0; i < arrayOfNumbers.length; i++){
   suma += arrayOfNumbers[i];
   }
   cb(suma);
   }

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(function(elem){
   cb(elem)
   })
   }

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let nArray = [];
   array.map((elem) => {
   let result = cb(elem);
   nArray.push(result)
   })
   return nArray;
   }

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var a = arrayOfStrings.filter(elem => elem.charAt(0) == "a");
   return a;
   }
   
   /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
   
   module.exports = {
   
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
   };