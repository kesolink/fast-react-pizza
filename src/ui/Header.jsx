import React from "react"
import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username"

function Header() {
    return (
        <header className=" flex items-center justify-between border-b px-4 py-3  border-stone-200 bg-yellow-400 uppercase sm:px-6 font-pizza">
            <Link to="/" className="tracking-[5px]"> Fast React Pizza Co,</Link>
            <SearchOrder />
            <Username />
        </header>
    
    )
}

export default Header
