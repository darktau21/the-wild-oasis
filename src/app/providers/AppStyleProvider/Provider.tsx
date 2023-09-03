import { PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';

import globalStyle from './globalStyle';

const StyleProvider = createGlobalStyle`${globalStyle}`;

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyleProvider />
      {children}
    </>
  );
};

export default Provider;
