import styled from "styled-components"

const CampaignWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--white);
  background: var(--linear-gradient-blgr);
  width: 95%;
  border-radius: var(--border-radius);

  @media screen and (min-width: 760px) {
    margin: 2rem;
    max-width: 50em;
  }
`

export const CampaignInner = styled.section`
  display: grid;
  gap: 1rem;
  padding: 2rem;
  & * {
    width: 100%;
    max-width: 100%;
  }

  @media screen and (min-width: 760px) {
    max-width: 61.8%;
  }
`

export default CampaignWrapper
