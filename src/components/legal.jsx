import { VStack, Text, Image, Link, Flex } from "@chakra-ui/react"
import Swwwinglogo from "../images/logoSwwwing.png"

const LegalInfo = () => {
  return (
    <VStack w={"100%"} px={4} py={2} bg="background.secondary">
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text display={"flex"} fontSize={"sm"} color={"whiteAlpha.900"}>©</Text>
        <Link px={2} w={{base: 20, sm: 24}} href="mailto:swwwing.ar@gmail.com"><Image py={2} w={"100%"} src={Swwwinglogo} /></Link>  
        <Text display={"flex"} fontSize={"sm"} color={"whiteAlpha.900"}>2023 - All rights reserved</Text> 
      </Flex>
    </VStack>
  )
}

export default LegalInfo;