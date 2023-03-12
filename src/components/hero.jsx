import { VStack, Image, Heading, Flex, Text, Box, HStack } from "@chakra-ui/react";
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
      <HStack
        alignItems={"center"} 
        justifyContent={"center"}
        w={{base: "100%", md: "75%"}} >
        <Flex w={"100%"}>
          <Box
          w={"50%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}>
            <Image
              mx={0}
              my={"auto"}
              as={motion.img}
              w={{base:"80%", sm:"70%", lg:"45%"}}
              animate={{opacity: 1}}
              borderRadius="full" 
              src={ portfolioImage } 
              alt='Sergio Cabañas portrait' />
          </Box>
          <Box
            w={"50%"}
            pl={4}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            >
            <VStack
            alignItems={"flex-start"}>
              <Image 
                w={"20%"} 
                src={ planetBImg } 
                alt='A simple planet illustration'
                />
              <Heading as={"h1"} color="font.darkViolet" fontSize={{base: "2xl", sm:"4xl"}}>Sergio <br /> Cabanas</Heading>
              <Text lineHeight={1.3} fontSize={{base:"sm", sm:"xl", lg:"2xl"}}>SOUND DESIGNER <br />& MUSIC COMPOSER</Text>
            </VStack>
          </Box>
        </Flex>
      </HStack> 
    </VStack>
    )
}

export default HeroSection