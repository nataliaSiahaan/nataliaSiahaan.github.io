import React, { useState, useEffect } from "react";
import Counter from "./Counter";

function CartItem({ onUpdateTotalItems }) {
    const [cartItems, setCartItems] = useState([]);
    
    // Fetching data dari API
    async function getCartItem() {
        let URL = "https://fakestoreapi.com/products?limit=5";
        const response = await fetch(URL);
        const result = await response.json();

        const itemsWithQuantity = result.map(item => ({
            ...item,
            quantity: 1  // Inisialisasi jumlah setiap item menjadi 1
        }));
        setCartItems(itemsWithQuantity);
    }

    useEffect(() => {
        getCartItem();
    }, []);

    return (
        <div>
            {cartItems.length === 0 ? <h1>Loading...</h1> : 
            <div>
                <div key={item.id}>
                    <img src={item.image} alt="" width={80} />
                    <p>{item.title}</p>
                    <p>${item.price}</p>

                    <div style={{ width: '120px'}}>
                        <Counter/>
                    </div>
                    
                    <div>
                        Total: $
                    </div>
                </div>
            </div>
            }
        </div>
    );
}

export default CartItem;