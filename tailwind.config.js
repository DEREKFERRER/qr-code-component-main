/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        sm: '15px'
      },
      colors:{
        primary: 'hsl(212, 45%, 89%)',
    },
    fontFamily: {
      body: ['Outfit']
     }
    
  },
  plugins: [],
}
}
