import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>
    <MDBNav className="nav-tabs mt-5">
      <MDBNavItem>
        <MDBNavLink active to="/">
          COVID-19 MEDIA
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/about">About</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/contact">Contact</MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  </BrowserRouter>
);
