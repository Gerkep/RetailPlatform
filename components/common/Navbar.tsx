import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/lvlogo.png";
import profileIcon from "../../public/img/icons/profileIcon.png"
import shareIcon from "../../public/img/icons/shareIcon.png"
import plusIcon from "../../public/img/icons/plusIcon.png";
import marketplaceIcon from "../../public/img/icons/marketplaceIcon.png";
import calendarIcon from "../../public/img/icons/calendarBlackIcon.png";
import Link from "next/link";

const Navbar = (props: {showProfile: boolean, admin: boolean, showHome: boolean, showUpcoming: boolean}) => {
    const {showProfile, admin, showHome, showUpcoming} = props;

    return (
        <NavbarContainer>
            <Link href="/">
                <Logo>
                    <Image alt="logo" style={{width: "auto", height: "2rem"}} src={logo}></Image>
                </Logo>
            </Link>
            <Navigation>
                {admin &&
                    <Link href="/add-drop">
                        <NavIcon>
                            <Image alt="logo" style={{width: "auto", height: "1.5rem"}} src={plusIcon}></Image>
                        </NavIcon>
                    </Link>
                }
                <Link href="/profile/gerke.eth">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "1.5rem"}} src={profileIcon}></Image>
                    </NavIcon>
                </Link>
                <Link href="/upcoming">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "1.5rem"}} src={calendarIcon}></Image>
                    </NavIcon>
                </Link>
                <Link href="/">
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "1.5rem"}} src={marketplaceIcon}></Image>
                    </NavIcon>
                </Link>
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
    @media (min-width: 768px) {
        background-color: black;
        padding: 1.5rem;
    }
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
`

const NavIcon = styled.div`
    margin-left: 1.5rem;
    @media (min-width: 768px) {
        filter: invert(1);
        margin-left: 2.5rem;
    }
`
const Logo = styled.div`
    @media (min-width: 768px) {
        filter: invert(1);
    }
`