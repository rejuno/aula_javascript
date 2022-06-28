/*var nome = "Renata Novais";
var idade = 21;
var frase = "Japão é o melhor time do mundo"
//a ordem das variaveis e de outros tipos é importante 
alert("Bem Vindo " + nome + "Voce tem " + idade + "anos");
alert(frase.replace("Japão", "Brasil"));


console.log(frase.replace("Japão", "Brasil"));//.replace() - muda uma frase de alguma string
console.log(frase.toLowerCase()); //.toLowerCase() - faz com que todas as letras fiquem minusculas
*/



//ARRAY E DICIONÁRIO
/*var lista = ["maça", "pera","laranja"];
lista.push("uva");//adiciona um elemento no final da lista 

    console.log(lista[1])//seleciona um item especifico da lista

    console.log(lista); 

    lista.pop(); //tira o ultimo elemento da lista 

    console.log(lista.length);//mostra o tamanho do array 

    console.log(lista.reverse()); //coloca os elementos de ordem contrario, o ultimo fica em primeiro e assim sucessivamente 

    console.log(lista.toString()); //coloca o array como uma string

    console.log(lista.toString()[0]); //imprime só a primeira letra da array 

    console.log(lista.join(" - ")); //faz com que a lista fique separada, quando escrita no modo string, com o caracter de sua escolha, exemplo: laranja - pera - maça 
*/





/*
    //DICIONARIO 
        var fruta = {nome: "maça", cor: "vermelha"}
        console.log(fruta);
        console.log(fruta.nome); //aparece o que deseja
        alert(fruta.cor); //aparece o que deseja





    //LISTA DE DICIONARIOS
        var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];//array de dicionario
        console.log(frutas);
        alert(frutas[1].nome);
        alert(frutas[1].cor);
  
 */       






//CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE 
    /*var idade = prompt("Qual é sua idade? ");
    if(idade >= 18){
            alert("maior de idade")
    } else {
        alert("menor de idade");
    }

    var count = 0; 
    while(count <= 5){
        console.log(count);
        count++;
    }
*/
        /*
            var count;
            for(count = 0; count <= 5; count++){
                alert(count);
            };
        */






//TRABALHANDO COM DATA COM JAVASCRIPT 
            /*
            var d = new Date(); //mostra a data atual
            alert(d); //mostra a data completa atual
            alert(d.getMonth()+1);//mostra apenas o mes, sempre colocar o +1 pois ele conta apartir do zero, e o +1 impedi isso
            alert(d.getMinutes()); // mostra os minutos 
            alert(d.getHours()); //Mostra a hora
            alert(d.getDay()); // mostra o dia 
            alert(d.getDay()); //pega o dia, porém para o pc que esta nas normas de pt-br 
            */
            


//DESENVOLVA PÁGINAS WEB COM JAVASCRIPT 
                //FUNÇOES
/* 
         function soma (n1, n2){
            return n1+n2;
         }   

        function setReplace(frase, nome, novo_nome){
            return frase.replace(nome, novo_nome);
        }

        function validaIdade(idade){
            var validar;
            if(idade >= 18){
                validar = true;
            } else{
                validar = false
            }
            return validar;
        }
        var idade = prompt("Qual sua idade? ")
        console.log(validaIdade(idade));

         alert(soma(5, 10));
         alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//MANIPULANDO ELEMENTOS DA PÁGINA 
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigada por Clicar!"; //ao clicar no botao aparece essa mensagem 
    
    //console.log(document.getElementById("agradecimento")); //aparece para o desenvolvedor se esta executando direito essa funcao 
    //alert("Obrigado por Clicar!")
}

function redirecionar(){
    window.open('https://github.com/rejuno'); //REDIRECIONA PARA OUTRA PAGINA
    window.location.href = 'https://github.com/rejuno';//REDIRECIONA PARA UMA OUTRA PAGINA SEM ABRIR UMA NOVA GUIA NO NAVEGADOR  
}
function trocar(elemento){ //entao colocar elemento para passar como parametro para assim saber diferenciar as funcoes que vao ser acionadas para cada id 
    elemento.innerHTML = "Obrigada por passar o mouse"; 
    //document.getElementById("mouseover").innerHTML = "Obrigada por passar o mouse"
    //alert("Trocar Texto");
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passa o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"; 

}
function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
