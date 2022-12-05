import styled from 'styled-components';

const PageTitle = (props: any) => {
    return(
        <Title>
            {props.children}
        </Title>
    )
}

export default PageTitle;

const Title = styled.div`
    font-size: 7vw;
    line-height: 12vw;
    font-weight: bold;
`