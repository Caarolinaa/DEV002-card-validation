const validator = {
    isValid: function (creditcardnumber) {

        let cardNumber = 0;
        let creditCardNumberArray = [], reverse = [];
        creditCardNumberArray = creditcardnumber.split("");
        reverse = creditCardNumberArray.reverse();
        let estado = false //la variable estado false se debe a que la primera posición es impar.
        for (let i = 0; i < reverse.length; i++) { //mayor o igual que 0 / n-- va disminuyendo una posición
            let numeroc = reverse[i]; //extraer caracter de string creditcardnumber
            let numerod = parseInt(numeroc, 10); //numero entero 10/ si indice es mayor a 9

            if (estado && (numerod *= 2) > 9) { //&& operador binario, su resultado es true si solo dos valores son verdaderos/ multiplica el valor en el indice x2
                numerod -= 9;
            }

            cardNumber += numerod; //se suma digito a cardNumber
            estado = !estado;

        }

        return (cardNumber % 10) == 0;



    },

    maskify: function (creditCardNumber) {
        creditCardNumber = creditCardNumber.split("");
        for (let i = 0; i < creditCardNumber.length - 4; i++) {
            creditCardNumber[i] = "#";
        }
        creditCardNumber = creditCardNumber.join("");
        return creditCardNumber;

    }

};

export default validator;