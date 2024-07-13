import { Container, Navbar as NavbarBs, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar(){
    return(
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
            <Nav>
                <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                <Nav.Link to={'/market'} as={NavLink}>Market</Nav.Link>
                <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
            </Nav>
            </Container>
        </NavbarBs>
    )
}