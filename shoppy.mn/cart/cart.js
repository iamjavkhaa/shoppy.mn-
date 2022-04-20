let cart;
const main = document.querySelector('main')
{/* <div class="buy">Худалдан авах</div> */}


function ifCartEmpty() {
    if(localStorage.cart === undefined || localStorage.cart === '[]') {
        main.replaceChildren('')
        main.insertAdjacentHTML('afterbegin', `
            <img style="width: 400px; height: 200px; margin-top: 169px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo65oxvrHRHp7nt-NIqHStL4G3nQ1qYPbUP81__WkpluiYwX3I3W_jmlJN6Uv4WYpYDw&usqp=CAU">
            <p style="text-align: center; font-size: 30px; margin-top: 40px; " > Таны сагс хоосон байна </p>
        `)
        main.style.boxShadow = 'none'
    }   
}


function productSync() {        

    if(localStorage.cart != undefined && localStorage.cart != '[]' ) {
        cart = JSON.parse(localStorage.cart);
    } else if(localStorage.cart === undefined || localStorage.cart === '[]') {
        cart = undefined;
    }

    if(cart) {
        let buyBtn = document.createElement('div');
        buyBtn.className = 'buy';
        buyBtn.innerText = 'Худалдан авах';

        cart.forEach( 
            (arg) => {
                let product = document.createElement('div');
                product.className = 'product';

                product.insertAdjacentHTML('afterbegin', 
                    `
                    <div class="product-img">
                        <img src="${arg.productImg}" alt="">
                    </div>
        
                    <div class="product-info">
                        <div class="product-info-in">
                            <h3>${arg.productName}</h3>
                            <p style="font-size: 15px; " >${arg.productDetail}</p>  
                            <p>Сонгосон тоо ширхэг: ${arg.count}</p>
                            <p class="colorRed" >${arg.productPrice}</p>
                        </div>
        
                        <div class="product-info-2">
                            <div class="remove-from-cart">Сагсаас хасах</div>
                            <input style="display: none" type="text" value="${arg.productId}">
                        </div>
                    </div>
                    `
                )

                main.appendChild(product)
            } 
        ) 

        main.appendChild(buyBtn)
    } 
    // else if(cart === undefined) {
    //     main.replaceChildren('')
    // }
    ifCartEmpty()
}





//            product сагсаас хасах function is down HERE
document.addEventListener('click', (a) => {
    if(a.target.className === 'remove-from-cart') {
        a.target.parentElement.parentElement.parentElement.remove()
        let selectedProductId = a.target.nextElementSibling.value;
        let cart = JSON.parse(localStorage.cart); 
        let cartUpdate = [];
        
        cart.forEach((par) => {
            if(selectedProductId != par.productId) {
                cartUpdate.push(par)
            }
            
            localStorage.cart = JSON.stringify(cartUpdate)
            console.log(cartUpdate)
        })
        ifCartEmpty()
    }
})




//               batalgaajuulah start

document.addEventListener('click', (a) => {
    if(a.target.id === 'batal') {
        a.target.parentElement.parentElement.parentElement.remove()
        let selectedProductId = a.target.nextElementSibling.value;
        let cart = JSON.parse(localStorage.cart); 
        let cartUpdate = [];

        cart.forEach((par) => {
            if(selectedProductId != par.productId) {
                cartUpdate.push(par)
            }
            
            localStorage.cart = JSON.stringify(cartUpdate)
        })
        // productSync()
        alert('Худалдан авалт амжилттай хийгдлээ!')
        location.reload()
    }
})


//               batalgaajuulah end



productSync()



// if(localStorage.cart === undefined || localStorage.cart === '[]') {
//     main.insertAdjacentHTML('afterbegin', `
//         <img style="width: 400px; height: 200px; margin-top: 169px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpo65oxvrHRHp7nt-NIqHStL4G3nQ1qYPbUP81__WkpluiYwX3I3W_jmlJN6Uv4WYpYDw&usqp=CAU">
//         <p style="text-align: center; font-size: 30px; margin-top: 40px; " > Таны сагс хоосон байна </p>
//     `)
//     main.style.boxShadow = 'none'
// }
