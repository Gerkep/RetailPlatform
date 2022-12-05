import styled from "styled-components";
import ProductPreview from "./ProductPreview";

const Products = () => {
    return (
        <Container>
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            <ProductPreview />
            
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