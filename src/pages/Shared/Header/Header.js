import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)   /* react firebase hook use korar somoy amra jodi user ke proyojon hoy tahole amra react firebase hook er ei method ta use korbo.ebong amader config e auth ke setting kore export kore rakhte hobe obosshoi. */
    const navigate = useNavigate()
    const handleSignOut = () => {
        navigate("/login")
        signOut(auth)

    }



    return (
        <Navbar style={{ height: "100px" }} collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
            <Container>


                <Navbar.Brand as={CustomLink} to="/">   {/* as diye amra kono href ke Link e convert korte pari evabe. */}
                    <img
                        height={30} src={logo} alt="" />
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home#services">Services</Nav.Link>    {/* amra jodi ekta page e thaki ebong ekta kichute click korle seta amader page er jekhane amra jete chai sekhane jump korbe tahole setake ekta id dite hobe ebong setart id ta href er moddhe dite hobe.mane kono ekta section theke arekta section e jump mara.eta html o react sob jaygay same . */}
                        <Nav.Link href="/home#experts">Experts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
                <Nav>
                    {
                        user ? <button onClick={handleSignOut} className="signout-btn">Sign Out</button>
                            : <Nav.Link as={CustomLink} to={"/login"}>Login</Nav.Link>
                    }

                    <Nav.Link as={CustomLink} to={"/about"}>    {/* evabe amra bootstrap  er link default behaviour change korte pari. */}
                        About
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>

    );
};

export default Header;