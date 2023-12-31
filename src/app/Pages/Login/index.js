'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


export const Login = () => {
  
  const [user, setUser] = useState(null)
  
    useEffect(() => {
      fetch('http://localhost:8080/mastersofbooks/clientes')
        .then(res => {
          console.log(`res: ${res.json}`);
          console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(`data: ${data}`);
          console.log("DATA: " + data);
          console.log(data);
          return setUser(data);
        });
    }, [])

  return (
    <>
      <Container className="p-4 mt-4 mb-4 align-items-center justify-content-center w-50 h-50 border border-2 rounded-4 border-black" >
        <Form>
          <Row className="p-1 ">
            <Col className="p1 d-flex align-items-center justify-content-center w-100 h-100">
              <p className="text-center fs-2 w-75 h-75"> Faça seu login com uma conta <strong>Masters of Books Store</strong></p>
            </Col>
          </Row>
          <Row className="p-1 w-100 h-100">
            <Col className="p1 d-flex align-items-center justify-content-center w-100 h-100">
              <Form.Group className="w-75 h-75" >
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email" placeholder="name@example.com"
                  id="email"
                  aria-describedby="email"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="p-1 w-100 h-100">
            <Col className="p-1 d-flex align-items-center justify-content-center w-100 h-100">
              <Form.Group className="w-75 h-75" >
                <Form.Label htmlFor="password">Senha</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  aria-describedby="password"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="p-4">
            <Col className="p-1 d-flex align-items-center justify-content-center w-100 h-100">
              <Button 
                className="button outline-primary h-50 w-50"
                // onClick={(e)=>{
                //   e.preventDefault();
                //   const { data, error, isLoading } = useSWR('http://localhost:8080/mastersofbooks/clientes', fetcher)
                //   if (error) return <div>falhou em carregar</div>
                //   if (isLoading) return <div>carregando...</div>
                //   return <div>Olá {data.name}!</div>
                // }}
                >
                <p className="text-center fs-3 ">Entrar</p>
              </Button>
            </Col>
          </Row>
          <Row className="p-4">
            <Col className="p-1 d-flex align-items-center justify-content-center w-100 h-100">
              <Button className="button outline-primary h-50 w-50" style={{backgroundColor: "#FFC72C"}}>
                <Link href="/Pages/Sign_In" className="h-100 w-100">
                  <p className="text-center text-dark">Não tem uma conta? Cadastre-se aqui</p>
                </Link>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

    </>

  );
};