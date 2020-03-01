import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/head/seo"
import GalleriesImageList from "../components/imageFetch/GalleriesImageList"

import GridBox from "../components/layout/GridBox"

const GalleriesPage = ({ data }) => {
  const page = data.wpgraphql.page

  return (
    <Layout pageHeading={page.title}>
      <SEO
        title={page.title}
        description="En portfolio med oversikt over fotogalleriene til Fotograf Morten Flaten"
      />
      <GridBox dangerouslySetInnerHTML={{ __html: page.content }} />
      <GalleriesImageList />
    </Layout>
  )
}

export default GalleriesPage

export const query = graphql`
  query GalleriesPage {
    wpgraphql {
      page(id: "cGFnZToy") {
        title
        slug
        content
      }
    }
  }
`
