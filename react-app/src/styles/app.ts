import { createGlobalStyle } from './styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', '游ゴシック  Medium', meiryo, sans-serif;
        font-weight: normal;
        padding: 50px 0;
    }

    a {
        text-decoration: none;
        color: #555;
    }

    input, textarea, select {
        font-size: 17px;
    }
`