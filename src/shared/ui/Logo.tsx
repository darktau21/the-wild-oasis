import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledImg src='/logo-light.png' alt='Logo' />
    </StyledLogo>
  );
}

export default Logo;