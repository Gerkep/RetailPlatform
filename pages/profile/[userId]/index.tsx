import { useState } from "react";
import styled from "styled-components";
import BigPreview from "../../../components/product/BigPreview";
import shoe from "../../../public/img/lvshoe.png";
import bag from "../../../public/img/lvbag.png";
import Link from "next/link";
import LoadingPage from "../../../components/common/LoadingPage";
import Navbar from "../../../components/common/Navbar";

const Profile = () => {

    const [option, setOption] = useState("all");
    return (
        <>
        <ProfileContainer>
            <Navbar showProfile={false} admin={true}  showHome={true} showUpcoming={true}/>
            <LoadingPage />
            <ProfileHeader>
                <Username>gerke.eth</Username>
            </ProfileHeader>
            {option === "all" ? 
            <ProfileNavbar>
                <NavButtonSelected onClick={() => setOption("all")}>ALL ITEMS</NavButtonSelected>
                <NavButton onClick={() => setOption("listed")}>LISTED</NavButton>
            </ProfileNavbar>
            :
            <ProfileNavbar>
                <NavButton onClick={() => setOption("all")}>ALL ITEMS</NavButton>
                <NavButtonSelected onClick={() => setOption("listed")}>LISTED</NavButtonSelected>
            </ProfileNavbar>
            }
            {option === "all" ? 
             <OwnedProducts>
                <BigPreview image={shoe} name="Match-Up Sneaker" id="1"/>
                <BigPreview image={bag} name="LV bag" id="1"/>
                <BigPreview image={shoe} name="Match-Up Sneaker" id="1"/>
            </OwnedProducts>        
            :
            <NoProductsInfo>
                You have no listed items
            </NoProductsInfo>  
            }
        </ProfileContainer>
        </>
    )
}

export default Profile;

const ProfileContainer = styled.div`
    padding-bottom: 2rem;
`

const  ProfileHeader = styled.div`
    padding: 0rem 1.5rem 1.5rem 1.5rem;
    width: 100%;
    border-bottom: 1px #C7C7C7 solid;
`

const Username = styled.div`
    text-align: center;
    font-size: 1.2em;
    font-weight: 700;

`

const  ProfileNavbar = styled.div`
    padding: 0.5rem 1.5rem 1rem 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    position: sticky;
    margin-top: 1rem;
    top: 0rem;
    background-color: white;
`

const NavButton = styled.button`
    margin: 0rem 1.5rem 0rem 1.5rem;
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    color: #A8A8A8;
`
const NavButtonSelected = styled.button`
    margin: 0rem 1.5rem 0rem 1.5rem;
    padding: 0.5rem 0.5rem 0.3rem 0.5rem;
    border-bottom: black solid 2px;
    color: black;
`
const OwnedProducts = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const NoProductsInfo = styled.p`
    text-align: center;
    margin-top: 3rem;
    color: #A8A8A8;
`