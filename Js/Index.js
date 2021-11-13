function calculo(){

    var numero1= document.getElementById ("numero1").value;
    var numero2= document.getElementById ("numero2").value;
    var numero3= document.getElementById ("numero3").value;
        
    var max=mayor(numero1, numero2, numero3)
    var fact=factorial(max)

    alert('El factorial de '+ max+ ' es: '+fact)
    
}

function mayor(numero1, numero2, numero3){
    var aux
    if(numero1 > numero2) {
        aux=numero1
    } else{
        aux=numero2
    }

    if(aux < numero3) {
        aux=numero3
    }

    return aux
}

function factorial(n){
    result=n
    for(i = 1; i<n;i++){
        result=result*(n-i)
    }

    return result
}