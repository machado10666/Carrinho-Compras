let totalGeral = 0; // Inicializa totalGeral como 0
limpar(); // Chama a função limpar para iniciar o carrinho vazio

function adicionar() {
    // recuperar valores nome, quantidade e valores
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1]); // Converte para número
    let quantidade = parseInt(document.getElementById('quantidade').value); // Converte para número

    // calcular preço e subtotal
    let preco = quantidade * valorUnitario;

    // adicionar os produtos no carrinho (mexer no HTML produtos no carrinho)
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
    </section>`;

    // atualizar o total da compra
    totalGeral += preco; // totalGeral permanece um número
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`; // Formata com separação de milhar
    document.getElementById('quantidade').value = 0; // Zera o campo de quantidade
}

function limpar() {
    totalGeral = 0; // Remove a palavra 'let' para referenciar a variável global
    document.getElementById('lista-produtos').innerHTML = ''; // Limpa a lista de produtos
    document.getElementById('valor-total').textContent = 'R$ 0'; // Reseta o total
}