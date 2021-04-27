import React from "react";
import contact from "../../assets/contact.jpeg";

const Contact = () => (
    <div className="card">
      <div className="img-container">
      <img src={contact} alt="contact" />
      </div>
      <div className="content">
      <a href={"mailto:imanidillahunt@gmail.com"}>Email</a>
        <br/>
        <a href={"https://github.com/imanid-code"}>Github Repositories</a>
        <br/>
        <a href={"tel:+7044129954"}>Mobile Number: 704-412-9954</a>
   </div>
   </div>
);
          

          export default Contact;