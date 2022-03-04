import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import styles from "../styles/styles.module.css";

export interface Props {
    className?: string;
    title?: string;
    style?: CSSProperties;
};


export const ProductTitle = ({ title, className, style }: Props) => {

    const { product: { title: titleContext } } = useContext(ProductContext);

    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` } 
            style={ style }
        >
             { title ? title : titleContext } 
        </span>
    );
};