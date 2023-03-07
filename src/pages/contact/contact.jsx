import { useRef, useState } from 'react';
import {
  FaUserAlt, FaInfoCircle, FaLink, FaFacebook, FaInstagram,
  FaTelegram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoBack } from '../../components';
import emailjs from '@emailjs/browser';
import './contact.css';
import { toast } from 'react-toastify';

export default function Contact() {
  const [sending, setSending] = useState('Send');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSending('Sending...');

    emailjs.sendForm('service_1eq0288', 'template_705diav', form.current, 'VUHFZ0PX8Bn0bNQ9N')
      .then((result) => {
        console.log(result.text);
        setSending('Sent!');
        setTimeout(() => setSending('Send'), 3000);
        toast.success('Message sent successfully');
      }, (error) => {
        console.log(error.text);
        setSending('Error!');
        setTimeout(() => setSending('Send'), 3000);
        toast.error('Oops! Something wet wrong!');
      });
    form.current.reset();
  };

  return (
    <div className="container contact-wrapper">
      <GoBack />
      <div data-aos='zoom-out-down' className="block">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="form-container">
          <div className="row100">
            <div data-aos='flip-up' className="col">
              <div className="inputBox">
                <input type="text" name="user_name" required />
                <span className='label'>Name</span>
                <span className="line" />
              </div>
            </div>
            <div data-aos='flip-up' className="col">
              <div className="inputBox">
                <input type="Email" name="user_email" required />
                <span className='label'>Email</span>
                <span className="line" />
              </div>
            </div>
          </div>
          <div className="row100">
            <div data-aos='flip-up' data-aos-delay='400' className="col">
              <div className="inputBox textarea">
                <textarea name="message" required></textarea>
                <span className='label'>Message</span>
                <span className="line" />
              </div>
            </div>
          </div>
          <div className="row100">
            <div data-aos='flip-down' data-aos-delay='600' className="col">
              <button type='submit' className="btn" id='send'>{sending}</button>
            </div>
          </div>
        </form>
      </div>
      <div className="box-container">
        <div className="box">
          <h3 data-aos='fade-right' data-aos-delay='0'><span><FaUserAlt /></span> Ogabek</h3>
          <p data-aos='fade-right' data-aos-delay='200'>This website is made in React JS. If you liked, let's talk about project 👇</p>
          <div data-aos='fade-right' data-aos-delay='300' className="share">
            <a href="https://www.facebook.com/ogabek.mustafoyev.54/" target="_blank" rel="noopener noreferrer" ><FaFacebook /></a>
            <a href="https://www.instagram.com/mustafoev__ogabek/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://t.me/Ogabek_Mustafoyev" target="_blank" rel="noopener noreferrer" ><FaTelegram /></a>
            <a href="https://www.linkedin.com/in/ogabek-mustafoev/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="box">
          <h3 data-aos='fade-up' data-aos-delay='0'><span> <FaInfoCircle /></span> Contact info</h3>
          <a data-aos='fade-up' data-aos-delay='200' href="tel:+998883521214" className="links"><span><FaUserAlt /></span> +998 (88) 352-12-14</a>
          <a data-aos='fade-up' data-aos-delay='400' href="mailto:mustafoev0806@gmail.com" className="links"><span><FaEnvelope /></span> mustafoev@gmail.com</a>
          <a data-aos='fade-up' data-aos-delay='600' href="https://www.google.com/maps/place/Samarkand,+Uzbekistan/@39.6402225,66.6382411,10z/data=!3m1!4b1!4m5!3m4!1s0x3f4d191960077df7:0x487636d9d13f2f57!8m2!3d39.627012!4d66.9749731" target="_blank" rel="noopener noreferrer" className="links"><span><FaMapMarkerAlt /></span> Samarkand, Uzbekistan</a>
        </div>
        <div className="box">
          <h3 data-aos='fade-left' data-aos-delay='0'> <span><FaLink /></span> Quick links</h3>
          <Link data-aos='fade-left' data-aos-delay='200' to="/" className="links"><span><FaArrowRight /></span> Main</Link>
          <Link data-aos='fade-left' data-aos-delay='400' to="/home" className="links"><span><FaArrowRight /></span> Home</Link>
          <Link data-aos='fade-left' data-aos-delay='600' to="/about" className="links"><span><FaArrowRight /></span> About</Link>
          <Link data-aos='fade-left' data-aos-delay='800' to="/works" className="links"><span><FaArrowRight /></span> Works</Link>
        </div>
      </div>
      <div data-aos='zoom-out' data-aos-delay='1000' className="credit"> Created by Mr. <span> | BekDev | </span>{new Date().getFullYear()} ©️ All Rights Reserved! </div>
    </div>
  )
}
