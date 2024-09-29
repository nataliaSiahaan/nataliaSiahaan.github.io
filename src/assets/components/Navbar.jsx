import React from "react";

const Navbar = ({ totalItems }) => {
    return(
        <nav style={{display:"flex", justifyContent:"space-between", padding:"0 5rem", backgroundColor:"#FFCFB3", borderRadius:"1rem", color:"white", boxShadow:"5px 5px 5px rgba(0,0,0, 0.5)"}}>
            <h2>MyStore</h2>
            <div style={{ position: 'relative', alignItems:'center', justifyContent:'center', top:'5px', right:'15px'}}>
                <p style={{ fontSize: '18px' }}>Cart</p>
                <span style={{ position: 'absolute', top: '-1px', right: '-10px', backgroundColor: '#E78F81', borderRadius: '50%', color: '#fff', padding:'0 5px' }}>{totalItems}</span>
            </div>
        </nav>
    );
};
export default Navbar;