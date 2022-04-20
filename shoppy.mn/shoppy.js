let sagsandNemeh;
const uzehBtn = document.querySelector('#uzeh')
let cart;
// let productId = sagsandNemeh.parentElement.parentElement.firstElementChild.value;
let count;
let chosenProductName;
let chosenProductPrice;


//         uzeh   function is down HERE   !!!!

document.addEventListener('click' , (a) => {
    if(a.target.id === 'uzeh') {
    let productName = a.target.parentElement.firstElementChild.innerText
    let productDetail = a.target.previousElementSibling.previousElementSibling.innerText
    let productId = a.target.parentElement.parentElement.firstElementChild.value
    let productPrice = a.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerText
    let productImg = a.target.parentElement.previousElementSibling.firstElementChild.src.toString()
    productAguulah = a.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText
    console.log(productDetail)
    document.querySelector('.fixed-parent').style.display = 'flex';

    document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin' , `
    <div class="fixed-header">
        <a style="color: white" href="/shoppy.html">Shoppy.mn</a>  
        <a style="color: white" href="./cart/cart.html">
            <i onmouseover="showFixedCart()" onmouseleave="hideFixedCart()" class="fa-solid fa-cart-arrow-down">
                <div id="fixed-cart" class="cart"></div>
            </i>
        </a>
    </div>
    <div class="cont">
        <input type="text" value="${productId}" >
        <div class="left">
            <img src="${productImg}" alt="">
        </div>

        <div class="right">
            <div class='flex-end' >
                <i onclick="cancelUzeh()" class="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
            <h2>${productName}</h2>
            <p>${productDetail}</p>
            <h5>Агуулах: ${productAguulah}</h5>
            <br>
            <br>
            <p>Онлайн авах үнэ: </p>
            <p class="colorRed" >${productPrice}</p>
            <br>
            <br>
            <button class="sags-buttons" id="add-to-cart" >сагсанд нэмэх</button>
            <a href="./cart/cart.html" > <button  style="margin-left: 10px;" class="sags-buttons" >Сагс</button> </a> 
            <br>
            <br>
            <br>
            <div class="setCount">
                <div onclick="minusCount()" class="minus">-</div>
                <div class="count">1</div>
                <div onclick="addCount()" class="plus">+</div>
            </div>
        </div>
    </div>
    `)

    
    // document.getElementsByClassName('grid-item').style.hoverEffect = 'none'
    }
})

//         uzeh   function is up THERE !!!!



// function uzeh() {
//     // document.querySelector('.fixed-parent').style.display = 'flex';

//     document.querySelector('.fixed-parent').insertAdjacentHTML('afterbegin' , `
//     <div class="fixed-header">
//         Shoppy.mn
//         <i onmouseover="showFixedCart()" onmouseleave="hideFixedCart()" class="fa-solid fa-cart-arrow-down">
//             <div id="fixed-cart" class="cart"></div>
//         </i>
//     </div>
//     <div class="cont">
//         <input type="text" value="9086772064522102" >
//         <div class="left">
//             <img src="https://cdn3.shoppy.mn/spree/images/1307725/product/open-uri20220415-1859205-ouc9lb." alt="">
//         </div>

//         <div class="right">
//             <i onclick="cancelUzeh()" class="fa-solid fa-arrow-right-from-bracket"></i>
//             <h2>TRAVEL KIT PACK M999999</h2>
//             <p>Урт оосортой жижиг цүнх</p>
//             <br>
//             <br>
//             <p>Онлайн авах үнэ</p>
//             <p>99,000 ₮</p>
//             <br>
//             <br>
//             <button id="add-to-cart" >сагсанд нэмэх</button>
//             <button>худалдан авах</button>
//             <div class="setCount">
//                 <div onclick="minusCount()" class="minus">-</div>
//                 <div class="count">1</div>
//                 <div onclick="addCount()" class="plus">+</div>
//             </div>
//         </div>
//     </div>
//     `)
// }
function cancelUzeh() {
    document.querySelector('.fixed-parent').replaceChildren('')
    document.querySelector('.fixed-parent').style.display = 'none'
}


// --------------------------------------------------------------------------------------------


if(localStorage.cart === undefined || localStorage.cart === '[]') {
    cart = []
} else {
    cart = JSON.parse(localStorage.cart) 
}

//             addToCart function is down here  __>

document.addEventListener('click', (par) => {
    if(par.target.id === 'add-to-cart') {
        let ifAlreadyAdded = '';
        sagsandNemeh = document.querySelector('#add-to-cart')
        count = document.querySelector('.count')
        let productId = sagsandNemeh.parentElement.parentElement.firstElementChild.value;


        cart.forEach((arg) => {
            if(arg.productId == productId) {
                ifAlreadyAdded = 'already added'
            } 
        })
        
        if(ifAlreadyAdded === '') {
            let chosenProductImgSrc;
            chosenProductImgSrc = par.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.src.toString()
            chosenProductPrice = par.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText;
            console.log(par.target.parentElement.firstElementChild.nextElementSibling)
            chosenProductName = par.target.parentElement.firstElementChild.nextElementSibling.innerText;
            let productDetail = par.target.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText
            cart.push({productId: productId, count: count.innerText, productName: chosenProductName, productPrice: chosenProductPrice, productImg: chosenProductImgSrc, productDetail: productDetail})
        } else {
            alert('Сагсанд байгаа бүтээгдэхүүн')
        }
        localStorage.cart = JSON.stringify(cart)
        ifAlreadyAdded = '';
    }
})

//             addToCart function is up here  -->


function addCount() {
    let too = parseInt(document.querySelector('.count').innerText)
    too += 1;
    document.querySelector('.count').innerText = too; 
}


function minusCount() {
    let too = parseInt(document.querySelector('.count').innerText)
    if(too > 1) {
        too -= 1;
    }
    document.querySelector('.count').innerText = too; 
}





function showCart() {
    document.querySelector('.cart').style.display = 'flex';
    if(localStorage.cart != undefined) {
        JSON.parse(localStorage.cart).forEach(
            (arg) => {
                console.log(arg)
                document.querySelector('.cart').insertAdjacentHTML('afterbegin' , `
                    <div class="singleProduct"> 
                        <div class="singleProductLeft">
                            <img src="${arg.productImg}" alt="">
                        </div>
    
                        <div class="singleProductMain">
                            <h6>${arg.productName}</h6>
                            <div class="singleProductMainPCont">
                                <p>${arg.productPrice}</p>
                                <p>тоо ширхэг:  ${arg.count}</p>
                            </div>
                        </div>
    
                        <div class="singleProductLeft">
                            <i class="fa-solid fa-x"></i>
                        </div>
                    </div>
                `)
            }
        )
    }
}

function showFixedCart() {
    document.querySelector('#fixed-cart').style.display = 'flex';
    JSON.parse(localStorage.cart).forEach(
        (arg) => {
            console.log(arg)
            document.querySelector('#fixed-cart').insertAdjacentHTML('afterbegin' , `
                <div class="singleProduct"> 
                    <div class="singleProductLeft">
                        <img src="${arg.productImg}" alt="">
                    </div>

                    <div class="singleProductMain">
                        <h6>${arg.productName}</h6>
                        <div class="singleProductMainPCont">
                            <p>${arg.productPrice}</p>
                            <p>тоо ширхэг:  ${arg.count}</p>
                        </div>
                    </div>

                    <div class="singleProductLeft">
                        <i class="fa-solid fa-x"></i>
                    </div>
                </div>
            `)
        }
    )
}

function hideCart() {
    document.querySelector('.cart').replaceChildren('')
    document.querySelector('.cart').style.display = 'none'
}


function hideFixedCart() {
    document.querySelector('#fixed-cart').replaceChildren('')
    document.querySelector('#fixed-cart').style.display = 'none'
}