/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["hauss", "Tahoma", "Sans-Serif"],
      serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      mono: ["Courier New", "monospace"],
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     fontFamily: {
//       sans: ["hauss", "Tahoma", "Sans-Serif"],
//       serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
//       mono: ["Courier New", "monospace"],
//     },
//   },
//   variants: {},
//   plugins: [],
// };
