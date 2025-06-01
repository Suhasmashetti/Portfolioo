import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

const contactConfig = {
  YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
  YOUR_EMAIL: process.env.REACT_APP_YOUR_EMAIL,
  YOUR_FONE: process.env.REACT_APP_YOUR_FONE,
  description: process.env.REACT_APP_CONTACT_DESCRIPTION,
};

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertMessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, loading: true }));

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          setFormData({
            email: "",
            name: "",
            message: "",
            loading: false,
            show: true,
            alertMessage: "SUCCESS! Thank you for your message",
            variant: "success",
          });
          document.getElementsByClassName("co_alert")[0]?.scrollIntoView();
        },
        (error) => {
          setFormData((prev) => ({
            ...prev,
            loading: false,
            show: true,
            alertMessage: `Failed to send! ${error.text}`,
            variant: "danger",
          }));
          document.getElementsByClassName("co_alert")[0]?.scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Your Website</title>
          <meta name="description" content={contactConfig.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            {formData.show && (
              <Alert
                variant={formData.variant}
                className="rounded-0 co_alert"
                onClose={() =>
                  setFormData((prev) => ({ ...prev, show: false }))
                }
                dismissible
                aria-live="polite"
              >
                <p className="my-0">{formData.alertMessage}</p>
              </Alert>
            )}
          </Col>

          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.YOUR_FONE && (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>

          <Col lg="7" className="d-flex align-items-center">
            <form
              onSubmit={handleSubmit}
              className="contact__form w-100"
              aria-busy={formData.loading}
            >
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button
                    className="btn ac_btn"
                    type="submit"
                    disabled={formData.loading}
                  >
                    {formData.loading ? "Sending..." : "Send"}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>

      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
