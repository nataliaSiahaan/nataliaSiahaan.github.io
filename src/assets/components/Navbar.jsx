import React from "react";

const Navbar = ({ totalItems }) => {
    return(
        <nav>
            <h2>MyStore</h2>
            <div>
                <p>Cart</p>
                <span>{totalItems}</span>
            </div>
        </nav>
    );
};
export default Navbar;