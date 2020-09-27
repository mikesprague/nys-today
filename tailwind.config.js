module.exports = {
  purge: false,
  theme: {
    extend: {},
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
