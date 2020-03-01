import React from "react"
import styled, { css } from "styled-components"

const baseStyle = css`
  color: ${props => {
    if (props.invert) return "color: var(--white)"
    return "var(--black)"
  }};
  font-weight: ${props => {
    if (props.weight) return props.weight
    return "600"
  }};
  text-align: ${props => {
    if (props.center) return "center"
    if (props.right) return "right"
    return "left"
  }};
  width: 100%;
  padding: ${props => {
    if (props.padding) return props.padding
    return "1.5rem 0 1rem 0"
  }};
`

const HeadingOne = styled.h1`
  ${baseStyle}
  font-weight: 400;
  padding: 2.5rem 0 1rem 0;
  font-size: 2.5rem;

  @media screen and (min-width: 900px) {
    font-size: 3.5rem;
    padding-top: 3rem;
  }
`

const HeadingTwo = styled.h2`
  ${baseStyle}
  font-size: 1.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 900px) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
`

const HeadingThree = styled.h3`
  ${baseStyle}
  padding: 1.5rem 0.5rem 1rem 0.5rem;

  @media screen and (min-width: 1100px) {
    padding: 1.5rem 0 1rem 0;
  }
`

const HeadingFour = styled.h4`
  ${baseStyle}
`

const HeadingFive = styled.h5`
  ${baseStyle}
`

const Heading = ({
  h2,
  h3,
  h4,
  h5,
  weight,
  right,
  center,
  invert,
  ...props
}) => {
  if (h2)
    return (
      <HeadingTwo
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h3)
    return (
      <HeadingThree
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h4)
    return (
      <HeadingFour
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  if (h5)
    return (
      <HeadingFive
        weight={weight}
        right={right}
        center={center}
        invert={invert}
        {...props}
      />
    )
  return (
    <HeadingOne
      weight={weight}
      right={right}
      center={center}
      invert={invert}
      {...props}
    />
  )
}

export default Heading
