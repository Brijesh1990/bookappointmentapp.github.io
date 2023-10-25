import React from 'react';
import appoint from  '../appointment.png';

export default function AppointmentApp() {
  return (
    // <div>  
    // </div>
    // <></>
    <React.Fragment>
    
    <div className='appointment-app'>
    
    <div className='appoint-img'>
    <img src={appoint} alt='appointment' title='appoint here' style={{width:"100%",height:"auto"}} />
    </div>
    <div className='appoint-form'>
    <h1>Book Appointment</h1>
    <hr />
    <form>
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='text' placeholder='Name *' required />
    <br /><br />
    <input type='submit' value="Book Appointment" placeholder='Name *' required />
    <br /><br />
    </form>
    </div>
    
    </div>

    </React.Fragment>
  )
}

