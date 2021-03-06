console.log("André");

/**

// EXEMPLOS DE VARIÁVEIS 

var nome1 = "André";
var nome2 = "Carol";
var idade = 39;
var idade2 = 32;
var frase = "O meu nome é André"


alert(nome + " tem " + idade + " anos.");

console.log("nome: " + nome1);
console.log("nome: " + nome2);
console.log("idade: " + idade);
console.log("idade: " + idade2);
soma = parseInt(idade) + parseInt(idade2);
console.log("A soma da idade de " + nome1 + " e de " + nome2 + " é igual a " + (soma));

console.log(idade / idade2);

var lista = ["maça", "pera", "laranja"];
lista.pop();
console.log(lista);


// 

var jogadores = [{nome: "Neymar", altura: "1.78", time: "PSG"}, 
                 {nome: "Pelé", altura: "1.80", time: "Santos"},
                 {nome: "Johny", altura: "1.69", time: "Palmeiras"}]; 
console.log(jogadores[2].nome + " - " + jogadores[2].altura);

// ==> CONDICIONAIS (if)

var idade = prompt("Informe a sua idade: ");
if (idade <= 18){
    alert("Você é menor de idade");
}else{
    alert("Você é maior de idade");
};

// ==> WHILE 

var count = 0;
while(count <= 10){
    console.log(count);
    count++;
}


var count;
for (count = 0; count <= 10; count++){
    console.log(count);
};

var d = new Date();
console.log(d.getFullYear());


// ==> EXEMPLOS DE FUNÇÕES - MANIPULANDO STRINGS

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão!", "Japão", "Austrália!"));

function botao(){
    document.getElementById("agradecimento").innerHTML = "Clique aqui agora para conhecer meu GitHub";
}
function redirecionar(){
    window.open("https://github.com/andreraboni");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar seu mouse!";
    //alert("Trocar texto");
}



// ==> EXEMPLOS DE CURRYING 

function soma(a, b){
    return a + b;
}

soma(2, 456);
soma(2, 2);
soma(2, 90);
soma(2, 44);
soma(2, 24);

function soma(a){
    return function(b){
        return a + b;
    }
}

const soma2 = soma(10);
 
console.log(soma2(2));
console.log(soma2(43));
console.log(soma2(43567));

// FIM DOS EXEMPLOS DE CURRYING 

 */