import styled from "styled-components";
import Label from "../common/Label";
import searchIcon from "../../public/img/icons/searchIcon.png";
import Image from "next/image";

const MainInfo = (props: {owner: string, invoice: string, condition: string}) => {
    return (
        <ProductProps>
            <Prop>
                <Label>Owner</Label>
                    <PropValue>{props.owner}
                    <IconContainer>
                        <Image alt="product img" style={{width: "0.7rem", height: "0.7rem"}} src={searchIcon}></Image>
                    </IconContainer>
                </PropValue>
            </Prop>
            <Prop>
                <Label>Invoice</Label>
                <PropValue>{props.invoice}</PropValue>
            </Prop>
            <Prop>
                <Label>Condition</Label>
                <PropValue>{props.condition}</PropValue>
            </Prop>
        </ProductProps>
    )
}

export default MainInfo;

const ProductProps = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
`
const Prop = styled.div`
    margin: 1rem 2.5rem 1rem 0;
`

const PropValue = styled.p`
    font-weight: 500;
    font-size: 0.8em;
    display: flex;
`

const IconContainer = styled.div`
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
`