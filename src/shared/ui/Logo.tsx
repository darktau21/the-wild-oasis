import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const StyledImg = styled.img`
  width: auto;
  height: 9.6rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <StyledImg alt='Logo' src='/logo-light.png' />
    </StyledLogo>
  );
}

export default Logo;
