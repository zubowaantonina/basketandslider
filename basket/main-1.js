//Задание 1
let cart = {};
let catalog = {
        '11111': {
            img: 'milk.png',
            name: 'Молоко',
            price: '20',
            amount: 0,
            description: 'жирность 3,2 % ',
            count: 0
        },
        '111112': {
            img: 'bananas.png',
            name: 'Бананы',
            price: '100',
            amount: 0,
            description: 'мини бананы',
            count: 0
        },
        '22236': {
            img: 'tomato.png',
            name: 'Помидоры',
            price: '50',
            amount: 0,
            description: 'Розовые',
            count: 0
        }
    }
    // function loadGoods() {
let out = "";
for (key in catalog) {
    out += '<img src="' + catalog[key].img + '"><br>';
    out += 'Название :' + catalog[key].name + '<br>';
    out += 'Стоимость :' + catalog[key].price + '<br>';
    out += 'Наличие :' + catalog[key].amount + '<br>';
    out += 'Описание :' + catalog[key].description + '<br>';
    out += '<button class="add-to-cart" data-id="' + key + '">Купить</button><hr>';
};
document.getElementById('out').innerHTML = out;
document.onclick = event => {
    console.log(event.target.classList);
    if (event.target.classList.contains('add-to-cart')) {
        plusFunction(event.target.dataset.id)
    }
    if (event.target.classList.contains('out-to-cart')) {
        minusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('delete')) {
        deletFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('add-cart')) {
        plusFunction2(event.target.dataset.id)
    }
}
const plusFunction = id => {
    if (cart[id] != undefined) {
        cart[id]++;
    } else { cart[id] = 1; }
    renderCart();
    showCart()
}
const minusFunction = id => {
    if (cart[id] - 1 == 0) {

        deleteFunction(id);
        return true;
    }
    cart[id]--;
    showCart()
    renderCart();
}
const deleteFunction = id => {
    delete cart[id];
    renderCart();
    showCart()
}
const deletFunction = id => {
    delete cart[key];
    showCart()
};
const renderCart = () => {
    console.log(cart);
}

function showCart() {
    var out = '';
    var total = 0;
    if (Object.keys(cart).length === 0) {
        out += 'Корзина пуста';
    } else {
        for (key in cart) {
            out += '<button class="delete" data-id="' + key + '">x</button>';
            out += catalog[key].name;
            out += '<button class="out-to-cart" data-id="' + key + '">-</button>';
            out += cart[key] + 'шт.';
            out += '<button class="add-to-cart" data-id="' + key + '">+</button>';
            out += ' на ' + cart[key] * catalog[key].price + 'руб<br>';
            out += '<hr>';
            total += cart[key] * catalog[key].price;
        };
    };
    document.getElementById('basket').innerHTML = out;
    document.getElementById('basket1').innerHTML = 'Общая стоимость корзины :' + total + 'Руб.';
}