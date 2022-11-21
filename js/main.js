let datos = [];

function contac(contactoform) {
    const { nombre, mail, telefono, mensaje } = contactoform;
    let dato = { nombre: nombre.value, mail: mail.value, telefono: telefono.value, mensaje: mensaje.value };
    datos.push(dato);

    console.log(datos);
    contactoform.reset();
    alert('Mensaje Enviado!');
}


//calcular imc
function calcimc(calculadora) {
    let kilos = 0;
    let centiM = 0;

    centiM = parseInt(document.getElementById("centiM").value);
    kilos = parseInt(document.getElementById("kilo").value);
    console.log(`Altura: ${centiM}`);
    console.log(`Peso: ${kilos}`);
    centiM = centiM / 100;

    let calculo = (kilos / Math.pow(centiM, 2)).toFixed(1);
    if (calculo <= 16) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Desnutrición Sever</span>a</h3>";
    }
    else if (calculo <=18,4) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Desnutrición Moderada</span></h3>";
    }
    else if (calculo <= 22) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Bajo peso</span></h3>";
    }
    else if(calculo <= 24,9){
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'></span>Peso normal</h3>";
    }
    else if (calculo <= 29,9) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Sobrepeso</span></h3>";
    }
    else if (calculo <= 34,9) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Obesidad tipo 1</span></h3>";
    }
    else if (calculo <= 39, 9) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Obesidad tipo 2</span></h3>";
    }
    else if (calculo >= 40) {
        document.getElementById('resultado').innerHTML = "<h3> Tu IMC es de " + calculo + "</br> <span style='color: #007bff;'>Obesidad tipo 3</span></h3>";
    }
    console.log(`IMC: ${calculo}`);
    calculadora.reset();
}

// rango altura
$(document).ready(function () {
    $('#centiM').change(function () {
        $('#rcentiM').val($(this).val() + ' centimetros');
    });
});
// rango peso
$(document).ready(function () {
    $('#kilo').change(function () {
        $('#rkilo').val($(this).val() + ' kilos');
    });
});