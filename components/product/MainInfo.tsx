import styled from "styled-components";
import Image from "next/image";

const MainInfo = (props: {name: string, brand: string, price: string}) => {
    return (
        <MainProductInfo>
            <ProductName><h1>{props.name}</h1></ProductName>
            <ProductBrand>{props.brand}</ProductBrand>
            <ProductPrice><p>${props.price}</p></ProductPrice>
        </MainProductInfo>
    )
}

export default MainInfo;

const MainProductInfo = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid; 
    grid-template-columns: 1.4fr 0.6fr; 
    grid-template-rows: 1fr 1.2fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "product-name product-price"
    "product-brand product-price";
`

const ProductName = styled.div`
    font-size: 1.2em;
    margin-top: 1vw;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-name;
`

const ProductBrand = styled.div`
    font-size: 0.8em;
    margin-top: 1vw;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-brand;
`

const ProductPrice = styled.div`
    text-align: right;
    font-size: 2em;
    margin-top: 1vw;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-price;
`