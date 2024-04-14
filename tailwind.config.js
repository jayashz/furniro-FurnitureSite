/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage:{
        'hero-bgrnd': "url('/src/assets/Interior Landing Page Mockup.jpg')",
        'gal-bgrnd': "url('/src/assets/Ecommerce UI.png')",
      }
    },
  },
  plugins: [],
}

