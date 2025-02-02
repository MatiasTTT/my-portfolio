// tailwind.config.js
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        coal: '#080808', // Replace with your preferred hex code
        lightgray: '#171717',
        hoverovercolor: '#292929'   // a lighter gray for buttons or containers
        // You can add more custom colors as needed
      },
    },
  },
  plugins: [],
};
