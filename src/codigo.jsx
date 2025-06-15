import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cp, setCp] = useState('');
  const [telefono, setTelefono] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Formulario enviado:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Edad: ${edad}`);
    console.log(`Ocupación: ${ocupacion}`);
    console.log(`Dirección: ${direccion}`);
    console.log(`CP: ${cp}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Celular: ${celular}`);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="mx-auto">
          <h2>Formulario de registro</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="edad">
              <Form.Label>Edad</Form.Label>
              <Form.Control
                type="number"
                value={edad}
                onChange={(event) => setEdad(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="ocupacion">
              <Form.Label>Ocupación</Form.Label>
              <Form.Control
                type="text"
                value={ocupacion}
                onChange={(event) => setOcupacion(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="direccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                value={direccion}
                onChange={(event) => setDireccion(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="cp">
              <Form.Label>CP</Form.Label>
              <Form.Control
                type="text"
                value={cp}
                onChange={(event) => setCp(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="celular">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="tel"
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;
