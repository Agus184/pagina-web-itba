var cart = [];
var addCart = document.getElementsByClassName('agregar-carrito');
for (var i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener('click', addProductToCart);
}

var Vaciar = document.getElementById('boton-vaciar');
Vaciar.addEventListener('click', vaciarCarrito);

window.addEventListener('load', loadCartFromStorage);

function addProductToCart(evento) {
    var button = evento.target;
    var producto = button.parentElement.parentElement;
    var titulo = producto.getElementsByClassName('producto')[0].innerText;
    var precio = producto.getElementsByClassName('precio')[0].innerText;
    var precio = precio.substring(1) 
    var productoAgregado = {
        titulo: titulo,
        precio: precio,
    };
    cart.push(productoAgregado);
    refreshCart();

    saveCartToStorage();
}

function refreshCart() {
    var carritoContainer = document.getElementById('carrito2');
    carritoContainer.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var producto = cart[i];
        var carritoElemento = document.createElement('li');
        carritoElemento.classList.add('list-group-item');
        var contenido = `
            <span>${producto.titulo}</span>
            <span>$${producto.precio}</span> 
        `;
        carritoElemento.innerHTML = contenido;
        carritoContainer.appendChild(carritoElemento);
    }
    calcularTotal();

    saveCartToStorage();
}

function vaciarCarrito() {
    cart = [];
    refreshCart();
    saveCartToStorage();
}

function saveCartToStorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}

function loadCartFromStorage() {
    var savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse (savedCart);
        refreshCart();
    }
}

function calcularTotal() {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += parseInt(cart[i].precio);
    }
    var totalElemento = document.getElementById('total');
    totalElemento.innerText = total;
}


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});
