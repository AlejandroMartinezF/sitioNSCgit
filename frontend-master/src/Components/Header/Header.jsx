import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Logo from '../../img/logo.svg'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/home">
          <img src={Logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home"><i class="fas fa-home"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">¿Quiénes somos?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services">¿Qué ofrecemos?</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/components/">Mercado</NavLink>
            </NavItem> */}
            <NavItem>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link w-color font-weight-bold" caret>
                  ¿Qué compartimos?
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag="a" href="/media">Media</DropdownItem>
                  <DropdownItem tag="a" href="/news-podcasts">Noticias y Podcasts</DropdownItem>
                  <DropdownItem tag="a" href="/links">Ligas de interés</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">¿Cómo contactarnos?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FAQ">Preguntas frecuentes</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;