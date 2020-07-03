console.log('Hola mundo');
// Actividad uno
//Array de palabra Somos.
var arrays = [['s',1,2.5,false,'s'],
              [true,'o',"anillo",'o',65],
              ["sol",2.25,'m',5,false],
              [23,'o',"Leticia",'o',43.3],
              ['s',"mar",12,6.5,'s']];

console.log(arrays[0][0],arrays[1][1],arrays[2][2],arrays[3][3],arrays[4][4]);
console.log(arrays[0][4],arrays[1][3],arrays[2][2],arrays[3][1],arrays[4][0]);

// Actividad Dos    

var one = "casa";
var two = "casa de tres pisos";
var three = "Apartamento";

if (two.indexOf(one) ==0){
    console.log("La variable:", "one =",one, "esta dentro de la variables two =", two);

    if(three.indexOf(one) == 0){
        console.log(" Y La variable:", "one =",one, "esta dentro de la variables three =", three);
    }
} 

else if(three.indexOf(one) == 0){
    console.log("La variable:", "one =",one, "esta dentro de la variables three =", three);

}

else if(one.indexOf(two) == 0){
    console.log("La variable: two =",two, "esta dentro de la variables one =", one);

    if(three.indexOf(two) == 0){
        console.log(" Y La variable: two =",two, "esta dentro de la variables three =", three);
    }

}

if(three.indexOf(two) == 0){
    console.log(" Y La variable: two =",two, "esta dentro de la variables three =", three);
}


else if(one.indexOf(three) == 0){
    console.log("La variable:", "one =",three, "esta dentro de la variables three =",one);

    if(two.indexOf(three) == 0){
        console.log("Y la variable: three =",three, "esta dentro de la variables one =", two);
    
    }

}

else if(two.indexOf(three) == 0){
    console.log("La variable: three =",three, "esta dentro de la variables one =", two);

}

else{
    console.log("No hay mas variables dentro de otra variable");
    
}

// Actividad Tres -- Ciclos - random hasta 50 

function getRandom() {
    return Math.floor(Math.random() * 100);
}
var randomNumber = getRandom();
var cuenta = 0;
var cuentas = 0;
var cuentass = 0;
// con For
for (let i; randomNumber != 50 ; i++ ) {
        var randomNumber = getRandom();
        cuenta++
    }   
    
    console.log(" Con For Se ejecuto el ciclo",cuenta,"veces que sea igual a:", randomNumber);

// con do - while
do{
    var randomNumber = getRandom();
    cuentass ++;
    
}
while(randomNumber != 50);

console.log("Con Do Se ejecuto el ciclo",cuentass,"veces que sea igual a:", randomNumber);