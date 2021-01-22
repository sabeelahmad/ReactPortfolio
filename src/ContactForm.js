import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  /* NEW: Input state handling vvvv */
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };
  /* End input state handling ^^^^ */

  // Server state handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setInputs({
        email: "",
        message: "",
        name: "",
      });
    }
  };
  const handleOnSubmit = event => {
    event.preventDefault();
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/maypgbvb",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "Thanks!");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="form-group">
        <label className="form-label mb-2" htmlFor="name">Name <i className="fas fa-id-card"></i></label>
        <input name="name" value={inputs.name} onChange={handleOnChange} type="text" className="form-control" style={{ color: 'white' }} id="name" placeholder="Name" required />
      </div>
      <div className="form-group">
        <label className="form-label mb-2" htmlFor="email">email <i className="fas fa-envelope-square"></i></label>
        <input name="email" value={inputs.email} onChange={handleOnChange} type="email" className="form-control" style={{ color: 'white' }} id="email" placeholder="Email Address" required />
      </div>
      <div className="form-group">
        <label className="form-label mb-2" htmlFor="message">Message <i className="fas fa-reply"></i></label>
        <textarea name="message" value={inputs.message} onChange={handleOnChange} type="email" className="form-control" rows="6" style={{ color: 'white' }} id="message" placeholder="Enter your message" required />
      </div>
      <button type="submit" disabled={serverState.submitting} className="form-btn btn btn-primary">
        Send Message <i className="fas fa-inbox"></i>
      </button>
      {serverState.status && (
        <div className={!serverState.status.ok ? "alert alert-danger mt-3 alert-dismissible fade show" : "alert alert-success mt-3 alert-dismissible fade show"}>
          {serverState.status.ok ? "Thanks for contacing me, I'll reach out to you soon!" : "Oops, an error was encountered. Try again!"}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </form>
  )
}

export default ContactForm;