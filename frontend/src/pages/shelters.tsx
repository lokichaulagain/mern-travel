import React from 'react'
import ShelterAvailabilityForm from '../components/shelter/ShelterAvailabilityForm'
import ShelterLocation from '../components/shelter/ShelterLocation'

function Shelters() {
  return (
    <div>
        <ShelterLocation/>
        <ShelterAvailabilityForm/>
    </div>
  )
}

export default Shelters