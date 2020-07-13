
/*---------- METODOS PARTE 2 ----------*/

/*------- Implementación Some -------*/

var animal = ["leon", "tigre", "gato", "puma"];

function anicasa(arr, val){
    return arr.some(arrVal => val === arrVal);
}

if (anicasa(animal,"leon") == 1){
    document.write("El leon se encuentra en el zoologico");
}
/*------- Implementación Map -------*/

var numeros = [1,2,3,4,5,6,7,8,9,10];
var tablamul2 = numeros.map(multiplicar)

function multiplicar(num){
    return num * 2;
}
document.write("</br></br>Tabla del 2 </br>");
document.write(tablamul2);