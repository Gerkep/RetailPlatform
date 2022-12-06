import styled from "styled-components";
import ProductPreview from "./ProductPreview";
import shoe from "../../public/img/lvshoe.png";
import bag from "../../public/img/lvbag.png";

const Products = () => {
    return (
        <Container>
            <ProductPreview image={shoe} price="325"/>
            <ProductPreview image={bag} price="325"/>
            <ProductPreview image={bag} price="325"/>
            <ProductPreview image={shoe} price="325"/>
            <ProductPreview image={shoe} price="325"/>
            <ProductPreview image={bag} price="325"/>
            <ProductPreview image={shoe} price="325"/>
            <ProductPreview image={bag} price="325"/>
            <ProductPreview image={shoe} price="325"/>
            
        </Container>
    )
}

export default Products;

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 0 0.5rem 0 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
`