import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"
import Anchor from "../ui/Anchor"

import { sortArrayBySlug } from "../../utils/helpers"

const GalleriesImageList = () => {
  const galleriesData = useStaticQuery(graphql`
    query GalleriesList {
      wpgraphql {
        page(id: "cGFnZToy") {
          childPages(first: 15) {
            nodes {
              slug
              title
              id
              featuredImage {
                sourceUrl
                altText
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
      }
    }
  `)

  const galleries = sortArrayBySlug(
    galleriesData.wpgraphql.page.childPages.nodes
  )

  // const galleries = galleriesData.wpgraphql.page.childPages.nodes

  return (
    <GridBox columns="repeat(auto-fit, minmax(320px, 1fr))" gap="0 0.5rem">
      {galleries.map(gallery => {
        const imageFile = gallery.featuredImage.imageFile
        const altText = gallery.featuredImage.altText
        const galleryUrl = `/gallerier/${gallery.slug}`
        const maxWidth = `${imageFile.childImageSharp.fluid.presentationWidth.toString()}px`

        return (
          <GridBox
            key={gallery.id}
            padding="2rem 0"
            columns="1fr"
            rows="auto 1fr"
          >
            <Anchor link to={galleryUrl}>
              <GridBox maxWidth={maxWidth}>
                <Img
                  alt={altText}
                  fluid={imageFile.childImageSharp.fluid}
                  style={{
                    width: "320px",
                    maxWidth: "100vw",
                    height: "320px",
                    scrollSnapAlign: "center",
                  }}
                />
              </GridBox>
            </Anchor>
            <Anchor link to={galleryUrl}>
              <Heading h3 center weight="400" style={{ fontSize: "1.5rem" }}>
                {gallery.title}
              </Heading>
            </Anchor>
          </GridBox>
        )
      })}
    </GridBox>
  )
}

export default GalleriesImageList
