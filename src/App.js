import React from 'react'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddWorkout from "./components/AddWorkout.jsx";
import ListWorkouts from "./components/ListWorkouts.jsx";
import ReactDOM from 'react-dom'


function App() {

  return (
    < >
    <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="navbar">
              <Navbar.Brand href="/">Gym</Navbar.Brand>
              <Nav.Link href="/">List Workouts</Nav.Link>
              <Nav.Link href="addworkout">New Workout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br></br>
        <Switch>
          <Route path="/" exact component={() => <ListWorkouts />} />
          <Route path="/addworkout" exact component={() => <AddWorkout />} />
        </Switch>
    </Router>

    < />
  );
}
export default App;
