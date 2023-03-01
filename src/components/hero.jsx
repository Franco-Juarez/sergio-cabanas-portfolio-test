import { VStack, Image, Heading, Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import portfolioImage  from "../images/sergio-cabanas/linkedin-picture.png" 
import rocketImg from "../images/sergio-cabanas/hero-svg/rocket.svg"
import planetBImg from "../images/sergio-cabanas/hero-svg/planet-2.svg"



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
        <Box w={"50%"}
        position={"relative"}>
          <Image
            m={0}
            as={motion.img}
            animate={{opacity: 1}}
            borderRadius="full" 
            w={"90%"} 
            src={ portfolioImage } 
            alt='Sergio Cabañas portrait' />
          <Image 
            display={{base: "none", md: "inline-block"}}
            w={"35%"}
            transform= {"rotate(265deg)"}
            src={ rocketImg } 
            alt='Sergio Cabañas portrait'
            position={"absolute"}
            zIndex={"1"}
            bottom={"6%"}
            left={"-12%"}/>
        </Box>
        <Box 
          position={"relative"} 
          ml={8} 
          alignItems={"flex-start"} 
          flexDirection={"column"} 
          w={"50%"}>
          <Image 
            w={{base: "20%", md:"25%"}} 
            src={ planetBImg } 
            alt='Sergio Cabañas portrait'
            />
          <Heading as={"h1"} color="font.darkViolet" fontSize={{base: "2xl", sm:"4xl", lg:"6xl"}}>Sergio <br /> Cabanas</Heading>
          <Text lineHeight={1.3} w={{base: "100%", md:"75%"}} fontSize={{base:"sm", sm:"xl", md:"3xl"}}>SOUND DESIGNER <br />& MUSIC COMPOSER</Text>
        </Box>
      </Flex>
    </VStack>
    )
}

export default HeroSection