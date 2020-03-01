import React from "react"
// import { graphql, useStaticQuery } from "gatsby"

import GalleriesImageList from "../imageFetch/GalleriesImageList"

import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"

const GalleriesBox = () => {
  return (
    <GridBox>
      <Heading h3>Portefølje</Heading>
      <GalleriesImageList />
    </GridBox>
  )
}

export default GalleriesBox
