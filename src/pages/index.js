import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import Header from "../components/header"
import CallToAction from "../components/callToAction"
import Typed from "react-typed"
import ClientTestimonials from "../components/clientTestimonials"
import OurServices from "../components/ourServices"
import FeaturedBy from "../components/FeaturedBy"
import QuickFacts from "../components/QuickFacts"

// Imports Why Us? Icons
import DevelopersIcon from "../images/why-us-icons/eads-graphic-developers-icon.svg"
import DesignersIcon from "../images/why-us-icons/eads-graphic-graphic-design-icon.svg"
import MarketersIcon from "../images/why-us-icons/eads-graphic-digital-marketing-icon.svg"
import SatisfactionIcon from "../images/why-us-icons/eads-graphic-satisfaction-icon.svg"
import CommunicationIcon from "../images/why-us-icons/eads-graphic-communication-icon.svg"
import CuttingEdgeIcon from "../images/why-us-icons/eads-graphic-cutting-edge-icon.svg"

import DesignerSection from "../images/landing-page/creativity.svg"
import DeveloperSection from "../images/landing-page/web-development.svg"
import MarketerSection from "../images/landing-page/digital-marketing.svg"

// Social Icons
import BehanceSocial from "../images/social-icons/behance.svg"
import YoutubeSocial from "../images/social-icons/youtube.svg"
import InstagramSocial from "../images/social-icons/instagram.svg"
import DribbbleSocial from "../images/social-icons/dribbble.svg"
import GithubSocial from "../images/social-icons/github.svg"

// Imports Gatsby Lazy Loader
import Img from "gatsby-image"

