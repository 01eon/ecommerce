import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({cartItem}) => {
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem;

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <span className="arrow" onClick={removeItemHandler}>&#10094;</span>
                <span className="value"> {quantity} </span>
                <span className="arrow" onClick={addItemHandler}>&#10095;</span>

            </span>
            <span className="price">${price.toFixed(2)}</span>
            <div className="remove-button" onClick={clearItemHandler}> &#10005; </div>
        </div>
    )
}

export default CheckoutItem;