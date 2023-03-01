import { Heading, VStack, Flex } from "@chakra-ui/react"
import Videos from "./gridItems";

const WorksSection = () => {

  return (
    <Flex as={"section"} id="workSection" bg="background.main" flexDirection={"column"} alignItems={"center"}>
      <VStack alignItems={"center"} w={{sm:"100%", md:"75%"}} p={4}>
        <Heading color="font.darkViolet" w={"100%"} textAlign={{sm:"right", md:"center"}} fontSize={{sm:"xl", md:"6xl"}} pb={"4"}>My work</Heading>
        <Videos />
      </VStack>
    </Flex>
  )
}

export default WorksSection;