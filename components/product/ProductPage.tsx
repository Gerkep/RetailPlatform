import Centered from "../common/Centered";
import MainInfo from "./MainInfo";
import ProductImage from "./ProductImage";
import shoe from "../../public/img/shoe.png";
import bagIcon from "../../public/img/icons/bagIcon.png";
import Props from "./Props";
import ActionButton from "../common/ActionButton";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router'

const ProductPage = (props: {listed: boolean, isOwner: boolean, drop: boolean, mobile: boolean}) => {

    const {listed, isOwner, drop, mobile} = props;
    const router = useRouter();

    return (
        <PageContainer>
            <div>
            <BackArrow onClick={() => router.back()}><IoIosArrowBack></IoIosArrowBack><div style={{marginLeft: "0.7rem"}}>Back</div></BackArrow>
                <PreviewContainer>
                    <div>
                        <PreviewBackground>
                            <Image alt="preview" style={{width: "100%", height: "auto", marginRight: "0.5rem"}} src={shoe}></Image>
                        </PreviewBackground>
                        <PreviewBackground>
                            <Image alt="preview" style={{width: "100%", height: "auto", marginRight: "0.5rem"}} src={shoe}></Image>
                        </PreviewBackground>
                        <PreviewBackground>
                            <Image alt="preview" style={{width: "100%", height: "auto", marginRight: "0.5rem"}} src={shoe}></Image>
                        </PreviewBackground>
                    </div>
                </PreviewContainer>
            </div>

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
        </PageContainer>
    )
}

export default ProductPage;

const BackArrow  = styled.button`
    display: flex;
    font-size: 1.2em;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 3rem;
    border: none;
    background-color: transparent;
`

const PreviewContainer = styled.div`
    @media (min-width: 768px) {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`
const PreviewBackground = styled.div`
    width: 7rem;
    height: 7rem;
    padding: 1rem;
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 1rem 1rem 1rem 0;
`
const PageContainer = styled.div`
    padding-bottom: 5rem;
    @media (min-width: 768px) {
        display: grid; 
        grid-template-columns: 0.3fr 1.4fr 1.3fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
          ". . .";
          padding-bottom: 0rem;
          width: 75rem;
          height: 37rem;
          padding: 1rem 2rem 1rem 2rem;
    }
`
const Price = styled.p`
   font-size: 2em;
   font-weight: 900;
`

const ProductInfoContainer = styled.div`
    @media (min-width: 768px) {
        margin: 0 auto;
        width: 100%;
        height: 80%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
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
    padding: 0 1rem 0 1rem;
    font-size: 1.5em;
    font-weight: 900
`