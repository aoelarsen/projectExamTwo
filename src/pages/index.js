import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/head/seo"
import GlobalStyles from "../globalstyles/GlobalStyles"
import CookieConsent from "../components/cookieConsent/CookieConsent"

import MainNav from "../components/navigation"
import Heading from "../components/ui/Heading"
import Footer from "../components/footer"
import GridBox from "../components/layout/GridBox"
import {
  FrontMain,
  FrontSection,
  NewsAndCampaignSection,
  GallerySection,
} from "../components/frontpage/FrontPageLayout"
import FrontPageHeader from "../components/frontpage/FrontPageHeader"
import FrontTitleBox from "../components/frontpage/FrontTitleBox"

import NewsBox from "../components/frontpage/NewsBox"
import CampaignBox from "../components/frontpage/CampaignBox"
import GalleriesImageList from "../components/imageFetch/GalleriesImageList"

const IndexPage = ({ data }) => {
  const site = data.site.siteMetadata

  return (
    <>
      <GridBox bodyWrap>
        <SEO title={site.title} />
        <GlobalStyles />
        <FrontPageHeader>
          <FrontTitleBox description={site.description} />
        </FrontPageHeader>
        <MainNav />
        <FrontMain>
          <FrontSection>
            <GallerySection padding="3rem 0 0 0">
              <Heading h2 center>
                Gallerier
              </Heading>
              <GalleriesImageList />
            </GallerySection>
          </FrontSection>
          <FrontSection lightGray>
            <NewsAndCampaignSection padding="2rem 0">
              <CampaignBox />
              <NewsBox />
            </NewsAndCampaignSection>
          </FrontSection>
        </FrontMain>
      </GridBox>
      <Footer />
      <CookieConsent />
    </>
  )
}

export default IndexPage

export const frontPageQuery = graphql`
  query frontPage {
    site {
      siteMetadata {
        title
        description
        contactInfo {
          phone
          email
          streetAddress
          city
          zipCode
        }
      }
    }
    wpgraphql {
      campaigns: posts(
        where: { categoryId: 7, orderby: { field: DATE, order: DESC } }
      ) {
        nodes {
          id
          date
          title
          slug
          content
        }
      }
    }
  }
`
