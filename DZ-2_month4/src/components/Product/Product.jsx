// Product.js
import React from 'react';
import styles from './product.module.css';


const Product = ({name, price, image, handleLike, id, isLiked}) => (
    <div onClick={() => {handleLike(id)}} className={styles.mainProduct}>
        <div className={styles.productContainer}>
            <div className={styles.productIcon}>
                <img src={image}  alt={name} className={styles.productImage}/>
            </div>
            <div className={styles.productInfo}>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                {isLiked && <p>liked</p>}
            </div>
        </div>
    </div>
);

export default Product;
