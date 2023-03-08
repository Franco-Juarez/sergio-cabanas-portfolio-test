import { Flex, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
    return (
      <Flex as={"section"} id="about" px={4} py={8} background={"blackAlpha.800"} display={"flex"} flexDir={"column"} alignItems={{sm:"left", md:"center"}}>
        <Flex alignItems={"center"} flexDirection={"column"} w={{sm:"full", md:"75%"}}>
          <Heading w={"100%"} textAlign={"left"} color="font.lightViolet" fontSize={{sm:"xl", md:"6xl"}}>About me</Heading>
          <Text lineHeight={1.9} fontSize={{sm:"md", md:"22px"}} color={"whiteAlpha.900"}>
            Hi! My name is Sergio (AKA Ian Rue). My passion is to create high quality sounds <br />and music for video games and films. I also implement them using Wwise, Unreal 5, Unity and C#. 
          <Text lineHeight={1.9}>
            I have a strong education in music composition, audio, recording, mixing and delivering technical exports for several platforms.
          </Text>
          <Text lineHeight={1.9}>
            You can check out my resume and my contact info below, feel free to contact me any time.
          </Text>
          </Text>
        </Flex>
      </Flex>
    )
}

export default AboutSection;