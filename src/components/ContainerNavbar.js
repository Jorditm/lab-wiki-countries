import React, { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';

const ContainerNavbar = () => {
  return (
    <Fragment>
      <Navbar bg="light" expand="md">
        <Navbar.Brand>Wiki Countries</Navbar.Brand>
      </Navbar>
    </Fragment>
  );
};

export default ContainerNavbar;
