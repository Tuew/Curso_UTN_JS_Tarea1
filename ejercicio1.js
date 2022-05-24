distacia=prompt('Ingrese la distacia que tiene que recorrer', '');

if(distacia <= 1000){
    document.write("Usted puede ir caminando a su destino")
}else if(distacia <= 10000){
    document.write("Usted debera ir en bicicleta a su destino")
}else if(distacia <= 30000){
    document.write("usted debera ir en colectivo a su destino")
}else if(distacia <= 100000){
    document.write("usted debera ir en auto a su destino")
}else if(distacia > 100000){
    document.write("usted debera ir en avion a su destino")
}else{
    document.write("ingrese una distacia correcta")
}