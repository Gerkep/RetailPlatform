import shoe from "../../../public/img/lvshoe.png";
import bagIcon from "../../../public/img/icons/bagIcon.png";
import styled from "styled-components";
import Image from "next/image";
import ActionButton from "../../../components/common/ActionButton";

const Product = () => {
    return (
        <PageContainer>
        <ImageContainer>
            <Image alt="product img" style={{width: "85%", height: "auto"}} src={shoe}></Image>
        </ImageContainer>
        <MainProductInfo>
            <ProductName><h1>Match-Up Sneaker</h1></ProductName>
            <ProductBrand>Louis Vuitton</ProductBrand>
            <ProductPrice><p>$245</p></ProductPrice>
        </MainProductInfo>
        <Description>
            Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Description>
        <ProductProps>
            <Prop>
                <Label>Owner</Label>
                <PropValue>gerke.eth</PropValue>
            </Prop>
            <Prop>
                <Label>Invoice</Label>
                <PropValue>With VAT invoice</PropValue>
            </Prop>
            <Prop>
                <Label>Condition</Label>
                <PropValue>New</PropValue>
            </Prop>
        </ProductProps>
        <ActionButton text="BUY NOW" icon={bagIcon}/>
        </PageContainer>
    )
}

export default Product;

const PageContainer = styled.div`
    padding-bottom: 5rem;
`
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

const MainProductInfo = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid; 
    grid-template-columns: 1.4fr 0.6fr; 
    grid-template-rows: 0.8fr 1.2fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    "product-name product-price"
    "product-brand product-price";
`

const ProductName = styled.div`
    font-size: 1.2em;
    margin-top: 1vw;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-name;
`

const ProductBrand = styled.div`
    font-size: 0.8em;
    margin-top: 1vw;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-brand;
`

const ProductPrice = styled.div`
    text-align: right;
    font-size: 2em;
    margin-top: 1vw;
    font-weight: 900;
    white-space: nowrap;
    overflow: hidden;
    grid-area: product-price;
`

const Description = styled.div`
    padding: 0 1rem 0 1rem;
    font-size: 1em;
    margin-top: 1vw;
    font-weight: 400;
    grid-area: product-brand;
`

const ProductProps = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
`
const Prop = styled.div`
    margin: 1rem 2.5rem 1rem 0;
`

const Label = styled.p`
    color: #7B7B7B;
    font-weight: 400;
    font-size: 0.7em;
`

const PropValue = styled.p`
    font-weight: 500;
    font-size: 0.8em;
`