import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in"
        data-aos-duration="1000">
          <a href='https://www.instagram.com/thepriyanshuverma_23/?igsh=MWlzbXcycXhiYmxqdA%3D%3D' target="_blank" className="items">
            <FaInstagram className='icons'/>
          </a>
          <a href='https://www.linkedin.com/in/priyanshu-verma-63a322227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" className="items">
            <FaLinkedin className='icons'/>
          </a>
          <a href='https://github.com/priyanshu8619' target="_blank" className="items">
            <FaGithubSquare className='icons'/>
          </a>
          <a href='mailto:kumarvermapriyanshu77@gmail.com' target="_blank" className="items">
            <SiGmail className='icons'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
