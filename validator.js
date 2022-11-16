const validator = {
    isValid:  function (creditcardnumber) {
        
        let cardNumber = 0;
    
        let estado = false //la variable estado false se debe a que la primera posición es impar.
        for (let n = creditcardnumber.length - 1; n >= 0; n--) { //mayor o igual que 0 / n-- va disminuyendo una posición
            let numeroc = creditcardnumber.charAt(n); //extraer caracter de string creditcardnumber
            let numerod = parseInt(numeroc, 10); //numero entero 10/ si indice es mayor a 9

            if (estado && (numerod *= 2) > 9) { //&& operador binario, su resultado es true si solo dos valores son verdaderos/ multiplica el valor en el indice x2
                numerod -= 9;
            }

            cardNumber += numerod; //se suma digito a cardNumber
            estado = !estado;

        }

        return (cardNumber % 10) == 0;
    },

    maskify:  function (creditCardNumber) {
        let array = [];
        for(let i = 0; i<creditCardNumber.length; i++){
            if(i > 11){
                array.push(creditCardNumber[i]);
            }else {
                array.unshift("#");
            }
        }
        return array.join("");

    }
    
};

export default validator;