const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operacion");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", calcular)

function calcular() {

    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if ((operacion == "+" || operacion == "-" || operacion == "*" ||
     operacion == "/" || operacion == "%"  || operacion == "**")&& !isNaN(op1) &&!isNaN(op2) && !isNaN(op1)) {
        
        let resultado ;
        switch (operacion) {
            case "+":
                resultado = op1 + op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
            case "*":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
            case "%":
                resultado = op1 % op2;
                break;
            case "**":
                resultado = op1 ** op2;
                break;
            default:
                pResultado.innerText = "Calculo imposible";
                break;            
            }
            pResultado.innerText = " = " + resultado;
    }
    else{
        pResultado.innerText = "Calculo imposible";
    }
   // alert("apretaste el boton calcular")
}