import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GridBox from "../components/layout/GridBox"
import PriceListWrapper from "../components/ui/PriceListWrap"
import Heading from "../components/ui/Heading"
import CampaignWrapper, {
  CampaignInner,
} from "../components/ui/CampaignWrapper"

const PriceList = ({ data }) => {
  const pricePage = data.wpgraphql.pricePage
  const printPage = data.wpgraphql.printPage
  const framesPage = data.wpgraphql.framesPage
  const campaign = data.wpgraphql.posts.nodes[0]

  const printImage = printPage.featuredImage.imageFile.childImageSharp.fluid
  const printImageText = printPage.featuredImage.altText

  const framesImage = framesPage.featuredImage.imageFile.childImageSharp.fluid
  const framesImageText = framesPage.featuredImage.altText

  return (
    <Layout pageHeading={pricePage.title}>
      <SEO
        title={pricePage.title}
        description="En oversikt over priser og tjenester som Fotograf Morten Flaten tilbyr"
      />
      <CampaignWrapper>
        <CampaignInner>
          <Heading h2 center invert>
            {campaign.title}
          </Heading>
          <GridBox dangerouslySetInnerHTML={{ __html: campaign.content }} />
        </CampaignInner>
      </CampaignWrapper>
      <GridBox maxWidth="950px" margin="2rem 0">
        <Heading h2 padding="0 1rem">
          Prisliste
        </Heading>
        <PriceListWrapper
          dangerouslySetInnerHTML={{ __html: pricePage.content }}
        ></PriceListWrapper>
      </GridBox>
      <GridBox section lightGray gap="2rem" placeItems="center" margin="4rem 0">
        <Heading h2 center>
          Tjenester
        </Heading>
        <GridBox
          placeItems="center start"
          maxWidth="650px"
          padding="0 0 2rem 0"
        >
          <Heading h3>{printPage.title}</Heading>
          <GridBox
            placeItems="center start"
            dangerouslySetInnerHTML={{ __html: printPage.content }}
          />
          <Img
            fluid={printImage}
            alt={printImageText}
            style={{
              width: "100%",
              maxWidth: printImage.presentationWidth,
              alignSelf: "end",
            }}
          />
        </GridBox>
        <GridBox
          placeItems="center start"
          maxWidth="650px"
          padding="0 0 2rem 0"
        >
          <Heading h3>{framesPage.title}</Heading>
          <GridBox
            placeItems="center start"
            dangerouslySetInnerHTML={{ __html: framesPage.content }}
          />
          <Img
            fluid={framesImage}
            alt={framesImageText}
            style={{
              width: "100%",
              maxWidth: framesImage.presentationWidth,
              alignSelf: "end",
            }}
          />
        </GridBox>
      </GridBox>
    </Layout>
  )
}

export default PriceList

export const priceListQuery = graphql`
  query priceListPage {
    wpgraphql {
      pricePage: page(id: "cGFnZTo4Mg==") {
        id
        title
        slug
        content
      }
      printPage: page(id: "cGFnZTo0MTQ=") {
        id
        title
        slug
        content
        featuredImage {
          title
          id
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1080) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      framesPage: page(id: "cGFnZTo0MTc=") {
        id
        title
        slug
        content
        featuredImage {
          title
          id
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1080) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      posts(where: { categoryId: 7, orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          slug
          id
          content
          date
        }
      }
    }
  }
`
