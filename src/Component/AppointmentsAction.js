import React from 'react'
import { Row,Col,Button } from 'react-bootstrap';

const AppointmentsAction = ({onDelete , showDate}) => {
  return (
    <Row className='justify-content-center my-3' >
        <Col sm='8' className='d-flex justify-content-between'>
        <Button variant="danger" className='p-2' onClick={()=>onDelete()} >Delete All</Button>
        <Button variant="secondary" className='p-2' onClick={()=>showDate()} >Show All</Button>
        </Col>
      </Row>
  )
}

export default AppointmentsAction