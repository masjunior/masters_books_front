'use client'
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <>
      <Row className="p-1">
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="EAN" src="/livros/EAN-9780375726262.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780593359266.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780802162021.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Ean" src="/livros/EAN-9780062968791.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780593422946.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Ean" src="/livros/EAN-9780804172707.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9781641294782.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9781913505684.jpeg" />
          </Link>
        </Col>
      </Row>
      <Row className="p-1">
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="EAN" src="/livros/EAN-9780375726262.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780593359266.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780802162021.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Ean" src="/livros/EAN-9780062968791.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9780593422946.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Ean" src="/livros/EAN-9780804172707.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" alt="Link EAN" src="/livros/EAN-9781641294782.jpeg" />
          </Link>
        </Col>
        <Col className="p-1">
          <Link href="/Pages/Selected_Item">
            <Image className="w-100 h-100" lt="Link EAN" src="/livros/EAN-9781913505684.jpeg" />
          </Link>
        </Col>
      </Row>
    </>
  );
};
