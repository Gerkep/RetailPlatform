import styled from "styled-components";
import PageTitle from "../components/common/PageTitle";
import LongPreview from "../components/product/LongPreview";
import lvshoe from "../public/img/lvshoe.png";
import lvbag from "../public/img/lvbag.png";
import Navbar from "../components/common/Navbar";

const Upcoming = () => {
    return (
        <div>
            <Navbar showProfile={true} admin={true} showHome={true} showUpcoming={false}/>
            <TitleContainer>
                <PageTitle>Upcoming</PageTitle>
            </TitleContainer>
            <Feed>
                <LongPreview date={new Date(new Date().getTime() - (24 * 60 * 60 * 1000))} image={lvbag} productName="LV Premium Bag" id="1"/>
                <LongPreview date={new Date(new Date().getTime() + (24 * 60 * 60 * 1000))} image={lvshoe} productName="Match-Up Sneaker" id="1"/>
            </Feed>
        </div>
    )
}

export default Upcoming;

const TitleContainer = styled.div`
    padding: 0.5rem 1.5rem 1rem 1.5rem;
`

const Feed = styled.div`
    margin: 0 auto; 
    width: 95%;
    margin-top: 1rem;
`