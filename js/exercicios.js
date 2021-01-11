function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(10);
 
console.log(soma2(2));
console.log(soma2(43));
console.log(soma2(43567));

console.log("Deu certo, caraio!");
