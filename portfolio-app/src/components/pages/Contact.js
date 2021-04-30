import React from "react";

import "../pages/contact.css";


const Contact = () => (
    <>
    <div className="contact-card card">
      <div className="img-container">
      <img src={`${process.env.PUBLIC_URL}/assets/contact.jpeg`} alt="contact" />
      </div>
      <div className="content">
      <a href={"mailto:imanidillahunt@gmail.com"}>Email</a>
        <br/>
        <a href={"https://www.linkedin.com/in/imani-dillahunt-42b4891b9"}>LinkedIn</a>
        <br/>
        <a href={"tel:+7044129954"}>Mobile Number: 704-412-9954</a>
   </div>
   </div>
   </>
   
);
          

          export default Contact;