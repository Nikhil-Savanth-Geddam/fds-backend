const Cart = ({ cart }) => {
    return (
        <div className="cart-container">
            <h3>Cart</h3>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
