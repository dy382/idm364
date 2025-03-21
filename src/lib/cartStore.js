import { writable, derived } from "svelte/store";

export const cart = writable([]);

// Function to add a product
export function addToCart(product) {
    cart.update(items => {
        const existingItem = items.find(item => item.ID === product.ID);
        if (existingItem) {
            return items.map(item =>
                item.ID === product.ID ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...items, { ...product, quantity: 1 }];
        }
    });
}

// Function to remove a product
export function removeFromCart(ID) {
    cart.update(items => items.filter(item => item.ID !== ID));
}

// Function to increase quantity
export function increaseQuantity(ID) {
    cart.update(items =>
        items.map(item =>
            item.ID === ID ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
}

// Function to decrease quantity
export function decreaseQuantity(ID) {
    cart.update(items => {
        return items.map(item => {
            if (item.ID === ID) {
                return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
            }
            return item;
        });
    });
}

// Derived store to count total cart quantity
export const totalCartItems = derived(cart, $cart =>
    $cart.reduce((total, item) => total + item.quantity, 0)
);

// Reset cart
export function clearCart() {
    cart.set([]);
}


function handleCheckout() {
    if (cartItems.length > 0) {
        sessionStorage.setItem("orderDetails", JSON.stringify(cartItems));

        clearCart();

        goto("/thank-you");
    }
}