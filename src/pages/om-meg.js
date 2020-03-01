import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import Heading from "../components/ui/Heading"
import GridBox from "../components/layout/GridBox"

const AboutPage = ({ data }) => {
  const omMegPage = data.wpgraphql.omMeg
  const studioPage = data.wpgraphql.studio
  const omMegContent = omMegPage.content
  const studoContent = studioPage.content

  const featureImageOne =
    omMegPage.featuredImage.imageFile.childImageSharp.fluid
  const featureImageOneText = omMegPage.featuredImage.altText

  const featureImageTwo =
    studioPage.featuredImage.imageFile.childImageSharp.fluid
  const featureImageTwoText = studioPage.featuredImage.altText

  const imageOne =
    omMegPage.acfPostGallery.acfimagecollection.acfimage1.imageFile
      .childImageSharp.fluid
  const imageOneText =
    omMegPage.acfPostGallery.acfimagecollection.acfimage1.altText

  const imageTwo =
    omMegPage.acfPostGallery.acfimagecollection.acfimage2.imageFile
      .childImageSharp.fluid
  const imageTwoText =
    omMegPage.acfPostGallery.acfimagecollection.acfimage2.altText

  return (
    <Layout pageHeading={omMegPage.title}>
      <SEO
        title={omMegPage.title}
        description="Informasjon om Fotograf Morten Flaten og fotostudioet hans i Slemmestad, Asker"
      />
      <GridBox section maxWidth="650px">
        <GridBox
          placeItems="start"
          justifySelf="center"
          dangerouslySetInnerHTML={{ __html: omMegContent }}
        />
        <Img
          fluid={featureImageOne}
          altText={featureImageOneText}
          style={{
            width: "100%",
            maxWidth: featureImageOne.presentationWidth,
            justifySelf: "center",
            padding: "1rem 0",
          }}
        />
      </GridBox>
      <GridBox section maxWidth="650px" margin="3rem 0">
        <Heading h2 center>
          Fotostudio
        </Heading>
        <GridBox
          placeItems="start"
          justifySelf="center"
          maxWidth="650px"
          dangerouslySetInnerHTML={{ __html: studoContent }}
        />
        <GridBox gap="2rem" padding="0 0 2rem 0">
          <Img
            fluid={featureImageTwo}
            altText={featureImageTwoText}
            style={{
              width: "100%",
              maxWidth: featureImageTwo.presentationWidth,
              justifySelf: "center",
            }}
          />
          <Img
            fluid={imageOne}
            altText={imageOneText}
            style={{
              width: "100%",
              maxWidth: imageOne.presentationWidth,
              justifySelf: "center",
            }}
          />
          <Img
            fluid={imageTwo}
            altText={imageTwoText}
            style={{
              width: "100%",
              maxWidth: imageTwo.presentationWidth,
              justifySelf: "center",
            }}
          />
        </GridBox>
      </GridBox>
    </Layout>
  )
}

export default AboutPage

export const omMegQuery = graphql`
  query omMegPage {
    wpgraphql {
      omMeg: page(id: "cGFnZTo2") {
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
              fluid(quality: 80, maxWidth: 1920) {
                presentationWidth
                presentationHeight
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        acfPostGallery {
          acfimagecollection {
            acfimage1 {
              id
              title
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 1920) {
                    presentationWidth
                    presentationHeight
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            acfimage2 {
              id
              title
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 1920) {
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
      studio: page(id: "cGFnZTozMzM=") {
        id
        title
        content
        featuredImage {
          title
          id
          altText
          sourceUrl
          imageFile {
            childImageSharp {
              fluid(quality: 80, maxWidth: 1920) {
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
