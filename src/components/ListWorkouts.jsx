import React from "react";
import Container from 'react-bootstrap/Container';

import Table from 'react-bootstrap/Table';
function ListWorkouts() {
  return (
    <Container>
    <Table striped bordered hover>
<thead>
  <tr>
    <th>#</th>
    <th>Workout Name</th>
    <th>Result</th>
    <th>Last workout</th>
    <th>Next workout</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>@mdo</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
    <td>@fat</td>
    <td>@fat</td>
  </tr>

</tbody>
</Table>
    </Container>
  );
}

export default ListWorkouts;
