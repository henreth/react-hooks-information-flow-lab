import React, { useState } from "react";

function Header ({mode,handleModeChange}) {

    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleModeChange}>{mode ? "Dark" : "Light"} Mode </button>
    </header>
            )
}

export default Header;
