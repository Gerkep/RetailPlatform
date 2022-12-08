import shoe from "../public/img/lvshoe.png";
import styled from "styled-components";
import ActionButton from "../components/common/ActionButton";
import ProductImage from "../components/product/ProductImage";
import LoadingPage from "../components/common/LoadingPage";
import Navbar from "../components/common/Navbar";
import Centered from "../components/common/Centered";
import Label from "../components/common/Label";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const fileTypes = ["JPG", "PNG"];

const Product = () => {

    const [showCallendar, setShowCallendar] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const router = useRouter();

      const displayCallendar = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setShowCallendar(true)
      }

    return (
        <PageContainer>
            <Navbar showShare={true} showProfile={true} admin={false}/>
            <LoadingPage />
            <Centered>
                <ProductImage image={shoe}/>
            </Centered>
            <FirstRow>
                <InputContainer>
                    <Label>Product name</Label>
                    <DatePicker
                        className="appearance-none border border-black flex items-center justify-end block w-full h-10 mt-2 pl-2 pr-10 2xl:px-6 relative py-2 rounded-xl placeholder-white focus:outline-none text-md 2xl:text-2xl"
                        selected={date}
                        onChange={(date) => setDate(date!)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm aa"
                    />
                </InputContainer>
            </FirstRow>
            <InputContainer>
                    <Label>Description</Label>
                    <TextArea placeholder="Your item description"></TextArea>
            </InputContainer>
            <div style={{display: "flex"}}>
            <InputContainer>
                    <Label>Product name</Label>
                    <Input placeholder="New Product"></Input>
            </InputContainer>
            <InputContainer>
                    <Label>Price $</Label>
                    <PriceInput placeholder="123" />
            </InputContainer>
            <InputContainer>
                    <Label>Supply</Label>
                    <PriceInput placeholder="123" />
                </InputContainer>
            </div>
            <div onClick={() => router.replace("/drops")}>
                <ActionButton text="SCHEDULE DROP" icon=""/>
            </div>
        </PageContainer>
    )
}

export default Product;

const PageContainer = styled.div`
    padding-bottom: 7rem;
`

const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`
const InputContainer = styled.div`
    margin: 0rem 1rem 1rem 1rem;
`

const PriceInput = styled.input`
    width: 5rem;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
`

const Input = styled.input`
    width: 10rem;
    height: 2.4rem;
    margin-top: 0.5rem;
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    font-size: 1em;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 6rem;
    margin-top: 0.5rem;
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    font-size: 1em;
`