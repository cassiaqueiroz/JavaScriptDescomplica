const shoppingCart = [];

//Adicionando item com Push

function addItemToCart(item) {
  shoppingCart.push(item);
}

//Verificando se existe o item com indexOf
function removeItemFromCart(item) {
  const index = shoppingCart.indexOf(item);
  //index -1 não existe, então significaria que não existe item no carrinho
  if (index !== -1) {
    //Removendo o item com Splice
    //O argumento 1 aqui significa que apenas 1 elemento será removido
    shoppingCart.splice(index, 1);
  }
}

//Vizualizando o conteúdo do carrinho com Length
function viewCart() {
  if (shoppingCart.length == 0) {
    console.log("Your shopping cart is empty.");
  } else {
    console.log("Items in your shopping cart: ");
    for (let i = 0; i < shoppingCart.length; i++) {
      //Exibe o número do item e o nome do produto no carrinho
      console.log(`${i + 1} - ${shoppingCart[i]}`);
    }
  }
}

//Função para limpar o carrinho:
function clearCart() {
  //Removendo os itens com a definição do tamanho do array = 0
  shoppingCart.length = 0;
  console.log("Your shopping cart has been cleared.");
}

//Adicionando itens no carrinho:
addItemToCart("Blusa");
addItemToCart("Short");
addItemToCart("Calça");
addItemToCart("Macacão");

//Solicitando que o programa "visualize" o que existe no carrinho:
viewCart();

//Removendo 1 item:
removeItemFromCart("Calça");
viewCart();

//Limpando o carrinho:
clearCart();
viewCart();
