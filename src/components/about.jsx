import { Flex, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
    return (
      <Flex as={"section"} id="about" px={4} py={8} background={"blackAlpha.800"} display={"flex"} flexDir={"column"} alignItems={{sm:"left", md:"center"}}>
        <Flex alignItems={"center"} flexDirection={"column"} w={{sm:"full", md:"75%"}}>
          <Heading w={"100%"} textAlign={"left"} color="font.lightViolet" fontSize={{sm:"xl", md:"6xl"}}>About me</Heading>
          <Text lineHeight={1.8} fontSize={{sm:"md", md:"22px"}} color={"whiteAlpha.900"}>
            Hi! My name is Sergio (AKA Ian Rue).
            My passion is to create high quality sounds and music for video games and films. I love designing environments thinking of audio as a one unified concept and not just sound effects and music as separate elements.
            I also implement them using Wwise, Unreal 5, Unity and C#.
          <Text lineHeight={1.8}>
            Some of my strengths are communication, high attention to details and storytelling through sound & music. I have a strong education in music composition and audio, from playing piano, guitar and singing to recording sfx, mixing and delivering specifical technical exports for different platforms.
          </Text>
          <Text lineHeight={1.8}>
            You can check out my CV and my contact info below. Feel free to contact me any time!
          </Text>
          </Text>
        </Flex>
      </Flex>
    )
}

export default AboutSection;