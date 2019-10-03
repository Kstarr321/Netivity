import React, { Component } from "react";
import styled from "styled-components";
import {
  Collapse,
  Button,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const NavWrapper = styled.div`
  height: 74px;
`;

const Wrapper = styled.div`
  margin-left: 230px;
  .brand {
    font-size: 40px;
  }
`;

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <NavWrapper>
        <Navbar color="" light expand="md">
          <Wrapper>
            <NavbarBrand href="/" className="brand">
              Netivity
            </NavbarBrand>
          </Wrapper>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">
                  <Button color="info" size="lg">
                    About
                  </Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <Button color="info" size="lg">
                    Services
                  </Button>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Button color="info" size="lg">
                    More
                  </Button>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Contact</DropdownItem>
                  <DropdownItem>Connections</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <hr></hr>
        </Navbar>
      </NavWrapper>
    );
  }
}
