import React, { useState } from 'react';
import cta_contact from '../assets/img/cta_contact.jpg';
import { send } from '@emailjs/browser';
import { Helmet } from 'react-helmet';

export default function Contact() {

  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    web: 'Wager Win',
  });

  function borrar() {
    let forms = document.getElementById('form');
    forms.reset();
  }

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_zn88urv',
      'template_tosxu0k',
      toSend,
      'aTlteNIIy7W_PR7F_'
    )
      .then((response) => {
        alert("The form was sent correctly");
        borrar();
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        alert("The form was not submitted correctly");
        console.log('FAILED...', err);
        borrar();
      });
    e.target.reset()
  };


  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid g-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us | Wager Win</title>
        <link rel="canonical" href="https://wagerwin.ag.com/contact" />
        <meta name="description" content=""></meta>
      </Helmet>
      <div className="cta_sportsbook slider_contact center_text">
        <div className="container">
          <div className="col-12 text-white text-center">
            <h1 className="display-3 fw-bold font_shadow">Contact Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-lg-8 center_text p-2 pb-5" data-aos="fade-right">
            <form id="form" className="col-12 px-lg-5" onSubmit={onSubmit}>
              <div >
                <h1>Contact Us</h1>
                <div className="my-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" aria-label="name" name="name" className="form-control" id="name" placeholder="Full name" value={toSend.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" aria-label="phone" name="phone" className="form-control" id="phone" placeholder="Phone" value={toSend.phone} onChange={handleChange} />

                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" aria-label="email" name="email" className="form-control" id="email" placeholder="name@example.com" value={toSend.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Example textarea</label>
                  <textarea className="form-control" name="message" id="message" value={toSend.message} onChange={handleChange} rows="3"></textarea>
                </div>
              </div>
              <div className="col-12">
                <button type='submit' className="btn btn_orange">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <img src={cta_contact} alt="woman with a phone" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
