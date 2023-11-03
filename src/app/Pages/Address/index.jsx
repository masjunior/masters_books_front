'use client'
import React, { useEffect } from "react";
import { Button, Col, Form, FormLabel, Image, Row } from "react-bootstrap";
import { useState } from 'react';
export const Address = () => {

  const [formData, setFormData] = useState({
    saveAddress: false,
    usedOldAddress: true,
    selectedOldAddress: '',
    country: [],
    cep: '',
    addressType: '',
    addressName: '',
    housingType: '',
    addressNumber: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    surname: ''
  });

  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/mastersofbooks/paises')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  const [typeResidences, setTypeResidences] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/mastersofbooks/tipoResidencias')
      .then(res => res.json())
      .then(data => setTypeResidences(data))
      ;
  }, [])

  const [states, setStates] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/mastersofbooks/estados')
      .then(res => res.json())
      .then(data => setStates(data))
      ;
  }, [])

  function listOption(object) {
    return object.map((o) => (
      <option key={o.id} value={o.id}>
        {o.nome? o.nome : o.descricao}
      </option>
    ));
  }
  

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
              <p className="text-center fs-3"> Informações para entrega </p>
            </Col>
          </Row>
          <Row className="p-1">
            <Col className="p1 col-md-auto">
              {formData.usedOldAddress ?
                <Form.Group>
                  <FormLabel htmlFor="selectedOldAddress" > Selecione o Endereço</FormLabel>
                  <Form.Select
                    name="selectedOldAddress"
                    id="selectedOldAddress"
                    onChange={handleChange}
                    defaultValue={formData.selectedOldAddress}
                    size="lg"
                    className="border border-black rounded-3 "
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="1">Endereço 1 - Avenida 111</option>
                    <option value="2">Endereço 2 - Rua 222</option>
                  </Form.Select>
                </Form.Group>
                :

                <div className="form-check form-switch">
                  <Row className=" justify-content-center">
                    <label className="form-check-label" htmlFor="saveAddress">Salvar endereço?</label>
                  </Row>
                  <Row className=" justify-content-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="saveAddress"
                      name="saveAddress"
                      defaultValue={formData.saveAddress}
                      checked={formData.saveAddress}
                      onChange={handleChangeSwitch}
                    />
                  </Row>
                </div>
              }
            </Col>
            <Col className="p1 col-md-auto justify-content-center">
              <div className="form-check form-switch">
                <Row className=" justify-content-center">
                  <label className="form-check-label" htmlFor="usedOldAddress">Usar endereço antigo?</label>
                </Row>
                <Row className=" justify-content-center">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="usedOldAddress"
                    name="usedOldAddress"
                    checked={formData.usedOldAddress}
                    onChange={handleChangeSwitch}
                  />
                </Row>
              </div>
            </Col>
          </Row>
          {!formData.usedOldAddress &&
            <>
              <Row className="p-1">
                <Col className="p1">
                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-4">
                      <Form.Group>
                        <FormLabel htmlFor="country"> Selecione o País</FormLabel>
                        <Form.Select
                          name="country"
                          onChange={handleChange}
                          size="sm"
                          className="border border-black rounded-3"
                          required
                          multiple={false}
                        >
                          <option value="">Selecione...</option>
                          {/* {countries && countries.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.nome}
                            </option>
                          ))} */}
                          {countries && listOption(countries)}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="p-1 col-2">
                      <Form.Group>
                        <FormLabel htmlFor="cep"> CEP</FormLabel>
                        <Form.Control
                          type="text"
                          id="cep"
                          name="cep"
                          className="border border-black rounded-3"
                          defaultValue={formData.cep}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col className="p-1 col-4">
                      <Form.Group>
                        <FormLabel htmlFor="addressType"> Tipo Logradouro</FormLabel>
                        <Form.Select
                          name="addressType"
                          id="addressType"
                          onChange={handleChange}
                          defaultValue={formData.addressType}
                          size="sm"
                          className="border border-black rounded-3"
                          required
                        >
                          <option value="">Selecione...</option>
                          <option value="1">Rua</option>
                          <option value="2">Avenida</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="p-1">
                    <Col className="p-1">
                      <Form.Group>
                        <FormLabel htmlFor="addressName"> Nome Logradouro</FormLabel>
                        <Form.Control
                          type="text"
                          id="addressName"
                          name="addressName"
                          aria-describedby="logradouro"
                          className="border border-black rounded-3"
                          defaultValue={formData.addressName}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-3">
                      <Form.Group>
                        <FormLabel htmlFor="housingType"> Tipo de residência </FormLabel>
                        <Form.Select
                          name="housingType"
                          id="housingType"
                          onChange={handleChange}
                          defaultValue={formData.housingType}
                          size="sm"
                          className="border border-black rounded-3"
                          required
                        >
                          <option value="">Selecione...</option>
                          {typeResidences && listOption(typeResidences)}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col className="p-1 col-2">
                      <Form.Group>
                        <FormLabel htmlFor="addressNumber"> Número </FormLabel>
                        <Form.Control
                          type="number"
                          id="addressNumber"
                          name="addressNumber"
                          className="border border-black rounded-3"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col className="p-1 col-6">
                      <Form.Group>
                        <FormLabel htmlFor="neighborhood"> Bairro </FormLabel>
                        <Form.Control
                          type="text"
                          id="neighborhood"
                          name="neighborhood"
                          className="border border-black rounded-3"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-7">
                      <Form.Group>
                        <FormLabel htmlFor="city"> Cidade </FormLabel>
                        <Form.Control
                          type="text"
                          id="city"
                          name="city"
                          className="border border-black rounded-3"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col className="p-1 col-4">
                      <Form.Group>
                        <FormLabel htmlFor="state"> Estado </FormLabel>
                        <Form.Select
                          name="state"
                          onChange={handleChange}
                          defaultValue={formData.state}
                          size="sm"
                          className="border border-black rounded-3"
                          required
                        >
                          <option value="">Selecione...</option>
                          {states && listOption(states)}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-12">
                      <Form.Group>
                        <FormLabel htmlFor="complement"> Complemento </FormLabel>
                        <Form.Control
                          type="text"
                          id="complement"
                          name="complement"
                          className="border border-black rounded-3"
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="p-1 justify-content-between">
                    <Col className="p-1 col-12">
                      <Form.Group>
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
                </Col>
              </Row>
            </>

          }
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
