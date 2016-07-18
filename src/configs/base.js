// @import url(//fonts.googleapis.com/css?family=Roboto),

export default {
  html: {
    height: '100%',
    fontSize: '62.5%',
  },

  body: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    '-webkit-touch-callout': 'none',
  },

  '#app': {
    height: '100%',
  },

  'a, abbr, address, article, aside, audio, b, blockquote, body, caption, cite, code, dd, del, dfn, dialog, div, dl, dt, em, fieldset, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, p, pre, q, samp, section, small, span, strong, sub, sup, table, tbody, td, tfoot, th, thead, time, tr, ul, var, video': {
    padding: 0,
    margin: 0,
    border: 0,
    outline: 0,
  },

  '*, *:before, *:after': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  'h1, h2, h3, h4, h5, h6, label, p, button, abbr, a, span, small': {
    fontSmoothing: 'antialiased',
    '-webkit-font-smoothing': 'antialiased',
    'text-size-adjust': '100%',
  },

  a: {
    textDecoration: 'none',
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',

    '&:active': {
      color: '#4285f4',
    },

    '&:hover': {
      color: '#4285f4',
    },
  },

  'input:not([type="checkbox"]):not([type="radio"]), button': {
    outline: 'none',
    appearance: 'none',
    '-webkit-touch-callout': 'none',
    '-webkit-tap-highlight-color': 'rgba(255, 255, 255, 0)',
  },

  'button, html [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'none',
  },
};
