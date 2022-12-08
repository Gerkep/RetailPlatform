import styled from "styled-components";
import Label from "../components/common/Label";
import PageTitle from "../components/common/PageTitle";
import searchIcon from "../public/img/icons/searchIcon.png";
import Image from "next/image";
import LongPreview from "../components/product/LongPreview";
import Link from "next/link";
import ActionButton from "../components/common/ActionButton";
import bagIcon from "../public/img/icons/bagIcon.png";
import LoadingPage from "../components/common/LoadingPage";
import Navbar from "../components/common/Navbar";

const ShipmentInfo = () => {
    return (
        <ShipmentContent>
            <LoadingPage />
            <TitleContainer>
                <PageTitle>Delivery details</PageTitle>
            </TitleContainer>
            <FormInputs>
                <InputContainer>
                    <Label>First name</Label>
                    <Input placeholder="Piotr"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Last name</Label>
                    <Input placeholder="Gerke"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Address</Label>
                    <Input placeholder="Słoneczna 5"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>City</Label>
                    <Input placeholder="Lusowo"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Postal code</Label>
                    <Input placeholder="62-080"></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Tel. number</Label>
                    <Input type="tel" placeholder="721 783 342"></Input>
                </InputContainer>
            </FormInputs>
            <Prop>
                <Label>Seller</Label>
                    <PropValue>
                        <Link href="/profile/gerke.eth">
                            gerke.eth
                        </Link>
                        <Link href="/profile/gerke.eth">
                            <Image alt="search" style={{width: "0.7rem", height: "0.7rem", marginLeft: "0.5rem"}} src={searchIcon}></Image>
                        </Link>
                    </PropValue>
            </Prop>
            <PreviewContainer>
                <LongPreview />
            </PreviewContainer>
            <Link href="/thank-you">
                <ActionButton text="BUY NOW" icon={bagIcon}/>
            </Link>
        </ShipmentContent>
    )
}

export default ShipmentInfo;

const ShipmentContent = styled.div`
    padding-bottom: 5rem;
`

const TitleContainer = styled.div`
    padding: 1rem 1.5rem 1rem 1.5rem;
`

const FormInputs = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const InputContainer = styled.div`
    margin: 0rem 0rem 1rem 1.5rem;
`

const Input = styled.input`
    width: 9.5rem;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: #F2F2F2;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    font-size: 1em;
`
const Prop = styled.div`
    margin: 1rem 2.5rem 1rem 1.5rem;
`

const PropValue = styled.p`
    font-weight: 500;
    font-size: 0.8em;
    display: flex;
    align-items: center;
`
const PreviewContainer = styled.div`
    width: 100%;
    padding: 0 1.5rem 0 1.5rem;
`