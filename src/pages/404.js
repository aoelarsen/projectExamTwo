import React from "react"

import Layout from "../components/layout"
import GridBox from "../components/layout/GridBox"
import SEO from "../components/head/seo"
import Heading from "../components/ui/Heading"
import Anchor from "../components/ui/Anchor"

const NotFoundPage = () => (
  <Layout pageHeading="404: Ikke funnet">
    <SEO title="404: Not found" />
    <GridBox section>
      <Heading h2 center>
        Oida! Denne siden fant vi dessverre ikke&hellip;
      </Heading>
      <p>Beklager, vi fant ikke siden du prøvde å nå fram til.</p>
      <ol>
        <p>Dette kan skyldes enten&hellip;</p>
        <li>&hellip; en feil i systemet</li>
        <li>at siden har blitt arkivert i &quot;storarkivet&quot;</li>
        <li>eller at siden rett og slett ikke eksisterer.</li>
      </ol>
    </GridBox>
    <GridBox
      margin="4rem 0"
      padding="1rem 0 3rem 0"
      lightgray
      style={{
        boxShadow: "0 0 5px 0 var(--bluegreen)",
        borderRadius: "0.3rem",
      }}
      maxWidth="800px"
      gap="2rem"
    >
      <Heading h2 center>
        &hellip; hva vil du nå?
      </Heading>
      <GridBox columns="repeat(3, 1fr)" gap="2rem">
        <Anchor link to="/" center>
          Gå tilbake til forsiden
        </Anchor>
        <Anchor link to="/gallerier" center>
          Gå til oversikten over gallerier
        </Anchor>
        <Anchor link to="/ta-kontakt" center>
          Finn siden med kontaktinformasjon
        </Anchor>
      </GridBox>
    </GridBox>
  </Layout>
)

export default NotFoundPage
