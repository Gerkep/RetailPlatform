import styled from "styled-components";

const ModalTemplate = ({onClose, children}: any) => {
    return (
        <>
            <BlurBackground onClick={() => onClose()}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    {children}
                </ModalContainer>
            </BlurBackground>
        </>
    )
}

export default ModalTemplate;

const BlurBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 101;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ModalContainer = styled.div`
    width: 90vw;
    position: relative;
    background-color: white;
    cursor: auto;
    overflow: hidden;
    border-radius: 10px;
    padding: 2rem 1.5rem 2rem 1.5rem;
    overflow: scroll;
    @media only screen and (min-width: 768px) {
        width: 45vw;
    }
`