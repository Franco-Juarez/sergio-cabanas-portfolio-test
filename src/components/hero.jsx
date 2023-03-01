import { VStack, Image, Heading, Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import portfolioImage  from "../images/sergio-cabanas/linkedin-picture.png";
import planetBImg from "../images/sergio-cabanas/hero-svg/planet-2.svg";



const HeroSection = () => {

  return (
    <VStack 
    as={"section"}
    className="opacityEfx"
    bg="background.main" 
    py={{base: 4, md: 8}} 
    px={4} 
    justify={"center"}>
      <Flex
        alignItems={"center"} 
        justifyContent={"center"}
        w={{base: "100%", md: "75%"}} >
        <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"} w={"50%"}
        position={"relative"}>
          <Image
            m={0}
            as={motion.img}
            animate={{opacity: 1}}
            borderRadius="full" 
            w={"75%"} 
            src={ portfolioImage } 
            alt='Sergio Cabañas portrait' />
        </Box>
        <Box 
          display={"flex"}
          alignItems={"flex-start"} 
          flexDirection={"column"}
          justifyContent={"center"}
          w={"50%"}
          >
            <Box pl={"5%"}>
            <Image 
              w={{base: "20%", md:"25%"}} 
              src={ planetBImg } 
              alt='Sergio Cabañas portrait'
              />
            <Heading as={"h1"} color="font.darkViolet" fontSize={{base: "2xl", sm:"4xl", lg:"6xl"}}>Sergio <br /> Cabanas</Heading>
            <Text lineHeight={1.3} fontSize={{base:"sm", sm:"xl", md:"3xl"}}>SOUND DESIGNER <br />& MUSIC COMPOSER</Text>
            </Box>
        </Box>
      </Flex>
    </VStack>
    )
}

export default HeroSection