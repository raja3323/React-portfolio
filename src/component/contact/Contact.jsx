import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";



const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_tgrrait', 'template_56kklq6', formRef.current, 'OsOfrzzz62dZH3ImZ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 95406 84014
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              ideepu144@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              245 king street, Burari New Delhi
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your storty?</b>Get in touch. Always freelancing if the right project comes along.
          </p>
          <form onSubmit={handleSubmit} ref={formRef} >
            <input style={{background: darkMode ? "#333" : "white", color: darkMode ? "white" : "black", borderBottom: darkMode ? "1px solid white" : "1px solid black"}} type="text" placeholder="Name" name="user_name"/>
            <input style={{background: darkMode ? "#333" : "white", color: darkMode ? "white" : "black", borderBottom: darkMode ? "1px solid white" : "1px solid black"}} type="text" placeholder="Subject" name="user_subject"/>
            <input style={{background: darkMode ? "#333" : "white", color: darkMode ? "white" : "black", borderBottom: darkMode ? "1px solid white" : "1px solid black"}} type="text" placeholder="Email" name="user_email"/>
            <textarea style={{background: darkMode ? "#333" : "white", color: darkMode ? "white" : "black", borderBottom: darkMode ? "1px solid white" : "1px solid black"}} name="message" rows="5" placeholder="Message"></textarea>
            <button>Submit</button>
            {done && " Thank you....."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
