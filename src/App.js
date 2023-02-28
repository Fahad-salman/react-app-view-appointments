import './App.css';
import React, { useState, useEffect } from 'react';
import { person } from './Component/AppointmentsData';
import { Container } from 'react-bootstrap';
import AppointmentsCounts from './Component/AppointmentsCounts';
import AppointmentsList from './Component/AppointmentsList';
import AppointmentsAction from './Component/AppointmentsAction';


function App() {
  const [appointmentData, setAppointmentData] = useState(person);
  useEffect(() => {
    setAppointmentData([])
  }, [])
  const onDelete = () => {
    setAppointmentData([])
  }
  const showDate = () => {
    setAppointmentData(person)
  }
  return (
    <div className='font background'>
      <Container className='py-5'>
        <AppointmentsCounts person={appointmentData} />
        <AppointmentsList person={appointmentData} />
        <AppointmentsAction onDelete={onDelete} showDate={showDate} />
      </Container>
    </div>
  );
}

export default App;
