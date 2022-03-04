import { useContext } from "react";
import { ProductContext } from './ProductCard';

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";


export const ProductImage = ({ image = "" }) => {

    const { product: { img } } = useContext(ProductContext);
    let imgToShow: string;

    if ( image ) {
        imgToShow = image;
    } else if ( img ) {
        imgToShow = img;
    } else {
        imgToShow = noImage;
    };

    return (
        <img className={styles.productImg} src={ imgToShow } alt="Product" />
    );
};