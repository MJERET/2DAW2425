/* Mariano José Eret Torres*/
"use strict"; //Con esto obligamos a que todas las variables que escribamos tengan que ser declaradas, sino saltara fallo en nuestra consola y en nuestro programa

/*
    - Alcance de variables
    - Estructuras de control: if, switch, for, for-in, for-of, while, do-while, break, continue
    - Funciones (declaración o expresión. Constructor)
    - Funciones anónimas (expresión...) , callback
    - Parámetros y argumentos
    - Argumentos por exceso ( arguments()) y por defecto (NaN) 
    - Funciones flecha
*/

// ------------------ Alcance de las variables -------------------
/*Las variables pueden ser de alcance global o de alcance*/
var numero = 5;     
    // var: Usaremos var para declarar variables de distinto tipo, ya sea number, String, etc.
    // Tiene un alcance global si se declara fuera de una función, o de función si se declara dentro de una.
    // Puede ser redeclarada y reasignada.

let numero2 = 5;    
    // let: Usaremos let para declarar variables cuando no necesitamos que su valor sea constante.
    // Tiene un alcance de bloque, lo que significa que solo es accesible dentro del bloque donde se declara.
    // Puede ser reasignada, pero no redeclarada en el mismo ámbito.

const numero3 = 5;  
    // const: Es una variable la cual no puede variar su valor, tiene que ser constante.
    // Tiene un alcance de bloque, similar a let.
    // No puede ser reasignada ni redeclarada en el mismo ámbito.
    // Aunque el valor no puede cambiar, si es un objeto o array, sus propiedades o elementos pueden ser modificados.

/* Las variables pueden ser de tipo global o no, es decir, que tienen un alcance dentro de nuestro código un alcance que limita desde donde las podemos llamar. */
// declaramos una función:
    function rango() {
        //declaramos una función:
        var saludo ="Hola!";
    }
    // console.log(saludo); este saludo dara error gracias a que para llamarlo tenemos que hacerlo mediante la function, es decir, no podemos porque solo está declarada dentro de la función.
    //Para que esto sea así tenemos que colocar dentro de la function un valor que devuelva es decir:
    function rango2() {
        var saludo="HOLA!"
        return saludo;
    }
    console.log(rango2()); //Con esto obtendremos HOLA dentro de la consola de nuestro navegador.

    /*IMPORTANTE PODEMO HACER QUE JS TENGA LA OBLIGACIÓN DE DECLARAR SIEMPRE LAS VARIABLES, YA QUE NO ESTAMOS OBLIGADOS A PONER EL TIPO NI DECLARARLAS CON VAR, LET NI CONST
      Para ello haremos uso del use strict con el fin de siempre tener que poner el tipo de variable correspondiente.*/

// ------------------ Estructuras de control. -------------------
/*for in for of for each.*/

/*funciones por declaración y por expresion. Una funcion callback */
/*funciones flecha y arguments. */