
let secaoProdutos = document.querySelector(".products-section")
let listaDeProdutos = document.querySelector("ul")

let categoriaHortifruti = document.querySelector(".fruits ul")
let categoriaHortifrutiBebidas = document.querySelector(".drinks ul")
let categoriaHortifrutiHigiene = document.querySelector(".hygiene ul")


function listarProdutos(listaProdutos, categoria, vitrine) {

    for (let i = 0; i < listaProdutos.length; i++) {

        let produto = listaProdutos[i]
        let categoriaProduto = produto.category

        if (categoriaProduto == categoria) {
            let cardProduto = criarCardProduto(produto)
            vitrine.appendChild(cardProduto)
        }
    }

}
listarProdutos(products, "Frutas", categoriaHortifruti)
listarProdutos(products, "Bebidas", categoriaHortifrutiBebidas)
listarProdutos(products, "Higiene", categoriaHortifrutiHigiene)


function criarCardProduto(produto) {

    let title = produto.title
    let price = produto.price
    let category = produto.category
    let image = produto.image

    let productCard = document.createElement("li")
    let productImg = document.createElement("img")
    let productMain = document.createElement("main")
    let productTitle = document.createElement("h1")
    let productCategory = document.createElement("h5")
    let productPrice = document.createElement("strong")

    productCard.classList.add("product")
    productImg.classList.add("product-img")
    productMain.classList.add("product-main")
    productTitle.classList.add("product-title")
    productCategory.classList.add("product-category")
    productPrice.classList.add("product-price")

    productImg.src = image
    productImg.alt = title
    productTitle.innerText = title
    productPrice.innerText = `R$ ${price}`.replace(".", ",")
    productCategory.innerText = category

    if (image == undefined) {
        productImg.src = `./img/products/no-img.svg`
    }

    productCard.appendChild(productImg)
    productCard.appendChild(productMain)
    productMain.appendChild(productTitle)
    productMain.appendChild(productCategory)
    productMain.appendChild(productPrice)

    return productCard
}