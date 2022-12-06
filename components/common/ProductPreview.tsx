import styled from "styled-components";
import shoe from "../../public/img/lvshoe.png";
import Image from "next/image";

const ProductPreview = () => {
    return (
        <PreviewContainer>
            <PreviewImage>
                <Image alt="product img" layout='fill' objectFit='contain' src={shoe}></Image>
            </PreviewImage>
            <ProductPrice>$324</ProductPrice>
        </PreviewContainer>
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
`
const PreviewImage = styled.div`
    width: 90%;
    height: 80%;
    position: relative;
    margin: 0 auto;
`

const ProductPrice = styled.div`
    font-size: 0.7em;
    width: 90%;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
`