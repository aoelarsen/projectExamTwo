import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/head/seo"

import GridBox from "../components/layout/GridBox"
import Heading from "../components/ui/Heading"
import Anchor from "../components/ui/Anchor"
import DateWrap from "../components/ui/DateWrap"

import { reDate } from "../utils/helpers"

const NewsArchive = ({ data }) => {
  const posts = data.wpgraphql.posts.nodes
  const newsOne = posts[0]
  const oldPosts = posts.slice(1)
  const newsOneSlug = `/nyhetsarkiv/${newsOne.slug}`
  const firstImage = newsOne.featuredImage
    ? newsOne.featuredImage.imageFile.childImageSharp.fluid
    : null

  return (
    <Layout pageHeading="Nyhetsarkiv">
      <SEO title="Nyhetsarkiv" description="En liste med nyhetsoppdateringer" />
      <GridBox
        maxWidth="650px"
        placeItems="center start"
        padding="1rem 0"
        gap="0.5rem"
        style={{
          borderBottom: "1px solid var(--bluegreen)",
          alignContent: "center",
        }}
      >
        <Anchor link to={newsOneSlug} width="auto">
          <Heading h2>{newsOne.title}</Heading>
        </Anchor>
        {firstImage !== null ? (
          <Anchor link to={newsOneSlug}>
            <Img
              alt={newsOne.featuredImage.altText}
              fluid={firstImage}
              style={{ width: "100%" }}
            />
          </Anchor>
        ) : (
          undefined
        )}

        <DateWrap>
          <p>Publisert: {reDate(newsOne.date)}</p>
        </DateWrap>
        <GridBox
          dangerouslySetInnerHTML={{ __html: newsOne.excerpt }}
          padding="1rem 0"
        />
        <Anchor link to={newsOneSlug} italic="true">
          Les mer om {newsOne.title.toLowerCase()}
        </Anchor>
      </GridBox>
      {oldPosts.map(post => {
        const postLink = `/nyhetsarkiv/${post.slug}`
        const postImage = post.featuredImage
          ? post.featuredImage.imageFile.childImageSharp.fluid
          : null

        return (
          <GridBox
            key={post.id}
            padding="1rem 0"
            margin="2rem 0"
            placeItems="center start"
            maxWidth="650px"
            style={{
              borderBottom: "1px solid var(--light-bluegreen)",
            }}
          >
            <Anchor link to={postLink} width="auto">
              <Heading h3>{post.title}</Heading>
            </Anchor>
            {postImage !== null ? (
              <Anchor link to={postLink}>
                <Img
                  alt={post.featuredImage.altText}
                  fluid={postImage}
                  style={{ width: "100%" }}
                />
              </Anchor>
            ) : (
              undefined
            )}
            <DateWrap>
              <p>Publisert: {reDate(post.date)}</p>
            </DateWrap>
            <GridBox
              placeItems="center start"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <Anchor
              link
              to={postLink}
              italic="true"
              style={{ justifySelf: "end" }}
            >
              Les mer om {post.title.toLowerCase()}
            </Anchor>
          </GridBox>
        )
      })}
    </Layout>
  )
}

export default NewsArchive

export const query = graphql`
  query newsPostsPage {
    wpgraphql {
      posts(where: { categoryId: 6, orderby: { field: DATE, order: DESC } }) {
        nodes {
          databaseId
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
  }
`
