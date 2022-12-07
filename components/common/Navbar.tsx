import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/lvlogo.png";
import profileIcon from "../../public/img/icons/profileIcon.png"
import shareIcon from "../../public/img/icons/shareIcon.png"

const Navbar = () => {
    return (
        <NavbarContainer>
            <Image alt="logo" style={{width: "auto", height: "2rem"}} src={logo}></Image>
            <Navigation>
                <NavIcon>
                    <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={shareIcon}></Image>
                </NavIcon>
                <NavIcon>
                    <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={profileIcon}></Image>
                </NavIcon>
            </Navigation>
        </NavbarContainer>
    )
}

export default Navbar;

const NavbarContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
`

const NavIcon = styled.div`
    margin-left: 1.2rem;
`