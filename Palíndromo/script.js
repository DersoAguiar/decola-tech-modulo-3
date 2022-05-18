// solução 1
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";
    // percorre metade da string pq cada looping verifica 2 elementos, por isso string.length / 2
    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
        return false;

        }
    }
    return true;
}

console.log(verificaPalindromo2("gato"))