import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CartList from "./components/CartList";

function App() {
    // State untuk menyimpan total items
    const [totalItems, setTotalItems] = useState(0);

    return (
      <>
        {/* Mengoper totalItems ke Navbar */}
        <Navbar totalItems={totalItems} />

        {/* Mengoper fungsi updateTotalItems ke CartList */}
        <CartList onUpdateTotalItems={setTotalItems} />
      </>
    );
}

export default App;