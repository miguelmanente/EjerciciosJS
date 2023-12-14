/* EJERCICIO 2c:
    Crear una variable de tipo string con al menos 10 caracteres
    y generar un nuevo string con los 3 último caracteres guardando 
    el resultado en una nueva variable (utilizar substring) */

    let cadena = "Estoy aprendiendo JavaScript";

    let ultimosTres = cadena.slice(25, 28);

    console.log(ultimosTres);