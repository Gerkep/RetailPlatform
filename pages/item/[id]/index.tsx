import shoe from "../../../public/img/lvshoe.png";
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

const Product = () => {
    return (
        <PageContainer>
            <Navbar showShare={true} showProfile={true} />
            <LoadingPage />
            <ProductImage image={shoe}/>
            <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton" price="324"/>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </Description>
            <Props owner="gerke.eth" invoice="With VAT invoice" condition="New"/>
            <Link href="/shipment">
                <ActionButton text="BUY NOW" icon={bagIcon}/>
            </Link>
        </PageContainer>
    )
}

export default Product;

const PageContainer = styled.div`
    padding-bottom: 5rem;
`

const Description = styled.div`
    padding: 0 1rem 0 1rem;
    font-size: 1em;
    margin-top: 1vw;
    font-weight: 400;
    grid-area: product-brand;
`

