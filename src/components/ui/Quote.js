import React from "react"
import styled, { css } from "styled-components"

import GridBox from "../layout/GridBox"

const QuoteMark = styled.span`
  grid-area: 1/1;
  align-self: start;
  justify-self: end;
  margin-top: ${props => (props.big ? "-10%" : "-5%")};
  font-size: ${props => (props.big ? "12rem" : "6rem")};
  padding: 0.5rem;
  font-weight: 600;
  color: var(--bluegreen);
`

const QuoteText = styled.p`
  padding: 1rem;
  font-size: ${props => (props.big ? "2rem" : "1rem")};
  line-height: 150%;
  text-align: center;
  grid-area: 1 / 2 / span 2 / 2;
`

const Quote = ({ big, children, ...props }) => {
  return (
    <GridBox columns="auto 1fr" minHeight="auto">
      <QuoteMark big={big} {...props}>
        &#34;
      </QuoteMark>
      <QuoteText big={big} {...props}>
        {children}
      </QuoteText>
    </GridBox>
  )
}

export default Quote
