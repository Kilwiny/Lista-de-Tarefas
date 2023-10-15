const input = document.getElementById("elemento")
const listaDeItens = document.getElementById("conteiner-lista")
var itemName=''
var itens =1 //contador de itens
var spanItem = `<span id='conteiner-vazio'>nenhum item adicionado</span>`

listaDeItens.innerHTML = spanItem

window.onload()
//estrutura básica de lista
function adicionarItem(){
     //deixa o item que indica que a lista está vazia invisível
     verificarListaVazia()
    //vai ser criado uma div para cara item adicionado
    itemName = `
    <div id='${itens}'>
        <div class='item-lista'>${input.value}</div>
        <button onclick="removerItem(${itens})">Remover</button>
    </div>
    `

    listaDeItens.innerHTML+=itemName
    console.log(itens)
    itens++
}


function removerItem(index) {
    console.log(index)
    document.getElementById(index).remove()
    itens --
}


function verificarListaVazia(){
    if(itens>=1){
        document.getElementById('conteiner-vazio').style.display = 'none'
    }else{
        listaDeItens.innerHTML = spanItem
    }
}