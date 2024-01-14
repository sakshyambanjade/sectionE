import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
    
  const [openBasic, setOpenBasic] = useState(false);
  
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='./' class="text-primary">Section-E</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Team
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='./team1'>Team-1</MDBDropdownItem>
                  <MDBDropdownItem link href='./team2'>Team-2</MDBDropdownItem>
                  <MDBDropdownItem link href='./team3'>Team-3</MDBDropdownItem>
                  <MDBDropdownItem link href='./team4'>Team-4</MDBDropdownItem>
                  <MDBDropdownItem link href='./team5'>Team-5</MDBDropdownItem>
                  <MDBDropdownItem link href='./team6'>Team-6</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
