import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: red;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

const Header = () => {
  return <StyledHeader>HEADER</StyledHeader>;
};

export default Header;