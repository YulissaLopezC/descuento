//TODO
//Funcion calcular precio descuento
import { calcularDescuento } from "./calcularDescuento.js";
//funcion validar dato 
import { validarDato } from "./validarDato.js";
//funcion que devuelve un div
import { ventana } from "./ventanaComponent.js";
//funcion que reset los inputs
function resetInput(input){
    input.value = '';
}

//cargar todo el dom antes de usar
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (event) => {
    event.preventDefault();
    //inputs
    const inputValorCompra = document.getElementById("valorCompra");
    const inputNumItems = document.getElementById("numItems");
    //valores de los inputs
    const valorCompra = parseInt(document.getElementById("valorCompra").value);
    const numItems = parseInt(document.getElementById("numItems").value);

    if(validarDato(valorCompra) && validarDato(numItems)){
        let valorDescuento = calcularDescuento(valorCompra, numItems);
        console.log(`El valor del descuento es ${valorDescuento}`);  

        let totalCompra = valorCompra - valorDescuento;

        document.body.appendChild(ventana(valorDescuento, totalCompra, valorCompra));
    }else{
        console.log("Ingrese datos validos");
    }

    resetInput(inputValorCompra);
    resetInput(inputNumItems);

    

})

