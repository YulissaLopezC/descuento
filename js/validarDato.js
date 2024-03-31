export function validarDato(item){
    let isValid;
    
    if(isNaN(item)){
        //si es un caracter
        isValid = false; 
    }else if(item < 0){
        // si es negativo
        isValid = false; 
    }else{
        // si es un numero
        isValid = true;
    }

    return isValid;
    
    
}