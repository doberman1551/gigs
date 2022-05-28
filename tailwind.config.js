module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        
        background: "#19181f",
        graybg:"#242129",
        primary:"#fd3e81",
        secondary:"#23C9FF  ", 
        bluebg:"#8D86C9", 
        bluebg2:"#23C9FF",
        gradient1:"#7000FF",
        gradient2:"#AE2727",
        babypowder:"#FFFFFC"

      },
     
      
    },
    
  },
  plugins: [require('@tailwindcss/typography'),("daisyui")],
}
