import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MGCalc() {
  return (
    <Card style={{ width: "25rem", margin: "20% auto 0 auto" }}>
      <Card.Header as="h3" className="text-center bg-primary">
        Margin Guides Calculator
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <Row>
            <Col>
              <Form.Label>Doc Width</Form.Label>
              <Form.Control type="text" placeholder="Width" />
            </Col>
            <Col>
              <Form.Label>Doc Height</Form.Label>
              <Form.Control type="text" placeholder="Height" />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Form.Label>H.Divs (L-R)</Form.Label>
              <Form.Control type="text" value="1" />
            </Col>
            <Col>
              <Form.Label>V.Divs (T-B)</Form.Label>
              <Form.Control type="text" value="1" />
            </Col>
            <Col>
              <Form.Label>Margins</Form.Label>
              <Form.Control type="text" placeholder="Margins" />
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
