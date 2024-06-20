/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--text-color'),
          accent: withOpacity('--accent-color'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--surface-color'),
          accent: withOpacity('--accent-color'),
        },
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),
    plugin(function({ addUtilities, theme, e }) {
      const newUtilities = {};
      const opacityValues = theme('opacity');

      Object.keys(opacityValues).forEach(opacityKey => {
        const value = opacityValues[opacityKey];
        newUtilities[`.bg-skin-accent-opacity-${e(opacityKey)}`] = {
          backgroundColor: `rgba(var(--accent-color), ${value})`
        };
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

