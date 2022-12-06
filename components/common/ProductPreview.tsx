import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProductPreview = ({image, price}: any) => {
    return (
        <Link href="/item/1">
        <PreviewContainer>
            <PreviewImage>
                <Image alt="product img" style={{width: "100%", height: "auto"}} src={image}></Image>
            </PreviewImage>
            <ProductPrice>${price}</ProductPrice>
        </PreviewContainer>
        </Link>
    )
}

export default ProductPreview;

const PreviewContainer = styled.div`
    width: 45vw;
    height: 45vw;
    padding: 1rem;
    margin 0.5vw 0.5vw 0.5vw 0.5vw;
    background-color: #F1F1F1;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
`
const PreviewImage = styled.div`
    width: 95%;
    height: 85%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`

const ProductPrice = styled.div`
    font-size: 1em;
    margin: 0 auto;
    margin-top: 1vw;
    width: 95%;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
`