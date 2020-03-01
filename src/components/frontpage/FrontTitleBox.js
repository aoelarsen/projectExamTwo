import React from "react"
import styled from "styled-components"

import Heading from "../ui/Heading"

const TitleWrap = styled.div`
  grid-area: 3 / 1;
  display: grid;
  justify-self: end;
  place-items: end;
  background-color: var(--light-gray);
  & h1 {
    display: none;
  }
  & span {
    text-align: center;
    padding: 1rem;
  }

  @media screen and (min-width: 550px) {
    grid-row: 3;
    & h1 {
      display: block;
      padding: 0;
      text-align: center;
    }
    & span {
      text-align: center;
      width: 100%;
      padding-bottom: 1rem;
    }
  }

  @media screen and (min-width: 900px) {
    border-radius: 0.3rem 0 0 0.3rem;
    padding: 0 5rem;
    & h1 {
      padding: 0;
    }
    & span {
      width: auto;
      padding: 0 0 0.5rem 0;
    }
  }
`

const FrontTitleBox = ({ description }) => {
  return (
    <TitleWrap>
      <Heading right>Fotograf Morten&nbsp;Flaten</Heading>
      <span>{description}</span>
    </TitleWrap>
  )
}

export default FrontTitleBox
