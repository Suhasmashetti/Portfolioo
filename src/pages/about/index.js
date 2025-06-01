import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  Waddress,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="my-5 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 py-1">About me</h1>
            <hr className="t_border my-1 ml-0 text-left" />
          </Col>
        </Row>

        {/* About Me Section */}
        <Row className="my-5">
          <Col lg="5">
            <h3 className="color_sec py-1">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>

       {/* Wallet Address Section */}
<Row className="my-5">
  <Col lg="5">
    <h3 className="color_sec py-1">Wallet Addresses</h3>
  </Col>
  <Col lg="7" className="d-flex flex-column gap-3">
    {Object.entries(Waddress).map(([key, value]) => (
      <div key={key} className="wallet-address">
        <div>
          <strong className="text-capitalize">{key}</strong>: {value}
        </div>
        <button
          className="copy-button"
          onClick={() => {
            navigator.clipboard.writeText(value);
          }}
        >
          Copy
        </button>
      </div>
    ))}
  </Col>
</Row>

        {/* Skills Section */}
        <Row className="my-5">
          <Col lg="5">
            <h3 className="color_sec py-4">Tools that I have used</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <i className={`${skill.icon} skill-icon`}></i>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
