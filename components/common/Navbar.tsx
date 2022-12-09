import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/img/lvlogo.png";
import profileIcon from "../../public/img/icons/profileIcon.png"
import shareIcon from "../../public/img/icons/shareIcon.png"
import plusIcon from "../../public/img/icons/plusIcon.png";
import marketplaceIcon from "../../public/img/icons/marketplaceIcon.png";
import Link from "next/link";

const Navbar = (props: {showShare: boolean, showProfile: boolean, admin: boolean, home: boolean}) => {
    const {showShare, showProfile, admin, home} = props;

    return (
        <NavbarContainer>
            <Link href="/">
                <Image alt="logo" style={{width: "auto", height: "2rem"}} src={logo}></Image>
            </Link>
            <Navigation>
                {admin && 
                    <Link href="/add-drop">
                        <NavIcon>
                            <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={plusIcon}></Image>
                        </NavIcon>
                    </Link>
                }   
                {showShare && 
                    <NavIcon>
                        <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={shareIcon}></Image>
                    </NavIcon>
                }
                {showProfile && 
                    <Link href="/profile/gerke.eth">
                        <NavIcon>
                            <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={profileIcon}></Image>
                        </NavIcon>
                    </Link>
                }
                {!home && 
                    <Link href="/add-drop">
                        <NavIcon>
                            <Image alt="logo" style={{width: "auto", height: "1.7rem"}} src={marketplaceIcon}></Image>
                        </NavIcon>
                    </Link>
                }   
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
    margin-left: 1.5rem;
`