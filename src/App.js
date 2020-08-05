import React from "react";
import MGCalc from "./components/MGCalc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function App() {
  return (
    <Container style={{ backgroundColor: "#888", height: "100vh" }}>
      <Row>
        <MGCalc />
      </Row>
    </Container>
  );
}
