import styled from "styled-components";
import Centered from "../common/Centered";
import Label from "../common/Label";
import ModalTemplate from "./common/ModalTemplate";
import ModalTitle from "./common/ModalTitle";

const Login = ({onSubmit}: any) => {
    return (
        <ModalTemplate>
            <ModalTitle>Sign in</ModalTitle>
            <Centered>
            <InputContainer>
                <Label>Username</Label>
                <Input placeholder="Username"></Input>
            </InputContainer>
            <InputContainer>
                <Label>Password</Label>
                <Input placeholder="Password"></Input>
            </InputContainer>
            <LoginButton>Sign in</LoginButton>
            </Centered>
        </ModalTemplate>
    )
}

export default Login;

const InputContainer = styled.div`
    margin: 0rem 0rem 1rem 0rem;
    width: 80%;
`

const Input = styled.input`
    width: 100%;
    height: 2rem;
    margin-top: 0.3rem;
    background-color: #F2F2F2;
    border: 1px solid #A1A1A1;
    outline: none;
    border-radius: 10px;
    padding-left: 0.5rem;
    font-size: 1em;
`

const LoginButton = styled.button`
    margin-top: 1rem;
    background-color: black;
    color: white;
    width: 70%;
    padding: 0.5rem 0 0.5rem 0;
    border-radius: 10px;
    font-weight: 900;
    text-align: center;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`