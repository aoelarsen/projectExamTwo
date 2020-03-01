import styled from "styled-components"
// import GridBox from "./GridBox"

const PriceListWrapper = styled.div`
  width: 100%;
  max-width: 950px;
  display: grid;
  padding: 0 0.5rem;

  & table {
    padding: 0 1rem;
    width: 100%;
    border-collapse: collapse;
    & thead {
      border-bottom: 2px solid var(--bluegreen);
      & td {
        background: var(--white);
      }
    }
    & tr:nth-of-type(odd) {
      background: #eee;
    }
    & td,
    th {
      border-bottom: 1px solid var(--bluegreen);
      border-right: 1px dotted var(--light-bluegreen);
      text-align: center;
      text-align: left;
      padding: 0.2rem;
      font-weight: 400;
    }
  }

  @media screen and (min-width: 760px) {
    padding: 0 1rem;

    & h4 {
      padding: 2.5rem 0 1rem 0;
    }

    & table {
      & thead td {
        font-weight: 600;
      }
      & td,
      th {
        padding: 0.5rem 2rem;
      }
    }
  }
`

export default PriceListWrapper
