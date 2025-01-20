/*
    script.js
    En este js haremos lo siguiente:
    2.2 Para hacer este ejercicio descárgate el archivo “index-pruebas-dom.html” y ábrela en tu 
    navegador. Obtén por consola, al menos de 2 formas diferentes(en caso de existir varias alternativas):
        • El elemento con id ‘input2’ 
        • La colección de párrafos 
        • Lo mismo pero sólo de los párrafos que hay dentro del div ‘lipsum’ 
        • El formulario (ojo, no la colección con el formulario sino sólo el formulario) 
        • Todos los inputs 
        • Sólo los inputs con nombre ‘sexo’ 
        • Los items de lista de la clase ‘important’ (sólo los LI)
*/

/*Obtener los elementos con input2*/
    window.onload=inicio;
    function inicio() {
        document.getElementById("button3").addEventListener("click", ejercicio2);
    }
    
    function ejercicio2(){
        //Buscamos todos los elementos id=input2
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Mostrar los input2");
        var accion = document.getElementById("input2"); console.log(accion);
        console.log(document.getElementById("input2"));
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Colección de parrafos")
        var parrafos = document.getElementsByTagName("p"); console.log(parrafos);
        console.log(document.getElementsByTagName("p"));
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Mostrar lo que hay dentro del div 'lipsum'")
        var lipsum = document.getElementById("lipsum").innerHTML; 
        console.log(lipsum);
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Mostrar el formulario");
        var formulario = document.querySelector("form");
        console.log(formulario);
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("Mostrar los inputs");
        var dataje = document.querySelectorAll("input");
        console.log(dataje);
        dataje.forEach(input => console.log(input));
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("solo los inputs con nombre sexo")
        var sexo = document.querySelectorAll("input[name='sexo']");
        console.log(sexo);
        sexo.forEach(input => console.log(input));
        console.log("!-!-!-!-!-!-!-!-!-!-!-!");
        console.log("solo los important pero solo los li");
        var li = document.querySelectorAll("li.important");
        console.log(li);
        li.forEach(item => console.log(item));
    }   

