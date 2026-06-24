import { OrdersPage } from "../orders/OrdersPage";
import { DeliveryOption } from "./DeliveryOption";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryDate } from "./DeliveryDate";

export function OrderSummary({deliveryOptions , cart , loadCart }) {

    

    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {

                const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                    });

                return (
                    <CartItemDetails key={cartItem.productId} cartItem={cartItem} loadCart={loadCart} selectedDeliveryOption={selectedDeliveryOption} deliveryOptions={deliveryOptions} />
                    
                );
            })}



        </div>
    );
}