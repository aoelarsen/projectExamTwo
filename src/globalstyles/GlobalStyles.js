import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #202020;
    --gray: #404040;
    --light-gray: #eeeeee;
    --white: #ffffff;
    --bluegreen: #275e6a;
    --light-bluegreen: #3c7e8d;
    --error: #6A3327;
    --linear-gradient-blgr: linear-gradient(
      to right,
      var(--bluegreen),
      var(--light-bluegreen)
    );
    --radial-gradient-blgr: radial-gradient(
      var(--light-bluegreen),
      var(--bluegreen)
    );
    --radial-gradient-black: radial-gradient(var(--gray), var(--black));
    --radial-gradient-gray: radial-gradient(var(--white), var(--light-gray));
    --border-radius: 3px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Montserrat", sans-serif;    
    color: var(--black);
  }
    
  a {
    text-decoration: none;
    color: var(--bluegreen);    

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    &:focus {
      text-decoration: underline;
      outline: 1px solid var(--bluegreen);
    }
  }

  ul {
    font-family: inherit;
    font-size: inherit;
    padding: 0 1.5rem;
    margin: 2rem 0;
  }

  li {
    padding: 0.4rem 0 0 0.5rem;    
  }

  h3,
  h4,
  h5,
  h6 {
    width: 100%;    
    padding: 1.5rem 0.5rem 1rem 0.5rem;
  }

  p {
    padding: 0.7rem 0.5rem;
    max-width: 650px;
    line-height: 150%;
  }

  .bold {
    font-weight: 600;
  }
  .biggerText {
    font-size: 1.3rem;
  }
  .smallerText {
    font-size: 0.8rem;
  }

  .noScroll {
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    position: fixed;
  }

  @media screen and (min-width: 1100px) {
    h3,
    h4,
    h5,
    h6 {
      padding: 1.5rem 0 1rem 0;
    }
    p {
      padding: 0.7rem 0;
    }
  }

`

export default GlobalStyles
