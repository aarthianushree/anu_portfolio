import React from 'react'
import './Contact.css';
// import MailIcon from '@mui/icons-material/Mail';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
import contacts from './pics//Packing_box-removebg-preview.png';

function Contact() {
  return (
    <section id='contact'>
    <div className='contact'>.
    
    <div className='contactbox'>

     <div className='contactbox1'>
     <h2>CONTACT</h2>
     <img  className='contactimg' src={contacts} alt=''/>
     

     </div>

     <div className='contactbox2'>

     

     <div className='displaygrid'>
    
    <h2><a href='https://www.linkedin.com/in/anushree2326/' >LinkedIn</a></h2>
     {/* <LinkedInIcon fontSize='large'/> */}
     </div><br></br>

     <div className='displaygrid'>
     <h2><a href='https://github.com/aarthianushree' >Instagram</a></h2> 
     {/* <InstagramIcon fontSize='large'/> */}
     </div>

     <div className='displaygrid'>
     <div>
     <h2><a href='' >EmailID</a></h2>
     </div>
      {/* <MailIcon fontSize='large'/> */}
     </div>
     <h4>anushree.ig20@bitsathy.ac.in</h4>

     </div>
     
    
    </div>
    
    </div>
    </section>
  )
}

export default Contact