import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    VStack,
    Heading,
    Flex
  } from '@chakra-ui/react' 

const Faqs = () => {
  return (
    <VStack as={"section"} id='faqs' color={"whiteAlpha.900"} px={4} py={12} bg="background.secondary">
      <Flex flexDirection={"column"} width={{sm:"100%", md:"75%"}}>
        <Heading color="font.lightViolet" pb={2} w={"100%"} textAlign={{base: "center", md:"left"}} fontSize={{sm:"xl", md:"6xl"}}>FAQ´s</Heading>
        <Accordion borderColor={"font.darkViolet"} w={"100%"} allowMultiple >
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{bg:"font.darkViolet"}}>
                <Box fontWeight={"bold"} fontSize={{sm:"md", md:"xl"}} as="span" flex='1' textAlign='left'>
                Why should I need custom made sound and music for my video game project?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{sm:"md", md:"22px"}}>
            Custom made sound and music enhance the player's experience by creating immersion and atmosphere, while avoiding licensing restrictions.
            Also, you can establish a unique brand identity differentiating from other video games. With your personalized audio you will match the gameplay mechanics to emphasize key elements, making the game more engaging and enjoyable to play.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{bg:"font.darkViolet"}}>
                <Box fontWeight={"bold"} fontSize={{sm:"md", md:"xl"}} as="span" flex='1' textAlign='left'>
                When should I start developing audio ideas for my project?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{sm:"md", md:"22px"}}>
            Right after the first draft of the Game Design Document, we can talk about all the possibilities in audio.
            You don’t need to have a prototype running, I love to create and propose audio oriented mechanics from the very beginning and to help the project grow exponentially.
            My main goal is to help the players feel truly immersed in the game.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{bg:"font.darkViolet"}}>
                <Box fontWeight={"bold"} fontSize={{sm:"md", md:"xl"}} as="span" flex='1' textAlign='left'>
                How do you establish the pricing and what is included in your fee?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize={{sm:"md", md:"22px"}}>
            Just like your video game, every pricing is unique, and depends on several elements.
            So feel free to contact me, we’ll have a talk and then I’ll send you a detailed budget according to your needs. Everything is customizable and open to dialogue.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </VStack>
    )
}

export default Faqs;