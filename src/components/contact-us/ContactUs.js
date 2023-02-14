import React from 'react'
import {SiTwitter} from 'react-icons/si'
import {SiDiscord} from 'react-icons/si'
import Navbar from '../navbar/Navbar'

import './ContactUsStyle.css'

const ContactUs = () => {
  return (
    <div className="contactInfo">
      <Navbar/>
        <div className="background-container">
            
            <div class="horizontal-layout">
                <div className="formArea">
                        <form 
                        target="_blank" 
                        action="https://formsubmit.co/gefegi1379@cadolls.com" 
                        method="POST"
                        >
                        <div class="form-field">
                            <div class="form-col">
                                <div class="form-row">
                                    <h2>Contact Us</h2>
                                </div>
                                <div class="form-row">
                                    <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                                </div>

                                <div class="form-row">
                                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                                </div>

                                
                                <div class="form-row">
                                    <textarea placeholder="Your Message" class="form-control" name="message" rows="5" required></textarea>
                                </div>
                                <div class="form-row">
                                    <button type="submit" class="btn-grad">Submit Form</button>
                                </div>
                            </div>
                        </div>

                        
                        

                    </form>
                </div>


                    <div class="field">


                        <div class="tubes">

                            <div class="form-row">
                                
                                
                                <div class="contact-icons">
                                    <ul class="contact-icon">
                                    <h1 color='#aaa'>Follow Us On</h1>
                                        <li ><a href="https://twitter.com"><SiTwitter size={140}/></a></li>
                                        <li><a href="https://discord.com"><SiDiscord size={140}/></a></li>
                                    </ul>
                                    
                                </div>
                                
                            </div>

                        </div>



                    </div>
            
            </div>
        </div>
        <p className='informationContact'><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Vivamus ac bibendum mi, sit amet tristique neque. Nullam efficitur facilisis luctus.
                                    Duis nec ultrices mi. Nam porttitor lacinia est, in laoreet lectus pellentesque vitae.
                                    Fusce metus dolor, aliquam quis suscipit eu, dapibus ut massa. Aliquam blandit enim vel ante porttitor, non iaculis orci semper.
                                    Cras a lacinia ante, nec finibus ligula.Curabitur ornare pretium mi, et porta orci.
                                    Nunc justo tellus, mattis ut varius ultricies, congue non mi.</p>
    </div>
    
  )
}

export default ContactUs