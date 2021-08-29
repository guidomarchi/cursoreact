function mayorArray () {
    var array = new Array(n);
    var max = 0;

    var n = parseInt(prompt('cuantos numeros va a contener su array?'))

    for(let i = 0; i < n; i++){
        array[i] = parseInt(prompt('ingrese un numero de su array'))
    }

    for(let j = 0; j < n; j++){
        if(array[j] > max){
            max = array[j];
        }
    }

    /*return max;*/

    document.write(`el ${max} es el mayor numero de su array`)
};