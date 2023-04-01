const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }

  export const device = {
    xxs: `(min-width: ${size.mobileS})`,
    xs: `(min-width: ${size.mobileM})`,
    sm: `(min-width: ${size.mobileL})`,
    md: `(min-width: ${size.tablet})`,
    lg: `(min-width: ${size.laptop})`,
    xl: `(min-width: ${size.laptopL})`,
    xxl: `(min-width: ${size.desktop})`,
    hg: `(min-width: ${size.desktop})`
  };