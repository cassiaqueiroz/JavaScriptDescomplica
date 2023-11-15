const listaEstilo = document.querySelectorAll(".estilo");
for(let i = 0; i < listaEstilo.length; i++){
    listaEstilo[i].style.backgroundColor = "rgb(231, 250, 202)";
    listaEstilo[i].style.color = "rgb(28, 30, 30)";
    listaEstilo[i].innerText =  listaEstilo[i].innerText.toUpperCase();
}

//CRIANDO ELEMENTOS DINAMICAMENTE

var elemento = document.createElement("div");
elemento.innerText = "Texto incluído na div criada por JS."
elemento.style.backgroundColor = "lavender";
//Incluindo o elemento dentro do body usando a função append
document.body.append(elemento);

var lista = document.getElementById("lista");
var li = document.createElement("li");
//Para adicionar texto no li, usando "textContent"
li.textContent = "Quem Somos";
//Adicionando elemento filho de "lista"
lista.appendChild(li);

arrayBandas = ["El Kanka", "Blanca la Almendrita", "Judit Neddermann", "Kelly Clarkson", "Alicia Keys"];  
//Seleção do Elemento ul com a Classe "bandas"var 
listaBandas = document.querySelector("ul.bandas");
//Loop para criar um li para cada Banda:
for (var i = 0; i< arrayBandas.length; i++) {
    //Guardando cada nome de banda do array na variável "banda":
    var banda = arrayBandas[i];
    var listItem = document.createElement("li");
    listItem.innerText = banda;
    listItem.style.border = "1px dashed mediumpurple";
    //Adicionando cada li dentro da ul, que por sua vez está aqui representada pela var listaBandas
    listaBandas.appendChild(listItem);
}

//EVENTOS: Interações do usuário com o dispositivo (fechar uma janela, clicar num botão...) são tratadas como EVENTOS no JS 
function exemploEvento(){
    alert("É isso aí, parabéns!");    
}

function mousePorCima() {
    document.getElementById("passandoMouse").innerHTML = "Evento com mouse over";
}

function tirandoMouse() {
    document.getElementById("passandoMouse").innerHTML = "Evento com mouse out";
}


function novoItem() {
    var camponome = document.getElementById("email");
    alert("O email digitado foi: " + camponome.value + ".");
}
*/

function validarForm() {
    //Outra forma de selecionar um elemento, só que sem usar getElement
    var nomePessoa = document.forms["formCadastro"]["nome"].value;
    if(nomePessoa == ""){
        alert("Favor informar um nome.");
        //Para manter o usuário na mesma página depois de submeter o form sem nome:
        event.preventDefault();
    }else{
        alert("Olá, " + nomePessoa + "!");
        event.preventDefault();
    }
}