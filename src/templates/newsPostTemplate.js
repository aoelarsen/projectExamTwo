import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GridBox from "../components/layout/GridBox"
import Anchor from "../components/ui/Anchor"
import DateWrap from "../components/ui/DateWrap"

import { reDate } from "../utils/helpers"

const NewsPost = ({ data }) => {
  const newsPost = data.wpgraphql.post
  const dato = reDate(newsPost.date)

  if (newsPost !== null || newsPost !== undefined) {
    return (
      <Layout pageHeading={newsPost.title}>
        <SEO title={newsPost.title} description={newsPost.excerpt} />
        <GridBox maxWidth="650px" placeItems="center start">
          {newsPost.featuredImage !== null ? (
            <GridBox>
              <Img
                fluid={newsPost.featuredImage.imageFile.childImageSharp.fluid}
                alt={newsPost.featuredImage.altText}
                style={{ width: "100%" }}
              />
            </GridBox>
          ) : (
            undefined
          )}
          <DateWrap>
            <p>Publisert: {dato}</p>
          </DateWrap>
          <GridBox
            placeItems="start"
            dangerouslySetInnerHTML={{ __html: newsPost.content }}
          />
          <GridBox
            lightGray
            placeItems="center start"
            padding="2rem"
            margin="1rem 0"
            gap="1rem"
            style={{
              borderTop: "1px solid var(--bluegreen)",
            }}
          >
            <Anchor link to="/nyhetsarkiv">
              Til nyhetsarkivet
            </Anchor>
            <Anchor link to="/">
              Til forsiden
            </Anchor>
          </GridBox>
        </GridBox>
      </Layout>
    )
  }
}

export default NewsPost

export const newsPostQuery = graphql`
  query newsPost($wpId: ID!) {
    wpgraphql {
      post(id: $wpId) {
        id
        date
        title
        slug
        excerpt
        content
        featuredImage {
          id
          title
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 650) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
