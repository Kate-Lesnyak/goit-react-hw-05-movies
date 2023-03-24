export const theme = Object.freeze({
  colors: {
    accent: '#F0940A',
    white: '#f2f2f2',
    primaryTextColor: '#000000',
    buttonTextColor: '#2C2B2B',
    errorColor: '#b70208',
    backgroundColor: '#338309',
    borderInputColor: '#010101',
    backgroundLoaderColor: 'rgba(0, 0, 0, 0.6)',
  },

  boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px - 1px rgba(0, 0, 0, 0.12)',

  borderColor: '1px solid #eeeeee',


  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
    xxl: '34px',
    xxxl: '42px',
  },

  breakpoints: {
    xs: '320px',
    s: '480px',
    m: '768px',
    l: '1200px',
  },

  transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  spacing: value => `${4 * value}px`,
});
