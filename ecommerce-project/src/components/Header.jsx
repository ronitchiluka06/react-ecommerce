import {NavLink , useNavigate} from 'react-router';
import './header.css';
import { useState } from 'react';

export function Header({ cart }){

    const navigate = useNavigate();
    const [searchInput , setSearchInput] = useState("");

    let totalQuantity = 0;

    cart.forEach((cartItem)=>{
        totalQuantity += cartItem.quantity ;
    })

    const searchInputChanged = (event)=>{
        setSearchInput(event.target.value);
    }

    const searchClicked = ()=>{
        console.log(searchInput);
        navigate(`/?search=${searchInput}`);
    }

    return(
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input value={searchInput} onChange={searchInputChanged} className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button"
                    onClick={searchClicked}>
                    <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">   
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    );
}