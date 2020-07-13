/*---------- METODOS PARTE 1 ----------*/

/*------- Metodos String -------*/

/*------- charA -------*/

var cadena = "Metodos String en JavaScript";

var cadena1 = cadena.charAt(8);

document.write("Metodo chart: 8 es = ",cadena1);

/*-------indexOf -------*/

var cadena2 = cadena.indexOf("b");

 if ( cadena2 == -1 ){
     document.write("<br/>No se encuentra en cadena, el resultado es = ",cadena2);
 }

 /*-------lastIndexOf -------*/


var cadena3 = cadena.lastIndexOf("M");

    document.write("<br/>e esta en la posición = ",cadena3);

/*-------replace -------*/

var cadena4 = cadena.replace(cadena, "<br/>Bienvenido");
    
    document.write(cadena4);

/*------substring-------*/

var cadena5 = cadena.substring(2,13)

document.write("<br/>",cadena5);

/*------bold()------*/

var result = cadena.bold();

    document.write("<br/>",result);

/*------fontColor and fontsize------*/

var palabra = "ARRAYS";

var cadena6 = palabra.fontcolor("green").fontsize(35);

    document.write("<br/>",cadena6);

/*------- Metodos Array -------*/

/*------- pop-------*/

var animal = ["Camello","Caballo","Zebra"];
animal.pop();

document.write("<br/>",animal);

/*------- push-------*/

var color = ["purpura", "rosado", "morado"];
color.push("magenta");

document.write("<br/>",color);


/*------- shift-------*/

var color = ["purpura", "rosado", "morado"];
color.shift();

document.write("<br/>",color);

/*------- unshift-------*/

var fruta = ["manzana", "mango"];
fruta.unshift("durazno");

document.write("<br/>",fruta);

/*------- splice-------*/

var elifruta = fruta.splice(0,1);
document.write("<br/>",fruta);


