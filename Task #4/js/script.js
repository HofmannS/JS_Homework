// Переписал код с использованием объекта. В первый раз (не знаю как) при выполнении задания не обратил на него внимания.
let product = {
    title: "Customized bike",
    img: "https://avatars.mds.yandex.net/i?id=bcf239099f66e95017c5ea42b42859668ccd1a267175e79e-3910357-images-thumbs&n=13",
    count: 10,
    favorite: false
}

const btnFavorit = document.querySelector(".favorit")

let storedProduct = JSON.parse(localStorage.getItem("product")) || product;
btnFavorit.setAttribute("favorit", storedProduct.favorite ? "on" : "off");

btnFavorit.addEventListener("click", function () {
    let jsonFavorit = JSON.parse(localStorage.getItem("product")) || product;
    jsonFavorit.favorite = !jsonFavorit.favorite;
    btnFavorit.setAttribute("favorit", jsonFavorit.favorite ? "on" : "off");
    localStorage.setItem("product", JSON.stringify(jsonFavorit));
});

const btnMinus = document.querySelector(".minus")
const btnPlus = document.querySelector(".plus")
const quantityCounterElem = document.querySelector(".counter")

let quantityCounterValue = storedProduct.count || 0
 quantityCounterElem.innerText = quantityCounterValue

 btnMinus.addEventListener("click", function () {
    JSON.parse(localStorage.getItem("product")) || product;
    if (storedProduct.count > 0) {
        storedProduct.count--;
    }
    quantityCounterElem.innerText = storedProduct.count;
    localStorage.setItem("product", JSON.stringify(storedProduct));
});
btnPlus.addEventListener("click", function () {
    JSON.parse(localStorage.getItem("product")) || product;
    storedProduct.count++;
    quantityCounterElem.innerText = storedProduct.count;
    localStorage.setItem("product", JSON.stringify(storedProduct));
});
//-------------------------------------------------------------------------------
// Решил добавить возможность добавлять карточки продукта, но вот как сделать независимые кнопки и счетчики не придумал
const btnAddBikes = document.querySelector(".add-card")
const imageArray = ["https://avatars.mds.yandex.net/i?id=bcf239099f66e95017c5ea42b42859668ccd1a267175e79e-3910357-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=ebaa310a7e3414c1aba40ad298da969d3c867aa3-7749798-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=18badbf2da5b6d495807098a5c739432d168fe70-10448002-images-thumbs&n=13", "https://yandex-images.clstorage.net/bM97Z3f74/ca6949vPQ/AqkpIiRJtaNc3qChLi5wCDi2BGkb1PjikWJX5bVS1UKYb5hqhfiU121TVbGw0d57erL0UPpIHbvzSLLCkUqPjUegcCMUJcyfdNqgrRoKHCwkmiRoesCIOxHCwhlEu1HiEZ5hQ92Nndbw4zT4VDCasjoPNPULPKyTKxgvDwxbasiywWH6fNG8o1jeKUVOltCcjL-0ZRON3C_1zm4ZJE_RIjUeVffErcUq2BLweADIGnp2V-DpP_yEk-OQH0cE_xq43u0N0oC1sKuIGjFd7qKUQLw3-NVbTVgnrQ56GQwL-VKFGr2vSBGZ0rzOdMAE8JbSolcogf-cEJvzZBeXuCcCNKZBMW6YqdTDQN411XIa7HiYe9TJ152M21VKas00H8n6nfYxL8B14QaAMjhQoJzOAhZ3JB3nAKSXX8gb8xAjylweSYmmOJHEI3xuMYXmEpywBFNskW-x1JPhVt4dcMuhHlm2UfvAfcGOQMoQaFg8Nro2s3AxZ5jEu09Av4tkR8qIpjEVPgS9QHs4HiW9eurQVBRj3F0LEfyHxf4eRaSjKSKJ-j2vaJEFOmiGfLiIbKaK9r8IBVe46BPXjI_3HB_K-E7FKXqUIazHqBLVcZJ62EyMs1y1N11Yc0nKThnoq9WKqQ4ZuxgdQRpsvlz4_BgGgkprpPFnOOCbowCnu5hzboSeGW3CLB1IS9gWZaX-GpDwjPfYTW-9EHtdii455EeJ-ik2gQ9IhU0-JMok8OQIcn5Kc4yVU7zoz_NYPz8An2b4PlWxtngx6NM04mHJWqLUwGAHoM0vvdj7uZLuUbwDJSbp8sEX_FVBjqSKjMB0vBYCmnMEGRscsONjYGvPED9C3FoVTTLEEegP9JpNDXp26FQkt_zZN4ngi1lW-t3slwn6KZLJf4ThaSJY_hDAIJBySn5zBHlz5AS3y4QTr3iLenSiOXViSDWkP2TGLfHubswcZMvwMadFgJv1CgaB4D-4"];
function createCard(){
    let newCard = document.createElement("div")
    newCard.classList.add("product-card")
    newCard.innerHTML = `
    <div class="product-image">
        <img src="${imageArray[Math.round(Math.random() * 4)]}"
            alt="tuning bike">
    </div>
    <h3>Customized bike</h3>
    <button class="favorit" favorit="off">
        <i class="fa-solid fa-star"></i>
    </button>
    <div class="counter-container">
        <button class="minus badge">-</button>
        <p class="counter">0</p>
        <button class="plus badge">+</button>
    </div>
`;
    btnAddBikes.parentNode.insertBefore(newCard, btnAddBikes)
}
btnAddBikes.addEventListener("click", createCard)



