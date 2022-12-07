import styled from "styled-components";
import Image from "next/image";
import Centered from "./Centered";

const ActionButton = ({text, icon}: any) => {
    return (
        <Centered>
            {icon ?
             <Button>
                <Image alt="buy icon" style={{width: "1.2rem", height: "1.2rem", marginRight: "1rem"}} src={icon}></Image>
                {text}
             </Button>    
             :
             <Button>
                {text}
             </Button>       
            }
        </Centered>
    )
}

export default ActionButton;

const Button = styled.button`
    position: fixed;
    bottom: 1rem;
    background-color: black;
    color: white;
    width: 90%;
    padding: 0.7rem 0 0.7rem 0;
    border-radius: 10px;
    font-weight: 900;
    text-align: center;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.4);
    cursor: pointer;
`