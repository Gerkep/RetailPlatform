import styled from "styled-components";
import Image from "next/image";
import tagIcon from "../../public/img/icons/tagIcon.png";
import Link from "next/link";
import { useRouter } from "next/router";

const BigPreview = ({image, name, id}: any) => {
    
    const router = useRouter();

    return (
        <ImageContainer onClick={() => router.push(`/item/${id}`)}>
            <SellContainer>
                <div onClick={e => e.stopPropagation()}>
                <SellButton onClick={() => router.push(`/sell/${id}`)}>
                    <Image alt="buy icon" style={{width: "0.7rem", height: "0.7rem", marginRight: "0.5rem"}} src={tagIcon}></Image>
                    Sell
                </SellButton>
                </div>
            </SellContainer>
            <Image alt="product img" style={{width: "85%", height: "auto"}} src={image}></Image>
            <AboutContainer>
                <ProductName>{name}</ProductName>
            </AboutContainer>
        </ImageContainer>     
    )
}

export default BigPreview;

const ImageContainer = styled.div`
    width: 95%;
    margin-top: 0.5rem;
    padding: 3rem 1rem 3rem 1rem;
    background-color: #F1F1F1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-wrap: wrap;
`

const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
`

const SellContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 1em;
`

const SellButton = styled.button`
    background-color: #E0E0E0;
    color: black;
    width: 8rem;
    height: 2rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
