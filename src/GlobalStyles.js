import { createGlobalStyle } from 'styled-components';

// Assuming you have the OMORI_GAME font files in your project's public directory or hosted elsewhere
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OMORI_GAME';
    src: url('/path-to-your-font/omori_game.woff2') format('woff2'),
         url('/path-to-your-font/omori_game.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'OMORI_GAME', monospace;
  }

  // You can also directly apply the font family to specific elements if needed
  button, input, textarea {
    font-family: 'OMORI_GAME', monospace;
  }
`;

export default GlobalStyles;