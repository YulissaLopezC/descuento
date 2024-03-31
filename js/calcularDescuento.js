export const calcularDescuento = (valorCompra, numItems)=>{

    let valorDescuento = 0;

if((valorCompra >= 50000 && valorCompra <= 100000) || numItems === 2 ){
    //compra de 50.000 a 100.000 o 2 articulos = 10 %
    console.log("Descuento 10%");
    valorDescuento = valorCompra * 0.1;

}else if((valorCompra > 100000 && valorCompra <= 200000) || numItems === 3){
    //compra de + 100.000 a 200.000 o 3 articulos = 15%
    console.log("Descuento 15%");
    valorDescuento = valorCompra * 0.15;

}else if(valorCompra > 200000 || numItems > 3){
    //compra de + 200.000 o 5 + articulos = 20%
    console.log("Descuento 20%");
    valorDescuento = valorCompra * 0.20;
}

//devolver el valor del descuento 
return valorDescuento;
}