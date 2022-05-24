numeros=[25,55,67,15,23,76,44,10,43]

a = 0

for(var i = 0; i < numeros.length; i++){
    
    b = numeros[i]

    if(b > a){
        a = b
    }
}

console.log("el mayor es: " + a)