import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import ContactForm from "../components/contact-form"
import CallToAction from '../components/callToAction'
const ContactUsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section className="eg-page-header">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="d-flex justify-content-center align-items-center full-height">
        <Row>
          <Col>
            <h1>Contact Us</h1>
            <p>
              Time <span className="text-primary">To</span> Talk
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-96 bg-light">
      <p className="text-center text-primary h4">FREQUENTLY ASKED QUESTIONS</p>
      <h1 className="text-center">What can we answer for you?</h1>
    </section>

    <ContactForm />
    <CallToAction />
  </Layout>
)

export default ContactUsPage
