import { createGlobalStyle } from 'styled-components';

export const GlobalStyleResets = createGlobalStyle`
/* -- RESET CSS -- */
html,
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
form,
label,
input,
textarea,
fieldset,
p,
td {
  margin: 0;
  padding: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a,
a:active,
a:focus,
input,
textarea {
  outline: none;
  text-decoration: none;
  color: inherit;
}

input {
  appearance: none;
  border-radius: 0;
}

td,
th {
  vertical-align: top;
  text-align: left;
}

img,
iframe,
fieldset {
  border: none;
}

ol,
ul {
  list-style: none;
}

li {
  list-style-type: none;
}

h1,
h2,
h3,
h4 {
  font-size: 100%;
  font-weight: normal;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  cursor: pointer;
  outline: none;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  font-smoothing: inherit;

  /* Corrects inability to style clickable \`input\` types in iOS */
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
}

/* ----- GLOBAL WIREFRAME AND STYLES ----- */

* {
  box-sizing: border-box;
}

*:after,
*:before {
  box-sizing: border-box;
}
`;
