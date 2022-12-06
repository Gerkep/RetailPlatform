import styled from "styled-components";
import Image from "next/image";

const BigPreview = ({image}: any) => {
    return (
        <ImageContainer>
            <Image alt="product img" style={{width: "85%", height: "auto"}} src={image}></Image>
            <ProductName>Match-Up Sneaker</ProductName>
        </ImageContainer>
    )
}

export default BigPreview;

const ImageContainer = styled.div`
    width: 95%;
    height: 20rem;
    margin-top: 0.5rem;
    padding: 1rem;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-wrap: wrap;
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 0.8em;
    margin-top: 1rem;
`
