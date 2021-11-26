module.exports = {
  purge: {
    enabled: true,
    content: [
        './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      "auto": "auto",
      "cover": "cover",
      "contain": "contain",
      "big": "462px",
      "mini": "256px "
    },

    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.16em',
      "2" : "2px",
      
     },

    extend: {
      flexDirection: ['hover', 'focus'],

      colors: {
        primary : '#BF0A30',
        secondary : '#002868',
        logo : '#AB0427',
        hrcolor: '#EEEEEE',
        top_color: '#F8F8F8',
        main_color: '#333333',
        border: '#B6B6B6'
      },

      lineHeight: {
        "25" : "25px"
      },

      spacing: {
        n750: "750px",
        n60: "60px",
        n70: "70px",
        n130: "130px",
        n26: "26px",
        n285: "285px",
        n85: "85px",
        n99: "99px",
        n150: "150px",
        n125: "125px",
        n245 : "245px",
        n350 : "350px",
        n49 : "49px",
        n76 : "76px",
        n18 : "18px",
        n50 : "50px",
        n100 : "100px",
        n200 : "200px",
        n90 : "90px",
        n5: "5px",
        n65 : "65px",
        n75 : "75px",
        n45: "45px",
        n190: "190px",
        n120: "120px",
        n30: "30px",
        n250: "250px",
        n370: "370px",
        n450: "450px",
        n462: "462px",
        n140: "140px",
        n284: "284px",
        n18: "18px",
        n300: "300px",
        n600: "600px",
        n290: "290px",
        n644: "644px",
        n480: "480px",
        n275: "275px",
        n365: "365px",
        n1220: "1220px",
        n219: "219px",
        n116: "116px",
        n110: "110px",
        n176: "176px",
        n515: "515px",
        n345: "345px",
        n1100: "1100px",
        n54: "54px",
        n120: "120px",
        n464: "464px",
        n475: "475px",
        n312: "312px",
        n470: "470px",
        n587: "587px",
        n2000: "2000px",
        n260: "260px",
        n403: "403px",
        n280: "280px",
        n744: "744px",
        n1130: "1130px",
        n650: "650px",
        n280: "280px",
        n46: "46px",
        n15: "15px",
        n630: "630px",
        n740: "740px",
        n180: "180px",
        n400: "400px",
        n220: "220px",
        n619: "619px",
        n240: "240px",
        n379: "379px",
        n23: "23px",
        n420: "420px",
        n402: "402px"

      },

      width: {
        "23/24" : "93%"
      },

      fontSize : {
        26 : "26px",
        36: "36px",
        40: "40px",
        34: "34px",
      },

      fontFamily: {
        "body": ['SourceSansPro',"serif"],
        "special": ['ProximaNova','sans-serif']
      },

      borderWidth: {
        10: "10px",
        6 : "6px",
        1: "1px",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
