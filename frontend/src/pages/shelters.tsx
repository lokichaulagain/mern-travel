import React from 'react'
import ShelterAvailabilityForm from '../components/ShelterAvailabilityForm'
import ShelterLocation from '../components/ShelterLocation'

function Shelters() {
  return (
    <div>
        <ShelterLocation/>
        <ShelterAvailabilityForm/>
    </div>
  )
}

export default Shelters