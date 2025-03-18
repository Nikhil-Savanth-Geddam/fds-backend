import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    const logout = () => {
        navigate("/login"); // Redirect to login page on logout
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="dashboard-container">
            <h2>Welcome to the Dashboard</h2>
            <p>You are successfully logged in!</p>
            <button onClick={logout}>Logout</button>
            
            <h3>Products</h3>
            <div>
                <button onClick={() => addToCart("Product 1")}>Add Product 1</button>
                <button onClick={() => addToCart("Product 2")}>Add Product 2</button>
                <button onClick={() => addToCart("Product 3")}>Add Product 3</button>
            </div>

            <h3>Cart</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
