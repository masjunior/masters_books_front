'use client'
import React from "react";
import { Button, Col, Form, FormLabel, Image, Row, Stack } from "react-bootstrap";
import { useState } from 'react';
export const Payment = () => {

  const [formData, setFormData] = useState({
    saveCreditCard: false,
    usedOldCreditCard: true,
    selectedOldCrediCard: '',
    flag: '',
    nameCreditCard: '',
    expiredDate: '',
    numberCreditCard: '',
    surname: '',
    giftCard:'',
    cvv:''
  });

  function logar(x) {
    console.log(x)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value

    }));
  }
  const handleChangeSwitch = (event) => {
    const { name, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: checked
    }));
  }
  return (
    <Row className="p-1 justify-content-between">
      <Col className="p-1 d-grid align-items-center justify-content-center border border-black rounded-3 m-1">
        <Form>
          <Row className="p-1 ">
            <Col className="p1 d-flex align-items-center justify-content-center w-100 h-100">
              <p className="text-center fs-3">Forma de pagamento</p>
            </Col>
          </Row>
          <Row className="p-1 justify-content-around">
              {formData.usedOldCreditCard ?
                <Col className="p1 col-md-auto">
                  <Row className="p-1">
                    <Form.Group className="p-1">
                      <FormLabel htmlFor="selectedOldCrediCard" className="p-1"> Selecione o cartão</FormLabel>
                      <Form.Select
                        name="selectedOldCrediCard"
                        id="selectedOldCrediCard"
                        onChange={handleChange}
                        defaultValue={formData.selectedOldCrediCard}
                        size="lg"
                        className="border border-black rounded-3 "
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="1">Cartão 1- 4554-****-****-3333</option>
                        <option value="2">Cartão 2- 4554-****-****-2222</option>
                      </Form.Select>
                    </Form.Group>                 
                  </Row>
                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-4">
                      <Form.Group className="p-2">
                        <FormLabel htmlFor="cvv" className="p-1"> CVV </FormLabel>
                        <Form.Control
                          type="text"
                          id="cvv"
                          name="cvv"
                          className="p-1 border border-black rounded-3"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
                :
                <Col className="p-1 col-md-auto justify-content-center">
                  <div className="p-1 form-check form-switch">
                    <Row className="p-2 justify-content-center">
                      <label className="p-1 form-check-label" htmlFor="saveCreditCard">Salvar novo cartão?</label>
                    </Row>
                    <Row className="p-1 justify-content-center">
                      <input
                        className="p-1 form-check-input"
                        type="checkbox"
                        role="switch"
                        id="saveCreditCard"
                        name="saveCreditCard"
                        defaultValue={formData.saveCreditCard}
                        checked={formData.saveCreditCard}
                        onChange={handleChangeSwitch}
                      />
                    </Row>
                  </div>
                </Col>
              }
            <Col className="p-1 col-md-auto justify-content-center">
              <div className="p-1 form-check form-switch">
                <Row className="p-2 justify-content-center">
                  <label className="p-1 form-check-label" htmlFor="usedOldCreditCard">Usar cartão cadastrado?</label>
                </Row>
                <Row className="p-1 justify-content-center">
                  <input
                    className="p-1 form-check-input"
                    type="checkbox"
                    role="switch"
                    id="usedOldCreditCard"
                    name="usedOldCreditCard"
                    checked={formData.usedOldCreditCard}
                    onChange={handleChangeSwitch}
                  />
                </Row>
              </div>
            </Col>
          </Row>
          {!formData.usedOldCreditCard &&
            <>
              <Row className="p-1">
                <Col className="p-1">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="nameCreditCard"> Nome cadastrado no cartão</FormLabel>
                    <Form.Control
                      type="text"
                      id="nameCreditCard"
                      name="nameCreditCard"
                      aria-describedby="logradouro"
                      className="border border-black rounded-3"
                      defaultValue={formData.nameCreditCard}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="p-1 justify-content-between">
                <Col className="p-1 col-12">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="numberCreditCard"> Número do cartão </FormLabel>
                    <Form.Control
                      type="text"
                      id="numberCreditCard"
                      name="numberCreditCard"
                      className="border border-black rounded-3"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>




              <Row className="p-1 justify-content-between">
                <Col className="p-1 col-4">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="expiredDate" className="p-1"> Data expiração </FormLabel>
                    <Form.Control
                      type="text"
                      id="expiredDate"
                      name="expiredDate"
                      className="p-1 border border-black rounded-3"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col className="p-1 col-2">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="cvv" className="p-1"> CVV </FormLabel>
                    <Form.Control
                      type="text"
                      id="cvv"
                      name="cvv"
                      className="p-1 border border-black rounded-3"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col className="p-1 col-6">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="flag" className="p-1"> Selecione a bandeira</FormLabel>
                    <Form.Select
                      name="flag"
                      onChange={handleChange}
                      defaultValue={formData.flag}                      
                      className="p-1 border border-black rounded-3"
                      required
                    >
                      <option value="">Selecione...</option>
                      <option value="1">MasterCard</option>
                      <option value="2">Visa</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="p-1 justify-content-between">
                <Col className="p-1 col-12">
                  <Form.Group className="p-2">
                    <FormLabel htmlFor="surname"> Apelido </FormLabel>
                    <Form.Control
                      type="text"
                      id="surname"
                      name="surname"
                      className="border border-black rounded-3"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>

          }
          <Row className="p-1">
            <Col className="p-2 col-8">
              <Form.Group className="p-1">
                <FormLabel htmlFor="giftCard" className="p-1"> Cupom </FormLabel>
                <Form.Control
                  type="text"
                  id="giftCard"
                  name="giftCard"
                  className="p-1 border border-black rounded-3"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Form.Group as={Col} className="pt-4 pb-4 col-4">
              <Row className="pt-4 pb-4">
                <Button 
                type="submit"
                className="button outline-primary w-50"
                onClick={(e) => {
                  e.preventDefault();
                  logar(formData);
                }}
                > Aplicar</Button>
              </Row>
            </Form.Group>  
          </Row>
          <Row className="p-4 ">
            <Col className="p-4 d-grid align-self-center">
              <Button
                type="submit"
                className="button outline-primary"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  logar(formData);
                }}
              >
                <p className="text-center fs-2">Continuar</p>
              </Button>
            </Col>
          </Row>

        </Form>
      </Col>
      <Col className="p-1 d-grid border border-black rounded-3 m-1">
        <Row className="p-4">
          <Col className="p-1">
            <Row className="p-1">
              <Image className="w-75 h -75" alt="Ean" src="/livros/EAN-9780062968791.jpeg" />
            </Row>
          </Col>
          <Col className="p-1 align-self-center">
            <Row className="p-1">
              <h4 className="text-center p-1 ">Dolly Alderton</h4>
              <h5 className="text-center p-1">Everything I Know About</h5>
              <h5 className="text-center p-1">Love: A Memoir</h5>
            </Row>
            <Row className="p-4">
              <p className="text-center fs-2">R$88,99</p>
            </Row>
          </Col>
        </Row>
        <Row className="p-1 justify-content-between">
          <Col>
            <p className="text-center">Subtotal:</p>
          </Col>
          <Col>
            <p className="text-center">R$89,99</p>
          </Col>
        </Row>
        <Row className="p-1 justify-content-between">
          <Col>
            <p className="text-center">Frete:</p>
          </Col>
          <Col>
            <p className="text-center">-</p>
          </Col>
        </Row>
        <Row className="p-1 justify-content-between">
          <Col>
            <p className="text-center">Adicionais</p>
          </Col>
          <Col>
            <p className="text-center">-</p>
          </Col>
        </Row>
        <Row className="p-1 justify-content-between">
          <Col>
            <p className="text-center">Cupons</p>
          </Col>
          <Col>
            <p className="text-center">-</p>
          </Col>
        </Row>
        <Row className="p-1 justify-content-between">
          <Col>
            <p className="text-center"><strong>Total</strong></p>
          </Col>
          <Col>
            <p className="text-center"><strong>R$89,99</strong></p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
