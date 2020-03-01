import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const baseStyle = css`
  display: grid;
  grid-area: ${props => {
    if (props.area) return props.area
    return "auto"
  }};
  width: ${props => {
    if (props.width) return props.width
    return "100%"
  }};
  max-width: ${props => {
    if (props.maxWidth) return props.maxWidth
    return "100%"
  }};
  ${props => {
    return (
      props.height &&
      css`
        height: ${props => props.height};
      `
    )
  }};
  ${props => {
    return (
      props.maxHeight &&
      css`
        max-height: ${props => props.maxHeight};
      `
    )
  }};
  margin: ${props => {
    if (props.margin) return props.margin
    return "initial"
  }};
  padding: ${props => {
    if (props.padding) return props.padding
    return "initial"
  }};
  grid-template-columns: 1fr;
  grid-template-rows: ${props => {
    if (props.rows) return props.rows
    return "auto"
  }};
  gap: ${props => {
    if (props.gap) return props.gap
    return "0"
  }};
  align-items: center;
  justify-items: center;
  place-items: center center;
  ${props => {
    if (props.placeItems) {
      const align = props.placeItems.split(" ")[0]
      const justify = props.placeItems.split(" ")[1]
      return (
        props.placeItems &&
        css`
          align-items: ${align};
          justify-items: ${justify};
          place-items: ${props.placeItems};
        `
      )
    }
  }};
  background: ${props => {
    if (props.bgColor) return props.bgColor
    if (props.lightGray) return "var(--light-gray)"
    else if (props.gray) return "var(--gray"
    else if (props.black) return "var(--black)"
    else if (props.white) return "var(--white)"
    return "initial"
  }};

  ${props => {
    return (
      props.linearGreen &&
      css`
        background: var(--linear-gradient-blgr);
        border-radius: var(--border-radius);
        color: var(--white);
      `
    )
  }};

  ${props => {
    return (
      props.radialGreen &&
      css`
        background: var(--radial-gradient-blgr);
        border-radius: var(--border-radius);
        color: var(--white);
      `
    )
  }};

  @media screen and (min-width: 680px) {
    grid-template-columns: ${props => {
      if (props.columns) return props.columns
      return "1fr"
    }};
  }
`

const DivElement = styled.div`
  ${baseStyle}

  ${props => {
    return (
      props.minHeight &&
      css`
        min-height: ${props.minHeight};
      `
    )
  }}
  
  @media screen and (orientation: portrait) and (min-height: 1600px) {
    min-height: min-content;
  }
`

const BodyWrap = styled.div`
  ${baseStyle}

  @media screen and (min-width: 900px) {
    grid-template-columns: 20% auto 15%;
    margin: 0 auto;
    max-width: 1920px;
  }

  @media screen and (min-width: 1540px) {
    grid-template-columns: 22% auto 17%;
  }
`

const HeaderElement = styled.header`
  ${baseStyle}
  margin-top: 12%;
  grid-area: 1 / 1;

  @media screen and (min-width: 600px) {
    margin-top: 15%;
  }

  @media screen and (min-width: 900px) {
    margin-top: 0;
    grid-area: 1 / 2;
  }
`

const MainElement = styled.main`
  ${baseStyle}
  max-width: 1200px;
  align-self: start;
  grid-area: 2 / 1;

  @media screen and (min-width: 900px) {
    grid-area: 2 / 2;
  }
`

const FooterElement = styled.footer`
  ${baseStyle}
`

const ArticleElement = styled.article`
  ${baseStyle}
`

const SectionElement = styled.section`
  ${baseStyle}
  margin: 2rem 0;
  padding: 0 0.7rem;
  align-content: center;

  @media screen and (min-width: 900px) {
    padding: 0;
    min-height: ${props => {
      if (props.minHeight) return props.minHeight
      return "50vh"
    }};
  }
`

const GridBox = ({
  bodyWrap,
  header,
  main,
  footer,
  article,
  section,
  area,
  width,
  height,
  minHeight,
  padding,
  margin,
  column,
  rows,
  gap,
  placeItems,
  justifySelf,
  alignSelf,
  children,
  ...props
}) => {
  if (bodyWrap) {
    return (
      <BodyWrap
        area={area}
        width={width}
        height={height}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </BodyWrap>
    )
  }
  if (header) {
    return (
      <HeaderElement
        area={area}
        width={width}
        height={height}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </HeaderElement>
    )
  }
  if (main) {
    return (
      <MainElement
        area={area}
        width={width}
        height={height}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </MainElement>
    )
  }
  if (footer) {
    return (
      <FooterElement
        area={area}
        width={width}
        height={height}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </FooterElement>
    )
  }
  if (article) {
    return (
      <ArticleElement
        area={area}
        width={width}
        height={height}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </ArticleElement>
    )
  }
  if (section) {
    return (
      <SectionElement
        area={area}
        width={width}
        height={height}
        minHeight={minHeight}
        padding={padding}
        column={column}
        rows={rows}
        gap={gap}
        placeItems={placeItems}
        justifySelf={justifySelf}
        alignSelf={alignSelf}
        {...props}
      >
        {children}
      </SectionElement>
    )
  }
  return (
    <DivElement
      area={area}
      width={width}
      height={height}
      minHeight={minHeight}
      margin={margin}
      padding={padding}
      column={column}
      rows={rows}
      gap={gap}
      placeItems={placeItems}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      {...props}
    >
      {children}
    </DivElement>
  )
}

GridBox.propTypes = {
  area: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  column: PropTypes.string,
  rows: PropTypes.string,
  gap: PropTypes.string,
  placeItems: PropTypes.string,
  justifySelf: PropTypes.string,
  alignSelf: PropTypes.string,
  children: PropTypes.node,
}

export default GridBox
