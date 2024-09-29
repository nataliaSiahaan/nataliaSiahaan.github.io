import React from 'react';

function Counter({ itemId, quantity, onQuantityChange }) {
    const increment = () => {
        onQuantityChange(itemId, quantity + 1); // Memanggil fungsi untuk menambah quantity
    };

    const decrement = () => {
        if (quantity > 0) {
            onQuantityChange(itemId, quantity - 1); // Memanggil fungsi untuk mengurangi quantity
        }
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;