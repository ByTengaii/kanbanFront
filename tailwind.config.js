/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        'text':{
          'passive':'#787486',
          'active':'#0D062D'
        },
        background:{
          'selected':'#5030E514',
          'gray':'#F5F5F5'
          
        },  
        company:{
          'purple':'#5030E5',
        }
      }
    },
  },
  plugins: [],
}