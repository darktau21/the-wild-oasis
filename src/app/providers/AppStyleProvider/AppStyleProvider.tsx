import { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import globalStyle from './globalStyle';

const StyleProvider = createGlobalStyle`${globalStyle}`;

const AppStyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyleProvider />
      {children}
    </>
  );
};

export default AppStyleProvider;
