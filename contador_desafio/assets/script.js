var CurrentNumbarWrapper = document.getElementById("currentNumber");
var currentNumber = 0

const adicao = document.getElementById('adicionar')

const subtracao = document.getElementById('subtrair')

adicao.addEventListener('click', function() {
    CurrentNumbarWrapper.innerHTML = ++currentNumber;
    if (currentNumber >= 10) {
        document.getElementById('adicionar').disabled = true;        
   
    }
})

subtracao.addEventListener('click', function() {   
    CurrentNumbarWrapper.innerHTML = --currentNumber;
    if (currentNumber <= 0) {
        document.getElementById('subtrair').disabled = true;    
    
    }
})