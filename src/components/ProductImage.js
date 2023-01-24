import React, { useState } from 'react';
import styles from "../style.module.css";
import shoes1 from '../images/image-product-1.jpg'
import shoes2 from '../images/image-product-2.jpg'
import shoes3 from '../images/image-product-3.jpg'
import shoes4 from '../images/image-product-4.jpg'

const shoes = [shoes1, shoes2, shoes3, shoes4,]

function ProductImage() {
  const [currentImage, setCurrentImage] = useState(shoes[0]);

  return (
    <div className={styles.productImage}>
      <img src={currentImage} alt="Product" className={styles.mainImage}/>
      <div className={styles.thumbnailContainer}>
        {shoes.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Thumbnail"
            className={`${styles.thumbnail} ${currentImage === image ? `${styles.selected}` : ""}`}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductImage;
