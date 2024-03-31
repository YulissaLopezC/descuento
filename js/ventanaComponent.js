export function ventana(valorDescuento, totalCompra, valorCompra){

    const newDiv = document.createElement("div");

    const elementos = [
        document.createElement("h2"),
        document.createElement("p"),
        document.createElement("p"),
        document.createElement("p")
    ]

    //acceder a los atributos de los elementos
    elementos[0].innerText = "Detalles del descuento";
    elementos[1].innerText = `Se descuento es del ${(valorDescuento * 100) / valorCompra}%`;
    elementos[2].innerText = `El valor del descuento es ${valorDescuento}`;
    elementos[3].innerText = `el valor con descuento es: ${totalCompra}`

    //juntar los elementos en el div
    elementos.forEach(function(elemento){
        newDiv.appendChild(elemento);
    });

    //retornar el div
    return newDiv;

}