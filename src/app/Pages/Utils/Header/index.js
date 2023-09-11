import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Link from "next/link";

export const Header = () => {
  return (
    <Container className="w-100 h-100 " fluid style={{backgroundColor:"#EDF2F6"}}>
      <Row className="w-100 h-100">
        <Col>
          <Link href="/Pages/Home_Page">
            <Image className="w-50 h-100" alt="Logo masters of" src="/utils/Logo.png" fluid />
          </Link>
        </Col>
        <Col className="d-flex align-items-center">
          <Form.Control className="me-auto" placeholder="Pesquise seu item aqui" />
          <Button variant="outline-danger" style={{ backgroundColor: '#AF272F' }}>
            <Image alt="Button search" src="/icons/search.svg" style={{ backgroundColor: '#AF272F', borderRadius: '0  10px 10px 0' }} />
          </Button>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <Link href="/Pages/Login">
            <Image className="p-2" alt="Div navbardesktop" src="/icons/button-account.svg" />
          </Link>
          <Link href="/Pages/Cart">
            <Image className="p-2" alt="Div navbardesktop" src="/icons/cart.svg" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
