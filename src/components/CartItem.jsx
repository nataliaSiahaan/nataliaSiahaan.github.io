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

        // Hitung total items dan update
        const total = itemsWithQuantity.reduce((sum, item) => sum + item.quantity, 0);
        onUpdateTotalItems(total); // Update total items di Navbar
    }

    useEffect(() => {
        getCartItem();
    }, []);

    // Fungsi untuk memperbaharui perubahan quantity
    const handleQuantityChange = (itemId, newQuantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Menghitung total items setiap kali cartItems berubah
    useEffect(() => {
        const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        onUpdateTotalItems(total); // Update total items di Navbar
    }, [cartItems, onUpdateTotalItems]);

    return (
        <div style={{ backgroundColor: '#FFCFB3', color: '#fff', marginBottom: '10px', borderRadius:'1%'}}>
            {cartItems.length === 0 ? <h1>Loading...</h1> : 
            <div style={{padding:'2rem', color:'black'}}>{cartItems.map((item) => 
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', padding: '30px', justifyContent: 'space-between'}}>
                    <img src={item.image} alt="" width={80} style={{ flexShrink: 0,  border: '3px solid #E78F81', borderRadius:'5%', padding:'5px'}} />
                    <p style={{ width: '200px',textAlign:'start', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</p>
                    <p style={{ width: '80px', textAlign:'start' }}>${item.price}</p>

                    {/* mengoper item ID dan quantity ke komponen Counter */}
                    <div style={{ width: '120px'}}>
                        <Counter 
                            itemId={item.id} 
                            quantity={item.quantity} 
                            onQuantityChange={handleQuantityChange} 
                        />
                    </div>
                    
                    <div style={{ width: '120px', textAlign:'start', borderBottom:'1px solid #E78F81' }}>
                        Total: ${item.price * item.quantity} {/* Menghitung Harga Akhir */}
                    </div>
                </div>
            )}</div>
            }
        </div>
    );
}

export default CartItem;