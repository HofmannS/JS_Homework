const mainBlock = document.querySelector('main')
let getProductById = async (product_id, callback) =>{
    let serchRes = await fetch(`https://dummyjson.com/products/${product_id}`)
    let data = await serchRes.json()
    if(data.id <= 0){
       console.log('Неверное значение ID продукта')
    }else{
        callback(data)
    }
}

getProductById(Math.ceil(Math.random() * 30), function (product){
    let sum = 0
    let array = product.reviews
    for (let i = 0; i < array.length; i++) {
        sum+= array[i].rating
    }
    let avg = (sum / array.length).toFixed(2)
    mainBlock.innerHTML = `
     <div class="product-container">
            <div class="product-card">
                <div class="img-box">
                    <img src=${product.thumbnail} alt="product">
                    <h3 class="title">${product.title}</h3>
                </div>
                <div class="description-box">
                    <p><b>Stock: </b>${product.stock}</p>
                    <p><b>Price: </b>${product.price}</p>
                    <p><b>Rating AVG: </b>${avg}</p>
                    <p><b>Category: </b>${product.category}</p>
                </div>
            </div>
        </div>`
})