import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"
import Anchor from "../ui/Anchor"

const NewsBox = () => {
  const newsPostsQuery = useStaticQuery(graphql`
    query newsPosts {
      wpgraphql {
        posts(where: { categoryId: 6, orderby: { field: DATE, order: DESC } }) {
          nodes {
            id
            date
            title
            slug
            excerpt
            content
            featuredImage {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 650) {
                    presentationWidth
                    presentationHeight
                    ...GatsbyImageSharpFluid
                  }
                  fixed(quality: 70, width: 650, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const newsOne = newsPostsQuery.wpgraphql.posts.nodes[0]
  const topNewsLink = `/nyhetsarkiv/${newsOne.slug}`
  const newsImage = newsOne.featuredImage
    ? newsOne.featuredImage.imageFile.childImageSharp.fixed
    : null
  const oldNews = newsPostsQuery.wpgraphql.posts.nodes.slice(1, 4)

  return (
    <GridBox
      height="max-content"
      padding="1rem"
      maxWidth="650px"
      margin="2rem 0"
      style={{ gridArea: "news" }}
    >
      <Heading
        h5
        style={{
          borderBottom: "1px solid var(--bluegreen)",
          textTransform: "uppercase",
        }}
      >
        Siste oppdateringer
      </Heading>

      <GridBox
        padding="1rem"
        style={{
          borderBottom: "1px dotted var(--light-bluegreen)",
        }}
      >
        <Anchor link to={topNewsLink}>
          <Heading h2>{newsOne.title}</Heading>
          {newsImage !== null ? (
            <Img
              alt={newsOne.featuredImage.altText}
              fixed={newsImage}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <span />
          )}
        </Anchor>
        <GridBox dangerouslySetInnerHTML={{ __html: newsOne.excerpt }} />
        <Anchor
          link
          to={topNewsLink}
          italic="true"
          style={{ justifySelf: "end" }}
        >
          Les mer om {newsOne.title.toLowerCase()}
        </Anchor>
      </GridBox>
      {oldNews.map(news => {
        const newsLink = `/nyhetsarkiv/${news.slug}`
        return (
          <GridBox
            key={news.id}
            padding="1rem"
            placeItems="center start"
            style={{
              borderBottom: "1px dotted var(--light-bluegreen)",
            }}
          >
            <Anchor link to={newsLink}>
              <Heading h3>{news.title}</Heading>
            </Anchor>
            <GridBox
              placeItems="center start"
              dangerouslySetInnerHTML={{ __html: news.excerpt }}
            />
            <Anchor
              link
              to={newsLink}
              italic="true"
              style={{ justifySelf: "end" }}
            >
              Les mer om {news.title.toLowerCase()}
            </Anchor>
          </GridBox>
        )
      })}
    </GridBox>
  )
}

export default NewsBox
