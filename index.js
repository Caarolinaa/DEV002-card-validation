import validator from './validator.js';

//Obtener numero y mostrar si es valido o no.
    let botonValidar = document.getElementById("idbotonvalidar");
    botonValidar.addEventListener("click", function(){
        let cr = document.getElementById("idnumberCreditCard").value;
        if(cr == ""){
            alert("Debe ingresar número de tarjeta")
            return;
        }

        let cardNumber = validator.isValid(cr);
        if (cardNumber == true){
            //no es valido.
            alert("Excelente! Su tarjeta es válida");
        }
        else { 
            //valido. mostrar un mensaje
            alert("Su tarjeta es inválida");
        }

    })

    let Clonarnumero = document.getElementById("idnumberCreditCard");
    Clonarnumero.addEventListener("keyup", function(){ //función copia el valor del input al label
        let txt = document.getElementById("idnumberCreditCard").value; //declarar variable contenga valor del texto al ingresar numero
        let mask = validator.maskify(txt); //borrar algo
        document.getElementById("numerotarjetaimg").innerHTML = mask; //asignar a etiqueta el valor
         
      
       
    })



console.log(validator);

