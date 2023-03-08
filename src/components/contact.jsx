import { Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";
import LegalInfo from "./legal";
import instaLogo from "../images/sergio-cabanas/social-media-svg/instagram_icon.svg";
import youtubeLogo from "../images/sergio-cabanas/social-media-svg/youtube_icon.svg";
import linkedinLogo from "../images/sergio-cabanas/social-media-svg/linkedin_icon.svg"


const Contact = () => {
  return (
    <VStack as={"footer"} id="contact" bg="background.main" pt={4}>
      <Heading color="font.darkViolet" fontSize={{sm:"xl", md:"6xl"}}>Get in touch</Heading>
      <Link _hover={{fontWeight: 700}} href="mailto:Sergio.m.cabanas@gmail.com" fontSize={{sm:"md", md:"2xl"}}>Sergio.m.cabanas@gmail.com</Link>
      <Link _hover={{fontWeight: 700}} fontSize={{sm:"md", md:"2xl"}} href="tel:+5491125853333">+54 9 11 2585 3333</Link>
      <HStack justifyContent={"center"} pb={4}>
        <Link
        _hover={{
          transform: "scale(1.1)",
        }}
        w={{base: "20%", sm: "25%", md: "30%"}} 
        ml={2} 
        href="https://instagram.com/ian_rue?igshid=YzgyMTM2MGM=" 
        target={"_blank"}>
        <Image src={instaLogo}></Image>
        </Link>
        <Link
        _hover={{
          transform: "scale(1.1)",
        }}
        w={{base: "20%", sm: "25%", md: "30%"}} 
        ml={2} 
        href="https://www.linkedin.com/in/sergiocabanas/" 
        target={"_blank"}>
          <Image src={linkedinLogo} />
        </Link>
        <Link
        _hover={{
          transform: "scale(1.1)",
        }}
        w={{base: "20%", sm: "25%", md: "30%"}} 
        ml={2} 
        href="https://youtube.com/@ian_rue" 
        target={"_blank"}>
          <Image src={youtubeLogo} />
        </Link>
      </HStack>
      <LegalInfo />
    </VStack>
  )
}

export default Contact;