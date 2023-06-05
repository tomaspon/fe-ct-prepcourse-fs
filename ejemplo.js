
function incrementarPorUno(array)
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:
    {
        array.forEach((num, index) => {
          array[index] = num + 1;
        });
        return array;
      }