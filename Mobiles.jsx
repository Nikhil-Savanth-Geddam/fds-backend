import { useEffect, useState } from "react";
import axios from "axios";
import "./Mobiles.css";

const Mobiles = () => {
    const [mobiles, setMobiles] = useState([]); // Initialize as an empty array

    const getMobiles = async () => {
        try {
            const res = await axios.get("http://localhost:9000/mobiles");
            setMobiles(res.data);
        } catch (error) {
            console.error("Error fetching mobiles:", error);
        }
    };

    useEffect(() => {
        getMobiles();
    }, []);

    return (
        <div className="parent">
            {mobiles.length > 0 ? (
                mobiles.map((element, index) => (
                    <div className="child" key={index}>
                        <img src={element.pimage} alt={element.pname} />
                        <h4>{element.pname}</h4>
                        <h4>Price: ${element.pcost}</h4>
                        <h4>Stock: {element.qty}</h4>
                    </div>
                ))
            ) : (
                <p>Loading mobiles...</p>
            )}
        </div>
    );
};

export default Mobiles;
