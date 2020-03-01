import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const FrontHeader = ({ children, className }) => {
  const FrontImageQuery = useStaticQuery(graphql`
    query {
      wpgraphql {
        page(id: "cGFnZTozODQ=") {
          id
          slug
          title
          acfPostGallery {
            acfimagecollection {
              acfimage1 {
                title
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                      presentationWidth
                      presentationHeight
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              acfimage2 {
                title
                sourceUrl
                altText
                imageFile {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1440) {
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
      }
    }
  `)

  const horizontalImage =
    FrontImageQuery.wpgraphql.page.acfPostGallery.acfimagecollection.acfimage1
      .imageFile
  const verticalImage =
    FrontImageQuery.wpgraphql.page.acfPostGallery.acfimagecollection.acfimage2
      .imageFile

  const imgSources = [
    verticalImage.childImageSharp.fluid,
    {
      ...horizontalImage.childImageSharp.fluid,
      // media: `(min-width: 1400px)`,
      media: `(orientation: landscape) and (min-width: 800px)`,
    },
  ]

  return (
    <BackgroundImage
      tag={`header`}
      role="img"
      aria-label="header background"
      className={className}
      fluid={imgSources}
      critical={true}
    >
      {children}
    </BackgroundImage>
  )
}

const FrontPageHeader = styled(FrontHeader)`
  grid-area: 1 / 1;
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: var(--white);
  display: grid;
  grid-template: auto 1fr auto 50px / 1fr;
  /* background-repeat: no-repeat, no-repeat, repeat; */
  background-position: center;
  margin-top: 12%;

  @media screen and (min-width: 900px) {
    margin-top: 0;
    grid-area: 1 / 1 / 1 / -1;
    place-items: center end;
  }

  @media screen and (min-height: 1600px) {
    min-height: 68vh;
  }
`

export default FrontPageHeader
