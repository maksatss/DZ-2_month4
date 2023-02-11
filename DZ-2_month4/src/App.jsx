import React, {useState} from 'react';
import Product from './components/Product/Product';
import SearchField from './components/SearchField/SearchField';
import styles from './App.css';
import product1 from "./assets/Product_images/Product1.jpeg";
import product2 from "./assets/Product_images/Product2.jpg";
import product3 from "./assets/Product_images/Product3.jpg";
import product4 from "./assets/Product_images/Product4.jpg";
import product5 from "./assets/Product_images/Product5.jpg";
import product6 from "./assets/Product_images/Product6.jpg";
import product7 from "./assets/Product_images/Product7.jpg";
import product8 from "./assets/Product_images/Product8.jpg";
import product9 from "./assets/Product_images/Product9.jpg";

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([
            {
                name: 'Mercedes-Benz Vision AVTR',
                price: 19.99,
                image: product1,
                id: 1,
                isLiked: false
            },
            {
                name: 'Mercedes-Benz Vision EQS',
                price: 29.99,
                image: product2,
                id: 2,
                isLiked: false
            },
            {
                name: 'Mercedes-Benz Vision EQ Silver Arrow',
                price: 39.99,
                image: product3,
                id:3,
                isLiked: false
            },
            {
                name: 'Mercedes-Benz CLS ',
                price: 49.99,
                image: product4,
                id:4,
                isLiked: false
            },
            {
                name: 'Mercedes-Benz SLS',
                price: 59.99,
                image: product5,
                id:5,
                isLiked: false
            },

            {
                name: 'Mercedes-Benz GL63',
                price: 69.99,
                image: product6,
                id:6,
                isLiked: false
            },

            {
                name: 'Mercedes-Benz Maybach',
                price: 79.99,
                image: product7,
                id:7,
                isLiked: false
            },

            {
                name: 'Mercedes-Benz A180',
                price: 89.99,
                image: product8,
                id:8,
                isLiked: false
            },

            {
                name: 'Mercedes-Benz E63 AMG',
                price: 99.99,
                image: product9,
                id:9,
                isLiked: false
            },
        ]
    )
    const [filteredProducts, setFilteredProducts] = useState(products);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    const handleLike = (id) => {
        setProducts(products.map(product => {
            if(product.id === id){
                if(product.isLiked){
                    product.isLiked = false
                } else {
                    product.isLiked = true
                }
            }
            return product
        }))
    }

    return (
        <div className={styles.appContainer}>
            <SearchField
                searchTerm={searchTerm}
                handleSearch={handleSearch}
            />
            <div className={styles.productContainer}>
                {filteredProducts.map((product, index) => (
                    <Product
                        key={index}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        isLiked={product.isLiked}
                        handleLike={handleLike}
                    />
                ))}
            </div>

        </div>
    );
}

export default App;