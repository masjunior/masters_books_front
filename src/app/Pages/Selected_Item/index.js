'use client'
import React, { useId, useState } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";

export const SelectedItem = () => {
  const [formData, setFormData] = useState({
    id: useId(),
    selectedQuantity: 1,
    author: 'Dolly Alderton',
    name: 'Everything I Know About',
    nameComplement: 'Love: A Memoir',
    imageResource: '/livros/EAN-9780062968791.jpeg',
    storageQuantity: 5,
    detail: 'Detalhes do produto',
    gtin: '9780062968791',
    publisher: 'Harper Perennial',
    binding: 'Paperback',
    pages: '384',
    weight: '0,62',
    length: '7,9',
    width: '5,3',
    height: '1',
    unityValue: '88,99',
    totalValue: '88,99',
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
    <Form>
      <Row className="p-1">
        <Col className="p-1">
          <h3 className="text-center p-5" name="author" id="author" >{formData.author}</h3>
          <h4 className="text-center p-5" name="name" id="name">{formData.name}</h4>
          <h4 className="text-center p-5" name="nameComplement" id="nameComplement">{formData.nameComplement}</h4>
          <input type="hidden" value="id_1" id="id_1"/>
        </Col>

        <Col className="p-1">
          <Image className="w-100 h -100" alt="Ean" src={formData.imageResource} />
        </Col>

        <Col className="p-1 d-grid">
          <Row className="p-1">
            <h2 className="text-center">{`${formData.storageQuantity} itens em estoque!`}</h2>
          </Row>
          <Row className="p-1">
            <Col className="p-1">
              <Row className="p-1">
                <p className="text-center fs-4">Quantidade selecionada:</p>
              </Row>
              <Row className="p-1">
                <Col className="p-1">
                  <Row className="p-1">
                    <Col className="p-1 d-flex align-items-center justify-content-center">
                      <Button
                        variant="outline-danger rounded-circle d-auto border border-0 w-50"
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          const valueSelected = formData.selectedQuantity;
                          const valueStorage = formData.storageQuantity;
                          setFormData(prevState => ({
                            ...prevState,
                            selectedQuantity: valueSelected == 0 ? 0 : valueSelected - 1,
                            storageQuantity: valueSelected != 0 ? valueStorage + 1 : valueStorage,
                            totalValue: valueSelected != 0 ? ((formData.selectedQuantity - 1) * Number(String(formData.unityValue).replace(",","."))).toLocaleString('pt-BR') : formData.totalValue
                          }));
                        }}
                      >
                        <Image className="w-100 h-100" alt="Button search" src="/icons/Remove_duotone_line.png" />
                      </Button>
                    </Col>
                    <Col className="p-1 p-1 d-flex align-items-center justify-content-center">
                      <p className="text-center fs-2" name="selectedQuantity" id="selectedQuantity" > {formData.selectedQuantity} </p>
                    </Col>
                    <Col className="p-1 d-flex align-items-center justify-content-center">
                      <Button
                        variant="outline-primary rounded-circle d-auto border border-0 w-50"
                        type="button"
                        onClick={(event) => {
                          event.preventDefault();
                          const valueSelected = formData.selectedQuantity;
                          const valueStorage = formData.storageQuantity;
                          setFormData(prevState => ({
                            ...prevState,
                            selectedQuantity: valueStorage == 0 ? valueSelected : valueSelected + 1,
                            storageQuantity: valueStorage == 0 ? 0 : valueStorage - 1,
                            totalValue: valueStorage != 0 ? ((formData.selectedQuantity + 1 ) * Number(String(formData.unityValue).replace(",","."))).toLocaleString('pt-BR') : formData.totalValue
                          }));
                        }}
                      >
                        <Image className="w-100 h-100" alt="Button search" src="/icons/Add_round_duotone_line.png" />
                      </Button>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="p-4">
            <Button
              className="button outline-primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                logar(formData);
              }}
            >
              <p className="text-center fs-2">Adicione ao Carrinho</p>
            </Button>
          </Row>
          <Row className="p-4">
            <p className="text-center fs-2">{`R$ ${Number(String(formData.totalValue).replace(",",".")).toLocaleString('pt-BR')}`}</p>
          </Row>
        </Col>
      </Row>
      <Row className="p-1 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#EAEDCC" }}>
        <h4 className="text-center p-2" name="detail" id="detail" >{formData.detail}</h4>
        <p className="text-center p-2" name="gtin" id="gtin">{`GTIN-${(formData.gtin).length}: ${formData.gtin}`}</p>
        <p className="text-center p-2" name="publisher" id="publisher">{`Editora: ${formData.publisher}`}</p>
        <p className="text-center p-2" name="binding" id="binding">{`Encadernação: ${formData.binding}`}</p>
        <p className="text-center p-2" name="pages" id="pages">{`Paginas: ${formData.pages}`}</p>
        <p className="text-center p-2" name="weight" id="weight">{`Peso: ${formData.weight} kg`}</p>
        <p className="text-center p-2" name="dimensions" id="dimensions">{`Dimensões: (Comprimento x Largura x Altura): ${formData.length} x ${formData.width} x ${formData.height}`}</p>
      </Row>
    </Form>
  );
};
