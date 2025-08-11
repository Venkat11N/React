import React from 'react'
import phoneIcon from './images/phone-call.png'
import emailIcon from './images/email.png'

const Contact = (props) => {
  return (
        <article className="contact-card">
            <img
                src={props.img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img
                    src={phoneIcon}
                    alt="phone icon"
                />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img
                    src={emailIcon}
                    alt="mail icon" 
                />
                <p>{props.email}</p>
            </div>
        </article>
  )
}

const props = {
  img: "https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  name: "Mr. Whiskerson",   
    phone: "(212) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}


export default Contact
