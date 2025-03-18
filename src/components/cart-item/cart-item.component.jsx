import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span> {name} </span>
        <span>{quantity} &times; ${price} </span>
      </div>
    </div>
  ); 
};

export default CartItem;
