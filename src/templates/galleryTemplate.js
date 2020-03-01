import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GridBox from "../components/layout/GridBox"

const Gallery = ({ data }) => {
  const gallery = data.wpgraphql.page.childPages.nodes[0]
  const imageArray = Object.values(gallery.acfPostGallery.acfimagecollection)

  if (gallery !== null || gallery !== undefined) {
    const description = `Galleri med foto i kategorien ${gallery.title} av fotofraf Morten Flaten`

    return (
      <Layout pageHeading={gallery.title}>
        <SEO title={gallery.title} description={description} />
        <GridBox>
          {gallery.content !== null ? (
            <GridBox
              placeItems="start"
              maxWidth="650px"
              style={{ alignContent: "center" }}
              padding="1rem"
              dangerouslySetInnerHTML={{ __html: gallery.content }}
            />
          ) : null}

          <GridBox
            section
            gap="5rem 0"
            padding="0.5rem 0 1em 0"
            minHeight="100vh"
          >
            {imageArray.map(image => {
              if (image !== null) {
                const imageFluid = image.imageFile.childImageSharp.fluid
                const altText = image.altText
                const presentationWidth =
                  image.imageFile.childImageSharp.fluid.presentationWidth
                const presentationHeight =
                  image.imageFile.childImageSharp.fluid.presentationHeight
                const maxWidth = `${presentationWidth.toString()}px`
                const maxHeight =
                  presentationHeight < presentationWidth
                    ? `${presentationHeight.toString()}px`
                    : "90vh"

                return (
                  <GridBox key={image.id} height="100%">
                    <Img
                      alt={altText}
                      fluid={imageFluid}
                      style={{
                        width: "100%",
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                      }}
                      imgStyle={{
                        margin: "0 auto",
                      }}
                    />
                  </GridBox>
                )
              }
              return null
            })}
          </GridBox>
        </GridBox>
      </Layout>
    )
  }
  return null
}

export default Gallery

export const galleryQuery = graphql`
  query SingleGallery($databaseId: Int!) {
    wpgraphql {
      page(id: "cGFnZToy") {
        childPages(where: { id: $databaseId }) {
          nodes {
            slug
            title
            id
            content
            acfPostGallery {
              acfimagecollection {
                acfimage1 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage2 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage3 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage4 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage5 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage6 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage7 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage8 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage9 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage10 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage11 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage12 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage13 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage14 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
                        presentationWidth
                        presentationHeight
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                acfimage15 {
                  id
                  slug
                  title
                  altText
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(
                        quality: 80
                        maxWidth: 900
                        fit: CONTAIN
                        background: "#FFFFFF"
                      ) {
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
    }
  }
`
