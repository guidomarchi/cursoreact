
function calculaMetros(){
    const metros = parseInt(prompt("a cuantos metros queda su destino?"));

    if(metros <= 1000){
        document.write('el medio de trasporte recomendado es ir a pie');
    } else if(1000 < metros <= 10000){
        document.write('el medio de trasporte recomendado es ir en bicicleta');
    } else if(10000 < metros <= 30000){
        document.write('el medio de trasporte recomendado es ir en colectivo');
    } else if(30000 < metros <= 100000){
        document.write('el medio de trasporte recomendado es ir en auto');
    } else if( metros > 100000){
        document.write('el medio de trasporte recomendado es ir en avion');
    }
};