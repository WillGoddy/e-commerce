class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
        this.displayCart();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        this.displayCart();
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
        let totalElement = document.getElementById("afficher");
        totalElement.innerText = this.getTotal();
    }
}

const products = [
    new Product(1, "Lunettes TEYILA", 2500),
    new Product(2, "Sacoche Homme", 15000),
    new Product(3, "Paire de Lunettes", 4500)
];

const cart = new ShoppingCart();

const productBoxes = document.getElementsByClassName("box");
for (let i = 0; i < productBoxes.length; i++) {
    let btnPlus = productBoxes[i].children[5].children[1];
    let btnMoins = productBoxes[i].children[5].children[0];
    let deleteBtn = productBoxes[i].children[6].children[1];
    let likeBtn = productBoxes[i].children[6].children[0];
    let quantityElement = productBoxes[i].children[3].children[1];
    let priceElement = productBoxes[i].children[4].children[1];
    
    let product = products[i];
    let qty = 0;

    btnPlus.addEventListener("click", function () {
        qty++;
        quantityElement.innerText = qty;
        priceElement.innerText = product.price * qty;
        cart.addItem(product, 1);
    });

    btnMoins.addEventListener("click", function () {
        if (qty > 0) {
            qty--;
            quantityElement.innerText = qty;
            priceElement.innerText = product.price * qty;
            cart.addItem(product, -1);
        }
    });

    deleteBtn.addEventListener("click", function () {
        productBoxes[i].remove();
        cart.removeItem(product.id);
    });

    likeBtn.addEventListener("click", function () {
        if (likeBtn.style.backgroundColor === "red") {
            likeBtn.style.backgroundColor = "black";
            likeBtn.style.color = "white";
        } else {
            likeBtn.style.backgroundColor = "red";
            likeBtn.style.color = "white";
        }
    });
}
