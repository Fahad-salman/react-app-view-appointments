import React from 'react'
import { Row ,Col} from 'react-bootstrap';

const AppointmentsList = ({ person }) => {
  return (
    <Row className='justify-content-center' >
        <Col sm='8' className=''>
        <div className='rectangle'>
          {person.length? person.map((e)=>{
            const image = e.imge
            const name = e.name
            const date = e.date
            const id = e.id
            return(
              <div key={id? id : Math.random()*1000} className='d-flex p-2 border-bottom mx-2 my-2'>
            <img src={image} alt='person' className='img-avatar ' />
            <div className='px-3' >
            <p className='d-inline fs-6' >{'Name : '+ name }</p>
            <p className='fs-6' >{'Date : '+ date }</p>
            </div>
          </div>
            )
          }) : <h1 className='text-center pt-4'>No Data Found 404</h1> }
        </div>
        </Col>
      </Row>
  )
}

export default AppointmentsList