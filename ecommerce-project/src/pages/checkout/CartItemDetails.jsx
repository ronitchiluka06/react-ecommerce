import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useState } from "react";
import { DeliveryDate } from "./DeliveryDate";
import { DeliveryOption } from "./DeliveryOption";

export function CartItemDetails({ cartItem, loadCart , selectedDeliveryOption , deliveryOptions }) {

    const [updateQuantity, setUpdateQuantity] = useState(false);
    const [quantity , setQuantity] = useState(cartItem.quantity);


    const updateQuantitys = async () => {
        // Switch between true and false for isUpdatingQuantity.
        if (updateQuantity) {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity : Number(quantity),
        });
            await loadCart();
            
            setUpdateQuantity(false);
        } else {
            setUpdateQuantity(true);
        }
    };


    const updateQuantityInput =(event)=>{
        setQuantity(event.target.value);
    };

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCart();
    }

    const handleQuantityKeyDown =(event)=>{
        const keyPressed = event.key;

        if(keyPressed === 'Enter'){
            updateQuantitys();
        }
        else if(keyPressed === 'Escape'){
            setQuantity(cartItem.quantity);
            setUpdateQuantity(false);
        }
    } 

    return (
        <div  className="cart-item-container">

            <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />


            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">

                        <span>
                            Quantity: {updateQuantity
                                ?
                                <input value={quantity} 
                                onChange={updateQuantityInput} 
                                onKeyDown={handleQuantityKeyDown}
                                className="quantity-input" type="text" />
                                :
                                <span className="quantity-label">{cartItem.quantity}</span>
                            }

                        </span>
                        <span className="update-quantity-link link-primary"
                            onClick={updateQuantitys}>
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary"
                            onClick={deleteCartItem}>
                            Delete
                        </span>
                    </div>
                </div>

                <DeliveryOption deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />

            </div>
        </div>
    );
}