import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Data from './db.json'

import {Container, Row, Col, Modal, Button, Card} from 'react-bootstrap';
import PostForm from "./PostForm";

function Modalup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="my-3" variant="primary" onClick={handleShow}>
        Add a Note
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Please fill in the following fields to post a note
         <PostForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
      <Row>
          <Col className="text-end">
            <h1 className="my-5 text-start float-left">Notes</h1><Modalup />
          </Col>
      </Row>
      <Row>
          <Col className="text-start">
              { Data.map(post => {
                return(
              <Card className="my-3">
              <Card.Body>
                <Card.Title className="text-muted">By {post.user}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{new Date(post.createdAt).toDateString()}</Card.Subtitle>
                <Card.Text className="text-muted">
                {post.note}
                </Card.Text>
                <Card.Text className="text-muted text-end h6">
                Note No. {post.id}
                </Card.Text>
              </Card.Body>
              </Card>
                )
                })}

          <Col className="text-end">
            <Modalup />
          </Col>
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default App;
