import React from "react";

function Header() {
    return <h1>Hello, {localStorage.getItem("login")}</h1>
}

export default Header;