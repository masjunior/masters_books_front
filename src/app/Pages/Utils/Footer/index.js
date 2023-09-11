import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
    return (
        <Container className="w-100 h-100 " style={{backgroundColor: "#213d3f"}}>
            <Row className="w-100 h-100">
                <Col className="d-flex align-items-center justify-content-center">
                    <p className="text-center fs-5 text-light">© Copyright 2023 Book Masters Store All Rights Reserved / Privacy Policy</p>
                </Col>
            </Row>
        </Container>
    );
};
