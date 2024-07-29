// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

function updateCartCount(){
    let contadorProductos= 0
    for (let i = 0; i < cart.length; i++) {
        contadorProductos += cart[i].quantity
    }
    document.getElementById("count_product").innerHTML = contadorProductos
}

function buy(id) {
    console.log(id)
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        let productoEncontrado = products[i]
        if (productoEncontrado.id === id) {
            let ProductoCarrito = false;

            // 2. Add found product to the cart array
            for (let j = 0; j < cart.length; j++) {
                if (cart[j].id === productoEncontrado.id) {
                    cart[j].quantity += 1
                    console.log("esta repetido")
                    ProductoCarrito = true;
                    break
                }
            }
            if (ProductoCarrito == false) {
                productoEncontrado.quantity = 1
                cart.push(productoEncontrado);
                console.log("añadido al carro")
            }
            break;
        }
    }
    updateCartCount()
    console.log(cart)
}
// Exercise 2
function cleanCart() {
    cart.splice(0)
    printCart()
    updateCartCount()
}

// Exercise 3
function calculateTotal() {
    total = 0 
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].subtotalWithDiscount
    }
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
        cart.forEach(item => {
            if (item.offer && item.quantity >= item.offer.number) {
                let descuento = item.price * (item.offer.percent / 100)
                let descuentoPrecio = item.price - descuento
                item.subtotalWithDiscount = Math.ceil(descuentoPrecio * item.quantity)
            }else{
                item.subtotalWithDiscount = item.price * item.quantity
        }
    })
}

// Exercise 5
function printCart() {
    applyPromotionsCart()
    calculateTotal()
    let tr = "";
    // Fill the shopping cart modal manipulating the shopping cart dom
    for (let i = 0; i < cart.length; i++) {
        tr += '<tr>'
        tr += '<td>' + cart[i].name + '</td>';
        tr += '<td>' + '$' + cart[i].price + '</td>';
        tr += '<td>' + cart[i].quantity + '</td>';
        tr += '<td>' + '$' + cart[i].subtotalWithDiscount +'</td>';
        tr += `<td> <button class="custom-primary-button" onclick="addProducts(${cart[i].id})">+</button><td>`
        tr += `<td> <button class="custom-primary-button" onclick="removeFromCart(${cart[i].id})">-</button><td>`
        tr += '</tr>';
    };
    document.getElementById('cart_list').innerHTML = tr;
    document.getElementById('total_price').innerHTML = total;

}
// ** Nivell II **

// Exercise 7
function removeFromCart(idProducto) {
    let indiceProducto = cart.findIndex(item => item.id === idProducto)
    console.log(indiceProducto)

    if(indiceProducto >= 0){
        if(cart[indiceProducto].quantity > 1){
            cart[indiceProducto].quantity -= 1
        }else {
        cart.splice(indiceProducto, 1)
        console.log("producto eliminado ")
        }
    }else{
        console.log("no existe el producto")
    }
    updateCartCount()
    printCart()
}

function addProducts(idProducto){
    buy(idProducto)
    printCart()
}


function open_modal() {
    printCart();
}