import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"

const CampaignBox = () => {
  const campaignPostsQuery = useStaticQuery(graphql`
    query campaigns {
      wpgraphql {
        posts(where: { categoryId: 7, orderby: { field: DATE, order: DESC } }) {
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
  `)

  const campaignOne = campaignPostsQuery.wpgraphql.posts.nodes[0]

  return (
    <GridBox
      height="max-content"
      padding="1rem"
      maxWidth="650px"
      margin="2rem 0"
      style={{ gridArea: "campaign" }}
    >
      <GridBox linearGreen padding="1rem">
        <Heading h2 invert center>
          {campaignOne.title}
        </Heading>
        <GridBox dangerouslySetInnerHTML={{ __html: campaignOne.content }} />
      </GridBox>
    </GridBox>
  )
}

export default CampaignBox
