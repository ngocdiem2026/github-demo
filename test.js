// Class cha
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

// Class con: Electronics
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price);
        this.warranty = warranty;
    }

    getDetails() {
        console.log(
            `Electronics: ${this.name}, Price: ${this.price}, Warranty: ${this.warranty} months`,
        );
    }
}

// Class con: Clothing
class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getDetails() {
        console.log(
            `Clothing: ${this.name}, Price: ${this.price}, Size: ${this.size}`,
        );
    }
}

// ShoppingCart
class ShoppingCart {
    #items = [];
    addItem(product) {
        if (!(product instanceof Product)) {
            console.log(`Invalid product.`.bgRed);
            return;
        }
        if (product.name === "") {
            console.log("Product name is required.");
            return;
        }
        this.#items.push(product);
    }
    // hong biet valida thi lam cach nao.

    showCart() {
        console.log("=== Cart Items ===");
        this.#items.forEach((item) => item.getDetails());
    }

    calculateTotal() {
        return this.#items.reduce((total, item) => total + item.price, 0);
    }
}

// Promise giả lập thanh toán
function processPayment(totalAmount) {
    return new ((resolve, reject) => {
        setTimeout(() => {
            if (totalAmount > 1000) {
                resolve("Thanh toán thành công");
            } else {
                reject("Giỏ hàng trống, không thể thanh toán");
            }
        }, 2000);
    })();
}

// ✅ Hàm async để chạy demo
async function runDemo() {
    try {
        // Tạo sản phẩm
        const phone = new Electronics("iPhone", 1000, 12);
        const shirt = new Clothing("T-Shirt", 20, "L");

        // Tạo giỏ hàng
        const cart = new ShoppingCart();

        // Thêm sản phẩm
        cart.addItem(phone);
        cart.addItem(shirt);

        nsole.log(shirt.getDetails());

        // Hiển thị giỏ hàng
        cart.showCart();

        // Tính tổng
        const total = cart.calculateTotal();
        console.log("Total:", total);

        // Thanh toán (await thay cho .then)
        const message = await processPayment(total);
        console.log(message);

        console.log("test 123");
        console.log("test 123");
        console.log("test 123");
        console.log("test 123");
        console.log("test 123");
        console.log("test 123");
    }
}

// Gọi hàm
runDemo();
