module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: {
          darkRed: '#870c0b',


        },
        index:{
          color1:"#181F21",
          color2:"#272727",
          color3:"#292323",
          color4:"#282A3A",
          color5:"#735F32",
        },
        home:{
          cl1:"#181f21",
          cl2:"#181f21",
          cl3:"#870c0b",
          cl4:"#292323",
          cl5:"#282a3a",
          cl6:"#735f32"
        }
      },   
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  "sm":'350px',
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        desktop: '1236px',
        pro:'1095px',
        main: '1430px',
        // => @media (min-width: 1280px) { ... }
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
