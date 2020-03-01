import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Anchor from "../ui/Anchor"

const Logo = ({
  width,
  padding,
  logoWhite,
  logoBlack,
  iconBlack,
  iconWhite,
  className,
  bgColor,
}) => {
  const LogoQuery = useStaticQuery(graphql`
    query {
      logoBlack: file(
        relativePath: { eq: "logo/fotograf_morten_flaten_logo_black.svg" }
      ) {
        publicURL
      }
      logoWhite: file(
        relativePath: { eq: "logo/fotograf_morten_flaten_logo_white.svg" }
      ) {
        publicURL
      }
      iconBlack: file(
        relativePath: { eq: "icon/MortenFlaten_logo_ikon_sort.png" }
      ) {
        publicURL
        childImageSharp {
          fluid(quality: 100, maxWidth: 200, maxHeight: 50) {
            srcSet
            presentationWidth
            presentationHeight
          }
        }
      }
      iconWhite: file(
        relativePath: { eq: "icon/MortenFlaten_logo_ikon_hvit.png" }
      ) {
        publicURL
        childImageSharp {
          fluid(quality: 100, maxWidth: 200, maxHeight: 50) {
            srcSet
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  `)
  const altText = "Fotograf Morten Flaten Logo"

  if (logoBlack)
    return (
      <Anchor
        href="/"
        width={width}
        padding={padding}
        className={className}
        bgColor={bgColor}
        style={{ textAlign: "center" }}
      >
        <img
          src={LogoQuery.logoBlack.publicURL}
          alt={altText}
          style={{ maxWidth: "100%" }}
        />
      </Anchor>
    )

  if (logoWhite)
    return (
      <Anchor
        href="/"
        width={width}
        padding={padding}
        className={className}
        bgColor={bgColor}
        style={{ textAlign: "center" }}
      >
        <img
          src={LogoQuery.logoWhite.publicURL}
          alt={altText}
          style={{ maxWidth: "100%" }}
        />
      </Anchor>
    )

  if (iconBlack)
    return (
      <Anchor
        href="/"
        width={width}
        padding={padding}
        className={className}
        bgColor={bgColor}
      >
        <Img
          fluid={LogoQuery.iconBlack.childImageSharp.fluid}
          alt={altText}
          style={{ width: "100%" }}
        />
      </Anchor>
    )

  if (iconWhite)
    return (
      <Anchor
        href="/"
        width={width}
        padding={padding}
        className={className}
        bgColor={bgColor}
      >
        <Img
          fluid={LogoQuery.iconWhite.childImageSharp.fluid}
          alt={altText}
          style={{ width: "100%" }}
        />
      </Anchor>
    )
}

export default Logo
