module.exports = {
  purge: false,
  theme: {
    extend: {},
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    extendedFontSizeScale: true,
    defaultLineHeights: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
