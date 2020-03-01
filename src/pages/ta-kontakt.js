import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GridBox from "../components/layout/GridBox"
import Heading from "../components/ui/Heading"
import ContactForm from "../components/contactForm/ContactForm"
import FlexBox from "../components/layout/FlexBox"
import Anchor from "../components/ui/Anchor"

const Contact = ({ data }) => {
  const page = data.wpgraphql.page
  const contactInfo = data.site.siteMetadata.contactInfo
  const tel = `tel:${contactInfo.phone}`
  const mailto = `mailto:${contactInfo.email}`

  return (
    <Layout pageHeading={page.title}>
      <SEO
        title={page.title}
        description="Trenger du en fotograf? Ta kontakt for å høre når jeg er ledig. Ring eller bruk skjemaet på denne siden"
      />
      <GridBox
        maxWidth="700px"
        padding=".5rem"
        minHeight="75vh"
        style={{ alignContent: "center" }}
      >
        <Heading h2>Kontaktskjema</Heading>
        <ContactForm />
        <Anchor link to="/personvern" style={{ padding: "2rem 0" }}>
          &#42;Personvernerklæring
        </Anchor>
      </GridBox>

      <GridBox section lightGray margin="2em 0">
        <GridBox
          placeItems="center start"
          maxWidth="700px"
          padding="2rem 0.5rem"
          style={{ alignContent: "center" }}
        >
          <Heading h3>Kontaktinformasjon</Heading>
          <GridBox
            columns="1fr 1.2fr"
            placeItems="center start"
            style={{ borderBottom: "1px solid var(--light-bluegreen)" }}
          >
            <p className="bold">Telefon:</p>
            <Anchor href={tel}> (+47) {contactInfo.phone} </Anchor>
          </GridBox>
          <GridBox
            columns="1fr 1.2fr"
            placeItems="center start"
            style={{ borderBottom: "1px solid var(--light-bluegreen)" }}
          >
            <p className="bold">Epost:</p>
            <Anchor href={mailto}>m-flaten [at] online.no</Anchor>
          </GridBox>
          <GridBox
            columns="1fr 1.2fr"
            placeItems="center start"
            style={{ borderBottom: "1px solid var(--light-bluegreen)" }}
          >
            <p className="bold">Adresse til fotostudio:</p>
            <p>
              {contactInfo.streetAddress}, {contactInfo.zipCode}{" "}
              {contactInfo.city}{" "}
            </p>
          </GridBox>
        </GridBox>
      </GridBox>
      <GridBox section placeItems="center stretch">
        <Heading h2>Kart til studio</Heading>
        <FlexBox
          justifyContent="stretch"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </GridBox>
    </Layout>
  )
}

export default Contact

export const contactQuery = graphql`
  query contactPage {
    wpgraphql {
      page(id: "cGFnZTozMDk=") {
        id
        title
        content
        slug
      }
    }
    site {
      siteMetadata {
        contactInfo {
          phone
          email
          streetAddress
          city
          zipCode
        }
      }
    }
  }
`
