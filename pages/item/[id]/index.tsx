import shoe from "../../../public/img/shoe.png";
import bagIcon from "../../../public/img/icons/bagIcon.png";
import styled from "styled-components";
import Image from "next/image";
import ActionButton from "../../../components/common/ActionButton";
import Props from "../../../components/product/Props";
import ProductImage from "../../../components/product/ProductImage";
import MainInfo from "../../../components/product/MainInfo";
import Link from "next/link";
import LoadingPage from "../../../components/common/LoadingPage";
import Navbar from "../../../components/common/Navbar";
import Centered from "../../../components/common/Centered";
import { useEffect, useState } from "react";
import YeppBadge from "../../../components/common/YeppBadge";

const Product = () => {

    const [isOwner, setIsOwner] = useState(false);
    const [listed, setListed] = useState(true);
    const [drop, setDrop] = useState(false);
    const [mobile, setMobile] = useState(true);
    
    useEffect(() => {
        if(window.innerWidth >= 768){
          setMobile(false);
        }
      }, [])

    return (
        <PageContainer>        
                    <YeppBadge />    
        <Navbar showProfile={true} admin={true}  showHome={true} showUpcoming={true}/>
        <LoadingPage />
        <PageContent>
            <Centered>
                <ProductImage image={shoe}/>
            </Centered>
            <ProductInfoContainer>
                <div>
                    <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton" mobile={mobile}><Price>$234</Price></MainInfo>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </Description>
                    
                    {isOwner ?
                        listed ?
                            <Props owner="gerke.eth" invoice="" condition=""/>
                        :
                            <Props owner="gerke.eth" invoice="" condition=""/>
                        :
                        listed ?
                            <Props owner="gerke.eth" invoice="With VAT invoice" condition="New"/>
                        :
                            drop ?
                            <Props owner="gerke.eth" invoice="With VAT invoice" condition=""/>
                            :
                            <Props owner="gerke.eth" invoice="" condition=""/>
                            
                    }
                    {!mobile && 
                        <ProductPrice>$323</ProductPrice>
                    }
                    {isOwner ?
                        listed ?
                            <ActionButton text="DELIST" />
                        :
                            <Link href="/sell/1">
                                    <ActionButton text="LIST ITEM"/>
                            </Link>
                        :
                        listed ?
                            <Link href="/shipment">
                                    <ActionButton text="ORDER NOW" icon={bagIcon}/>
                            </Link>
                        :
                            drop ?
                            <Link href="/shipment">
                                    <ActionButton text="ORDER NOW" icon={bagIcon}/>
                            </Link>
                            :
                            <></>
                    }
                </div>
            </ProductInfoContainer>
        </PageContent>
        </PageContainer>
    )
}

export default Product;

const PageContainer = styled.div`
    @media (min-width: 768px) {
        height: 100vh;
        overflow: hidden;
    }
`

const PageContent = styled.div`
    padding-bottom: 5rem;
    @media (min-width: 768px) {
        display: grid; 
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". .";
        padding-bottom: 0rem;
    }
`
const Price = styled.p`
   font-size: 2em;
   font-weight: 900;
`

const ProductInfoContainer = styled.div`
    @media (min-width: 768px) {
        margin: 0 auto;
        width: 70%;
        height: 80%;
        display: flex;
        align-items: center;
    }
`

const Description = styled.div`
    padding: 0 1rem 0 1rem;
    font-size: 1em;
    margin-top: 1vw;
    font-weight: 400;
    grid-area: product-brand;
`

const ProductPrice = styled.div`
    @media (min-width: 768px) {
        padding: 0 1rem 0 1rem;
        font-size: 1.5em;
        margin-top: 3vw;
        font-weight: 500;
    }
`