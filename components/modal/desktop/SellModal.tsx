import Centered from "../../common/Centered";
import ModalTemplate from "../common/ModalTemplate";
import { useRouter } from "next/router";
import ProductImage from "../../product/ProductImage";
import MainInfo from "../../product/MainInfo";
import styled from "styled-components";
import InputDropdown from "../../common/InputDropdown";
import Label from "../../common/Label";
import ActionButton from "../../common/ActionButton";
import { useState } from "react";
import shoe from "../../../public/img/shoe.png";

const conditions = ["New", "Used"]
const invoices = ["No invoice", "VAT invoice"]

const SellModal = () => {

    const [condition, setCondition] = useState("New");
    const [invoice, setInvoice] = useState("No invoice");
    const router = useRouter();
    
    return (
        <ModalTemplate width="32rem" onClose={() => router.push("/profile/gerke.eth")}>
            <Centered>
                <ProductImage image={shoe}/>
            </Centered>
            <MainInfo name="Match-Up Sneaker" brand="Louis Vuitton"><div style={{fontSize: "1.2em"}}>$<PriceInput placeholder="123" /></div></MainInfo>
            <InputContainer>
                    <Label>Description</Label>
                    <TextArea placeholder="Your item description"></TextArea>
            </InputContainer>
            <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <InputContainer>
                    <Label>Condition</Label>
                    <InputDropdown values={conditions} value={condition} onChange={setCondition} error={undefined} id="1"/>
            </InputContainer>
            <InputContainer>
                    <Label>Invoice</Label>
                    <InputDropdown values={invoices} value={invoice} onChange={setInvoice} error={undefined} id="2"/>
            </InputContainer>
            </div>
            <div style={{marginTop: "1rem"}} onClick={() => router.replace("/item/1")}>
                <Centered>
                <ActionButton text="LIST FOR SALE" icon=""/>
                </Centered>
            </div>
        </ModalTemplate>    
    )
}

export default SellModal;


const InputContainer = styled.div`
    margin: 0rem 1rem 1rem 1rem;
`

const PriceInput = styled.input`
    width: 4.5rem;
    height: 2rem;
    margin-left: 0.3rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
    background-color: #F5F5F5;
    border: 1px solid #C0C0C0;
    outline: none;
    border-radius: 10px;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    font-size: 1em;
`