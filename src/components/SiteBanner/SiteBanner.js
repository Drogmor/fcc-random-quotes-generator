import styled from "styled-components";

const StyledBanner = styled.div`
  grid-area: ${(props) => props.position};
  h1 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 auto 16px;
    text-align: left;
    user-select: none;
  }
`;

export const SiteBanner = ({ title }) => (
  <StyledBanner position="banner">
    <h1>{title}</h1>
  </StyledBanner>
);
