import { useEffect, useState } from "react";
import  "./App.css";
function FetchData() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(r => r.json())
            .then(json => {
                const modifiedData = json.map(item => {
                    const words = item.description.split(' ');
                    const truncatedDescription = words.slice(0, 5).join(' ');
                    return { ...item, description: truncatedDescription };
                });
                setRecords(modifiedData);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <ul className="cards">
                {records.map((item, index) => (
                    <li className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="text">
                            <p>{item.title}</p>
                            <p className="price">Price: {item.price}</p>
                            <p> {item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FetchData;
