import { Fragment } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { CartItemDetails } from "./CartItemDetails";

export function OrdersGrid({ orders , loadCart}) {
    return (

        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <div className="order-header">
                            <div className="order-header-left-section">
                                <div className="order-date">
                                    <div className="order-header-label">Order Placed:</div>
                                    <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
                                </div>
                                <div className="order-total">
                                    <div className="order-header-label">Total:</div>
                                    <div>{formatMoney(order.totalCostCents)}</div>
                                </div>
                            </div>

                            <div className="order-header-right-section">
                                <div className="order-header-label">Order ID:</div>
                                <div>{order.id}</div>
                            </div>
                        </div>


                        <div className="order-details-grid">
                            {order.products.map((orderProduct) => {
                                
                                return (
                                    <Fragment key={orderProduct.product.id}>
                                        <CartItemDetails orderProduct={orderProduct} loadCart={loadCart} />

                                        <div className="product-actions">
                                            <a href="/tracking">
                                                <button className="track-package-button button-secondary">
                                                    Track package
                                                </button>
                                            </a>
                                        </div>
                                    </Fragment>
                                );
                            })}

                        </div>
                    </div>
                );
            })}

        </div>

    );
}
