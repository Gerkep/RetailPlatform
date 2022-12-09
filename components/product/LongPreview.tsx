import styled from "styled-components";
import Image from "next/image";
import Label from "../common/Label";
import ProgressBar from "../common/ProgressBar";
import { useEffect, useState } from "react";
import Link from "next/link";


const LongPreview = (props: {date: Date | undefined, image: any, productName: string, id: string}) => {
    const {date, image, productName, id} = props;

    const [started, setStarted] = useState(false);

    useEffect(() => {
        if(date){
            if(Number(date) < new Date().getTime()){
                setStarted(true);
            }
        }
    }, [date]);

    return (
        <PreviewContainer>
            <PreviewInfo>
                <ProductName>{productName}</ProductName>
                {!date &&
                    <ProductBrand>Louis Vuitton</ProductBrand>
                }
                {date &&
                <div>
                    {started ?
                        <DateContainer><GreenStatus />Happening Now</DateContainer>
                        :
                        <DateContainer>{date.toDateString()}<Time>{date.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')}</Time></DateContainer>
                    }
                    <SmallLabel>Rarity</SmallLabel>
                    <ProgressBar bgcolor="black" completed="60" height="0.3rem" width="95%"/>
                </div>
                }
                {date ?
                    started ?
                    <Link href={`item/${id}`}>
                        <BuyButton>Buy now</BuyButton>
                    </Link>
                    :
                    <div>
                        <NotifyButton>Notify me</NotifyButton>
                    </div>
                :
                <ProductPrice>$325</ProductPrice>
                }
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
    padding: 1.5rem 1.5rem 2rem 1.5rem;
    margin 1.5rem 0rem 1.5rem 0rem;
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
    padding-right: 0.7rem;
`

const PreviewImage = styled.div`
    grid-area: preview-image;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    border-radius: 10px;
`

const ProductName = styled.h2`
    font-weight: 900;
    font-size: 1em;
`

const ProductBrand = styled.p`
    font-weight: 700;
    font-size: 0.7em;
`

const DateContainer = styled.p`
    font-weight: 500;
    font-size: 0.7em;
    color: #777777;
    display: flex;
    align-items: center;
    width: 95%;
`

const SmallLabel = styled.p`
    font-weight: 500;
    font-size: 0.5em;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    color: #777777;
`

const ProductPrice = styled.p`
    font-weight: 900;
    font-size: 1.8em;
    margin-top: 1.5rem;
`

const GreenStatus = styled.div`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #6DFFB0;
    margin-right: 0.7rem;
`

const BuyButton = styled.button`
    margin-top: 1.2rem;
    background-color: black;
    color: white;
    width: 8rem;
    height: 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NotifyButton = styled.button`
    margin-top: 1.2rem;
    color: black;
    border: 2px solid #EAEAEA;
    width: 8rem;
    height: 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Time = styled.div`
    margin-left: 0.5rem;
`