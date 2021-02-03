
function calculo(){
let entrada = document.getElementById('entrada').value
let potencia = 0;
var decimal =0;
   
var entradaArray = entrada.split("")

if (entrada === '') {
    document.getElementById('resultado').value = ''
    return alert('Por favor, digite um número binário')
};
 for(let i = entrada.length -1; i >= 0; i-- ){
        if (entradaArray[i] !== '0' && entradaArray[i] !== '1') {
            document.getElementById('resultado').value = ''
            return alert('Por favor, digite um número binário')
         };
    

     decimal += Math.pow(2, potencia) * entradaArray[i]

     potencia++
}
console.log(decimal)
document.getElementById('resultado').value = decimal
}