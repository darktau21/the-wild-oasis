import { css } from 'styled-components';

const globalStyle = css`
  :root {
    /* Indigo */
    --color-brand-50: rgb(238 242 255);
    --color-brand-100: rgb(224 231 255);
    --color-brand-200: rgb(199 210 254);
    --color-brand-500: rgb(99 102 241);
    --color-brand-600: rgb(79 70 229);
    --color-brand-700: rgb(67 56 202);
    --color-brand-800: rgb(55 48 163);
    --color-brand-900: rgb(49 46 129);

    /* Grey */
    --color-grey-0: rgb(255 255 255);
    --color-grey-50: rgb(249 250 251);
    --color-grey-100: rgb(243 244 246);
    --color-grey-200: rgb(229 231 235);
    --color-grey-300: rgb(209 213 219);
    --color-grey-400: rgb(156 163 175);
    --color-grey-500: rgb(107 114 128);
    --color-grey-600: rgb(75 85 99);
    --color-grey-700: rgb(55 65 81);
    --color-grey-800: rgb(31 41 55);
    --color-grey-900: rgb(17 24 39);
    --color-blue-100: rgb(224 242 254);
    --color-blue-700: rgb(3 105 161);
    --color-green-100: rgb(220 252 231);
    --color-green-700: rgb(21 128 61);
    --color-yellow-100: rgb(254 249 195);
    --color-yellow-700: rgb(161 98 7);
    --color-silver-100: rgb(229 231 235);
    --color-silver-700: rgb(55 65 81);
    --color-indigo-100: rgb(224 231 255);
    --color-indigo-700: rgb(67 56 202);
    --color-red-100: rgb(254 226 226);
    --color-red-700: rgb(185 28 28);
    --color-red-800: rgb(153 27 27);
    --backdrop-color: rgb(255 255 255 / 0.1);
    --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgb(0 0 0 / 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgb(0 0 0 / 0.12);
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /* For dark mode */
    --image-grayscale: 0;
    --image-opacity: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition:
      background-color 0.3s,
      border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--color-grey-700);
    transition:
      color 0.3s,
      background-color 0.3s;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    color: var(--color-grey-500);
    background-color: var(--color-grey-200);
  }

  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    hyphens: auto;
    overflow-wrap: break-word;
  }

  img {
    max-width: 100%;

    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }
`;

export default globalStyle;
