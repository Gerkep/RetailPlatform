import styled from "styled-components";
import Image from "next/image";

const ProductImage = ({image}: any) => {
    return (
        <ImageContainer>
            <Image alt="product img" style={{width: "85%", height: "auto"}} src={image}></Image>
        </ImageContainer>
    )
}

export default ProductImage;

const ImageContainer = styled.div`
    margin: 0 auto:
    width: 95%;
    height: 20rem;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

