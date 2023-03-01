import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    fonts: {
      heading: `"Unbounded", sans-serif`,
      body: `"Montserrat", sans-serif`,
    },
    colors: {
        background: {
          main: "#F5F5F5",
          secondary: "#212121",
        },
        font: {
        lightViolet: "#B389AC",
        darkViolet: "#996186"
        },
        fontSizeCustom: {
        subHeading: "40px"
        }
      },
  })
  
  export default theme