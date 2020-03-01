import React from "react"
import { graphql } from "gatsby"
import Cookies from "js-cookie"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GridBox from "../components/layout/GridBox"

import Heading from "../components/ui/Heading"
import Button from "../components/ui/Button"

const setConsent = async value => {
  const cookieName = "gatsby-gdpr-google-analytics"

  if (Cookies.get(cookieName) !== undefined) {
    await Cookies.remove(cookieName)
  }

  try {
    await setTimeout(
      () => Cookies.set(cookieName, value, { expires: 365 }),
      500
    )
  } catch (error) {
    console.log(error)
  } finally {
    console.log(Cookies.get(cookieName))
  }
}

const PrivacyPolicy = ({ data }) => {
  const page = data.wpgraphql.privacyPolicy

  return (
    <Layout pageHeading={page.title}>
      <SEO
        title={page.title}
        description="Personvernerklæring for https://fotografmortenflaten.no"
      />
      <GridBox
        maxWidth="650px"
        placeItems="center start"
        padding="2rem 0"
        gap="1em"
        dangerouslySetInnerHTML={{ __html: page.content }}
      />
      <GridBox maxWidth="650px">
        <Heading h3>Godta informasjonskapsler?</Heading>
        <GridBox columns="1fr 1fr" padding="2rem">
          <Button center onClick={() => setConsent(true)}>
            Det er greit
          </Button>
          <Button center secondary onClick={() => setConsent(false)}>
            Nei takk
          </Button>
        </GridBox>
      </GridBox>
    </Layout>
  )
}

export default PrivacyPolicy

export const policyQuery = graphql`
  query privacyQuery {
    wpgraphql {
      privacyPolicy: page(id: "cGFnZToz") {
        id
        title
        slug
        content
      }
    }
  }
`
