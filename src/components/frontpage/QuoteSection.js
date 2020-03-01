import React from "react"

import GridBox from "../layout/GridBox"
import Heading from "../ui/Heading"
import Quote from "../ui/Quote"

const QuoteSection = () => {
  return (
    <GridBox>
      <Quote big>
        Jeg har kundene i fokus, både før, under og etter fotograferingen.
      </Quote>
      <Heading h3>Her kommer det mer</Heading>
    </GridBox>
  )
}

export default QuoteSection