// Sets Default Icon Size
const iconSize = 30

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Helmet>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com/css?family=Roboto:100,400,700"
      />
      <meta
        name="google-site-verification"
        content="UYn5qbydYxU2eq-N0ipCCNWDu38kKJcFK7_Hdt-A1So"
      />
    </Helmet>

    {/* Hero Section */}
    <section id="eg-hero" className="hero-section position-relative">
      <Header siteTitle={"EadsGraphic"} />
      <Container className="hero">
        <Row>
          <Col xs={12} sm={8}>
            <p className="h4 text-white">Hello, World</p>
            <h1 className="text-white">We are,</h1>
            <h1 className="text-white">
              <Typed
                strings={[
                  " EadsGraphic",
                  " Designers",
                  " Developers",
                  " Marketers",
                  " Analysts",
                ]}
                loop={true}
                typeSpeed={60}
              />
            </h1>
            <p className="mb-0 text-white">
              EadsGraphic is a creative technology agency operating in the
              greater Philadelphia area.
            </p>

            <Link to="/services" className="mt-4 mr-3 btn btn-light text-dark">
              Our Services
            </Link>
            <Link to="/contact-us" className="mt-4 btn btn-outline-light">
              Get Quote
            </Link>

            <div className="mt-5 d-flex justify-content-between eg-social-hero">
              <a href="https://www.youtube.com/channel/UCzSqOX4lcdU9R-s6qjKQWqQ/featured">
                <img
                  src={YoutubeSocial}
                  height={32}
                  alt="Follow EadsGraphic on YouTube"
                />
              </a>

              <a href="https://www.behance.net/tylereads">
                <img
                  src={BehanceSocial}
                  height={32}
                  alt="Follow EadsGraphic on BeHance"
                />
              </a>
              <a href="https://www.instagram.com/eadsgraphic/?hl=en">
                <img
                  src={InstagramSocial}
                  height={32}
                  alt="Follow EadsGraphic on Instagram"
                />
              </a>
              <a href="https://dribbble.com/eadsgraphic">
                <img
                  src={DribbbleSocial}
                  height={32}
                  alt="Follow EadsGraphic on Dribbble"
                />
              </a>

              <a href="https://github.com/EadsGraphic">
                <img
                  src={GithubSocial}
                  height={32}
                  alt="Follow EadsGraphic on GitHub"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <FeaturedBy />

    {/* Why Us? Section */}
    <section className="py-5 why-us-section-bg">
      <Container>
        <Row>
          <Col xs={12} className="text-center text-primary">
            <div className="h1-title-accent" />
            WHY US?
          </Col>
          <Col xs={12} className="text-center">
            <h1>Experience. Knowledge. Creativity</h1>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={DevelopersIcon}
                height={iconSize}
                alt="EadsGraphic developers"
              />
            </div>

            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Developers</p>
              <p className="subtitle">
                Professional web developers will ensure your idea is fully coded
                to modern day web standards.
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={DesignersIcon}
                alt="EadsGraphic designers"
                height={iconSize}
              />
            </div>

            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Designers</p>
              <p className="subtitle">
                Programs such as Sketch and Photoshop ensure we deliver pixel
                perfect designs to clients.
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={MarketersIcon}
                alt="EadsGraphic marketers"
                height={iconSize}
              />
            </div>

            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Marketers</p>
              <p className="subtitle">
                It's time to fuel organic web traffic to your website by
                utilizing our advanced knowledge of SEO tactics.
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={SatisfactionIcon}
                alt="EadsGraphic customer satisfaction"
                height={iconSize}
              />
            </div>
            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Satisfaction</p>
              <p className="subtitle">
                Clients are always complementing our detail oriented approach to
                each and every project we work on.
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={CommunicationIcon}
                alt="EadsGraphic customer satisfaction"
                height={iconSize}
              />
            </div>

            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Communication</p>
              <p className="subtitle">
                Projects are driven by honest and open communcation between both
                our team and our clients.
              </p>
            </div>
          </Col>

          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex align-items-start mt-3 mt-sm-5"
          >
            <div className="product-icon">
              <img
                src={CuttingEdgeIcon}
                alt="EadsGraphic utilizes cutting edge web technology"
                height={iconSize}
              />
            </div>
            <div>
              <span class="title-accent" />
              <p className="fs-20 mb-1 fw-400">Cutting Edge</p>
              <p className="subtitle">
                Team members make it a priority to stay up to date with the
                latest in technology and design.
              </p>
            </div>
          </Col>

          <Col xs={12} className="d-flex justify-content-center mt-5">
            <Link to="/services" className="btn btn-primary">
              More Info
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Developers */}
    <section className="py-96">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className="mr-0 mr-sm-5">
            <img
              src={DeveloperSection}
              className="svg-responsive"
              alt="Eadsgraphic web development"
            />
          </Col>

          <Col xs={12} sm={4} className="mt-5 mt-sm-0 ">
            <div className="d-flex justify-content-start">
              <div className="eg-section-square">01</div>
              <p className="ml-3 eg-section-lead">
                We develop enterprise grade web applications based on today's
                most cutting edge technologies with a focus on React, Node,
                Express, and WordPress.
              </p>
            </div>

            <h1 className="eg-section-title mb-3">Developers</h1>
            <Link
              to="/services#eg-service-web-development"
              className="btn btn-primary"
            >
              More Info
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    {/* Designers */}
    <section className="py-96">
      <Container>
        <Row className="justify-content-center">
          <Col
            xs={12}
            sm={4}
            className="order-1 order-sm-0 mt-5 mt-sm-0 mr-0 mr-sm-5"
          >
            <div className="d-flex justify-content-start">
              <div className="eg-section-square">02</div>
              <p className="ml-3 eg-section-lead">
                Utilizing world class design tools allows us to produce stunning
                visuals and interfaces for our clients. We have created content
                for a variety of mediums.
              </p>
            </div>

            <h1 className="eg-section-title mb-3">Designers</h1>
            <Link
              to="/services#eg-service-graphic-design"
              className="btn btn-primary"
            >
              More Info
            </Link>
          </Col>

          <Col xs={12} sm={4} className="order-0 order-sm-1">
            <img
              src={DesignerSection}
              className="svg-responsive"
              alt="Eadsgraphic ui/ux and graphic design"
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* Marketers */}
    <section className="py-96">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className="mr-0 mr-sm-5">
            <img
              src={MarketerSection}
              className="svg-responsive"
              alt="Eadsgraphic digital marketing"
            />
          </Col>
          <Col xs={12} sm={4} className="mt-5 mt-sm-0 ">
            <div className="d-flex justify-content-start ">
              <div className="eg-section-square">03</div>
              <p className="ml-3 eg-section-lead">
                Social media marketing is our speciality we have organically
                built social userbases on several accounts by creating a content
                strategy and roll out plan.
              </p>
            </div>

            <h1 className="eg-section-title mb-3">Marketers</h1>
            <Link
              to="/services#eg-service-digital-marketing"
              className="btn btn-primary"
            >
              More Info
            </Link>
          </Col>
        </Row>
      </Container>
    </section>

    <OurServices />
    <QuickFacts />
    <ClientTestimonials />
    <CallToAction />
  </Layout>
)

export default IndexPage
