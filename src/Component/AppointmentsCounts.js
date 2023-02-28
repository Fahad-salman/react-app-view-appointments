import React from 'react'
import { Row , Col} from 'react-bootstrap';

const AppointmentsCounts = ({ person }) => {
  return (
    <Row className='justify-content-center my-2' >
    <Col sm='8' className=''>
    You have {person.length} appointments
    
    </Col>
  </Row>
  )
}

export default AppointmentsCounts