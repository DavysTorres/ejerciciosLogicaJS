//problema 1

let form = document.querySelector("#problema1");
form.addEventListener("submit", function(evento){
    evento.preventDefault();
    let numero = evento.target.inputNumero.value;
    let resultado = 0;

    for(let x=1; x <= numero; x++){
        resultado += x
    }
    document.querySelector("#resultado1").innerHTML = resultado
})

//problema 2

let form1 = document.querySelector("#problema2");
form1.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let numero = evento.target.inputnumP.value;
    
    if(numero%2===0)
    {
        document.querySelector("#resultado2").innerHTML = "El numero es par"
    }else{
        document.querySelector("#resultado2").innerHTML = "El numero es impar"
    }
})

//problema 3

let form2 = document.querySelector("#problema3");
form2.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let edad = evento.target.inputPizzeria.value
    let genero = evento.target.inputPizzeriaG.value
    let mensaje = ""

    if (genero == "") {
        mensaje = "Por favor, completa el campo de género.";
    } else {
        if (edad <= 10) {
            mensaje += "Has ganado: **jugo** "
        } else if (edad >= 18 && genero == 'Mujer') {
            mensaje += "Has ganado: **cerveza** y **Porción de pizza Hawaiana** "
        } else if (edad >= 18 && genero == 'Hombre') {
                mensaje += "Has ganado: **cerveza** y **Porción de pizza de tres carnes** "
        }
        if (mensaje == "") {
        mensaje = "Desafortunadamente, **no recibes ningún premio** "
        }
    }
    document.querySelector("#resultado3").innerText = mensaje
});

//problema 4



//problema 5
let form4 = document.querySelector("#problema5");
form4.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let multiplicador = evento.target.inputMultiplicador.value
    let  total = ''

    for(let x=1; x <= 10; x++){
        tblaMultiplicar = multiplicador * x
        total += x + " x " + multiplicador + " = " + tblaMultiplicar + "<br>";

    }
    document.querySelector("#resultado5").innerHTML = total
})

//problema 6
let form5 = document.querySelector("#problema6");
form5.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let promedio = evento.target.inputPromedio.value;
    let matricula ;

    if (promedio < 3) {
        matricula = 1000000; // No se aplica descuento
      } else if (promedio >= 3 && promedio <= 4) {
        matricula = 1000000 - (1000000 * 0.05); // Se descuenta el 5%
      } else {
        matricula = 1000000 - (1000000 * 0.5); // Se descuenta el 50%
      }
    document.querySelector("#resultado6").innerHTML = `Valor de matrícula a pagar: $${matricula}`;

})