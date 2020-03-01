import styled, { css } from "styled-components"

export const FrontMain = styled.main`
  grid-column: 1 / -1;
  width: 100%;
`

export const FrontSection = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  display: grid;
  grid-template-columns: 1fr;

  background-color: ${props => {
    if (props.bgColor) return props.bgColor
    if (props.lightGray) return "var(--light-gray)"
    else if (props.gray) return "var(--gray"
    else if (props.black) return "var(--black)"
    return "initial"
  }};

  @media screen and (min-width: 900px) {
    grid-template-columns: 20% auto 10%;
  }

  @media screen and (min-height: 1600px) {
    min-height: min-content;
  }
`

const sectionBaseStyle = css`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 2rem;
  align-items: start;
  justify-items: center;

  @media screen and (min-width: 900px) {
    grid-column: 2;
    padding: 5rem 0;
  }
`

export const GallerySection = styled.section`
  ${sectionBaseStyle}
`

export const NewsAndCampaignSection = styled.section`
  ${sectionBaseStyle}
  grid-template-areas: 
    "campaign" 
    "news";

  @media screen and (min-width: 1440px) {
    grid-template-areas: "news campaign";
    grid-template-columns: 3fr 2fr;
  }
`
