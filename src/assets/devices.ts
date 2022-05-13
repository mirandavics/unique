export const sizes = {
  mobile: '320px',
  desktop: '1000px',
  largeDesktop: '1500px',
};

export const devices = {
  mobile: `@media (max-width: ${sizes.desktop})`,
  largeDesktop: `@media (min-width: ${sizes.largeDesktop})`,
};
