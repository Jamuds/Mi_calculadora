function calculo(){

    var numero1= document.getElementById ("numero1").value;
    var numero2= document.getElementById ("numero2").value;
    var numero3= document.getElementById ("numero3").value;
        
    if(numero1=="" || numero2=="" || numero3==""){
        alert("Revise que todos los campos estén llenos")
    } else{ 
        var max=mayor(numero1, numero2, numero3)
        if(max>0){
            var fact=factorial(max)

            alert('El factorial de '+ max+ ' es: '+fact)
        }
        else {
            alert("Por definición el factorial es únicamente para números positivos")
        }
        
    } 

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