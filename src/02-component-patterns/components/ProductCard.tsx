import { createContext, CSSProperties } from 'react';

import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children: ( args: ProductCartHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
};

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }} >
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >

                {/*<ProductImage img={ img } />

                <ProductTitle title={ title } />

                <ProductButtons counter={ counter } increaseBy={ increaseBy } />*/}

                { children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                }) }

            </div>
        </Provider>
    );
};

