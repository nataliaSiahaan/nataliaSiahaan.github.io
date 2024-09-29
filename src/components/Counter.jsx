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
        <div style={{display:'flex', justifyContent:'center', alignItems: 'center', border: '1px solid #E78F81', borderRadius:'10px',}}>
            <button onClick={decrement} style={{backgroundColor:'transparent', border:'none', fontSize:'24pt'}}>-</button>
            <span style={{padding:'20px'}}>{quantity}</span>
            <button onClick={increment} style={{backgroundColor:'transparent', border:'none', fontSize:'24pt'}}>+</button>
        </div>
    );
}

export default Counter;