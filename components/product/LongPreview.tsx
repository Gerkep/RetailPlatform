import styled from "styled-components";
import Image from "next/image";
import image from "../../public/img/lvshoe.png";


const LongPreview = () => {
    return (
        <PreviewContainer>
            <PreviewInfo>
                <ProductName>Match-Up Sneaker</ProductName>
                <ProductBrand>Louis Vuitton</ProductBrand>
                <ProductPrice>$325</ProductPrice>
            </PreviewInfo>
            <PreviewImage>
                <Image alt="product img" style={{width: "90%", height: "auto"}} src={image}></Image>
            </PreviewImage>
        </PreviewContainer>
    )
}

export default LongPreview;

const PreviewContainer = styled.div`
    width: 100%;
    padding: 1rem 1.5rem 1rem 1.5rem;
    background-color: #F1F1F1;
    border-radius: 15px;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "preview-info preview-image"; 
`

const PreviewInfo = styled.div`
    grid-area: preview-info;
`

const PreviewImage = styled.div`
    grid-area: preview-image;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 0.8em;
`

const ProductBrand = styled.p`
    font-weight: 500;
    font-size: 0.5em;
`

const ProductPrice = styled.p`
    font-weight: 900;
    font-size: 1.8em;
    margin-top: 1.5rem;
`