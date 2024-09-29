import React from "react";
import CartItem from "./CartItem";

function CartList({ onUpdateTotalItems }) {
    return (
        <div style={{padding:'2rem'}}>
            {/* Mengoper onUpdateTotalItems ke CartItem */}
            <CartItem onUpdateTotalItems={onUpdateTotalItems} />
        </div>
    );
}

export default CartList;