import React from 'react'
import AppointmentCardParent from '../../components/AppointmentCardParent'

function ProfessionalAllAppointments() {

    const picLink = 'https://hips.hearstapps.com/hmg-prod/images/best-small-dog-breeds-chihuahua-1598967884.jpg?crop=0.449xw:0.842xh;0.245xw,0.0337xh&resize=980:*'
    const parentName = 'Γιάννης Ιωάννου';
    const date = '12/03/2024' ;
    const time = '10:00 πμ';
    const loc ="Αθήνα";
    const loc2 = "Σπίτι Επαγγελματία";
    const type ="facetoface" ;
    const childAge = "6 μηνών" ;


  return (
    <>
    <AppointmentCardParent 
        picLink={picLink} 
        parentName={parentName} 
        loc={loc} 
        time={time} 
        type={type} 
        date={date}
        childAge={childAge}
        loc2={loc2}
    />
    </>
  )
}

export default ProfessionalAllAppointments