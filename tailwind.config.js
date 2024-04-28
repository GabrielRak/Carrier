export default {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    content: [],
    theme: {
      extend: {
        fontFamily: {
          primary: ["Montserrat"],
        },
        colors:{
          'dark-green':'#0A9944',
          'green':'#52E08C',
          'light-green':'#10FF71',
          'dark':'#141E46',
          'light-dark':'#141E46',
        }
      },
    },
    plugins: [],
  };

  