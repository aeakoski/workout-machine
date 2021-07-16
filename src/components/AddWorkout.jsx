import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddWorkout() {
  let state = {
    name: "",
    time: "",
    collection: ""
  };
  // TODO State dont get updated. Investigate why. Server recieves an empty object as a body
  const handleSubmit = (event) => {

    console.log("Handelingevent");
    let baseUrl = ""
    if (window.location.href.includes("localhost:3000")){
      baseUrl = "http://localhost:8899/"
    }

    console.log(state);
    fetch(baseUrl + 'api/new', {
        method: 'POST',
        body: "asdgasdg"//JSON.stringify({"toodeloo": "1337"})
      }).then(function(response) {
        console.log(response)
      });
      event.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" value={state.name}>
          <Form.Label>Workout name</Form.Label>
          <Form.Control type="text" placeholder="E.g System X bugfixes" />
        </Form.Group>
        <Form.Group className="mb-3" value={state.time}>
          <Form.Label>How often to workout</Form.Label>
          <Form.Control type="text" placeholder="*/15 * * * *" />
        </Form.Group>
        <Form.Group className="mb-3" value={state.collection}>
          <Form.Label>Collection json</Form.Label>
          <Form.Control as="textarea" rows={3}  placeholder="{ ... }"/>
        </Form.Group>
        <Button variant="secondary">
          Test workout session
        </Button>{' '}
        <Button variant="primary" type="submit">
          Submit workout
        </Button>
      </Form>
    </Container>
  );
}

export default AddWorkout;
