import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  faFacebookSquare,
  // faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import Heading from "../ui/Heading"
import GridBox from "../layout/GridBox"
import FlexBox from "../layout/FlexBox"
import Anchor from "../ui/Anchor"
import FootWrap, { FootContainer, CopyrightBox } from "./FootWrap"
import FootList, { FootListItem } from "./FooterList"
import FooterNav from "./FooterNav"
import AwsomeIcon from "../ui/AwesomeIcon"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  const contactInfo = data.site.siteMetadata.contactInfo
  const tel = `tel:${contactInfo.phone}`
  const mailto = `mailto:${contactInfo.email}`

  return (
    <FootWrap>
      <FootContainer>
        <GridBox placeItems="center" rows="auto max-content">
          <FlexBox column contentStart>
            <Heading h3 invert>
              Kontaktinformasjon
            </Heading>
            <FootList>
              <FootListItem columns="1fr 1fr">
                <p>Telefon: </p>
                <Anchor href={tel} invert>
                  (+47) {contactInfo.phone}
                </Anchor>
              </FootListItem>
              <FootListItem columns="1fr 1fr">
                <p>E-post: </p>
                <Anchor href={mailto} invert>
                  m-flaten [at] online.no
                </Anchor>
              </FootListItem>
              <FootListItem columns="1fr 1fr">
                <p>Adresse til studio: </p>
                <Anchor link to="/ta-kontakt" invert="true">
                  {contactInfo.streetAddress}
                  <br />
                  {contactInfo.zipCode} {contactInfo.city}
                </Anchor>
              </FootListItem>
            </FootList>
          </FlexBox>
        </GridBox>

        <GridBox placeItems="center">
          <FlexBox column>
            <Heading h3 invert>
              Finn meg andre steder:
            </Heading>
            <FootList>
              <FootListItem template="auto / 1fr auto">
                <Anchor
                  href="https://www.facebook.com/fotografmortenflaten/"
                  invert
                >
                  <GridBox columns="1fr 3fr" placeItems="center start">
                    <AwsomeIcon
                      icon={faFacebookSquare}
                      color="var(--white)"
                      fontSize="1.7rem"
                    />
                    <p>Fotograf Morten Flaten ANS</p>
                  </GridBox>
                </Anchor>
              </FootListItem>
              <FootListItem template="auto / 1fr auto">
                <Anchor href="https://www.facebook.com/Slemmestad2020/" invert>
                  <GridBox
                    columns="1fr 3fr"
                    placeItems="center start"
                    style={{ textAlign: "center" }}
                  >
                    <AwsomeIcon
                      icon={faFacebookSquare}
                      color="var(--white)"
                      fontSize="1.7rem"
                    />
                    <p>Slemmestad 2020</p>
                  </GridBox>
                </Anchor>
              </FootListItem>
              {/* <FootListItem>
                
                  <AwsomeIcon
                    icon={faInstagram}
                    color="var(--white)"
                    size="1.7rem"
                  />
                
                <Anchor href="#">
                  <p>Instagram?</p>
                </Anchor>
              </FootListItem> */}
            </FootList>
          </FlexBox>
        </GridBox>
        <GridBox placeItems="center">
          <FooterNav role="navigation" aria-labelledby="footNav">
            <Heading h3 invert id="footNav">
              Snarveier
            </Heading>
            <FootList>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/" invert="true">
                  Hjem
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/om-meg" invert="true">
                  Om meg
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/ta-kontakt" invert="true">
                  Ta kontakt
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/priser-og-tjenester" invert="true">
                  Priser og tjenester
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/gallerier" invert="true">
                  Gallerier
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/nyhetsarkiv" invert="true">
                  Nyhetsarkiv
                </Anchor>
              </FootListItem>
              <FootListItem padding="1rem" noBorder template="auto / auto">
                <Anchor link to="/personvern" invert="true">
                  Personvernerklæring
                </Anchor>
              </FootListItem>
            </FootList>
          </FooterNav>
        </GridBox>
        <CopyrightBox>
          <p style={{ textAlign: "center" }}>
            <span className="biggerText">
              Opphavsrett © {new Date().getFullYear()} Fotograf Morten Flaten
            </span>
          </p>
          <p style={{ textAlign: "center" }}>
            Denne siden er laget av{" "}
            <Anchor href="https://github.com/aoelarsen" invert inline>
              Anders&nbsp;Ø.&nbsp;Larsen, <br />
            </Anchor>{" "}
            med hjelp av{" "}
            <Anchor href="https://www.gatsbyjs.org" invert inline>
              Gatsby
            </Anchor>
            ,{" "}
            <Anchor href="https://www.wordpress.org" invert inline>
              WordPress
            </Anchor>{" "}
            og{" "}
            <Anchor href="https://www.netlify.com/" invert inline>
              Netlify{" "}
            </Anchor>
          </p>
        </CopyrightBox>
      </FootContainer>
    </FootWrap>
  )
}

export default Footer
