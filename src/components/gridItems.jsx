import { GridItem, Box, Heading, Text, Grid, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { videoArray } from "../components/videoArray";

const Videos = () => {

  const switchBtn = document.querySelector(".seeMoreBtn");
  const filterVideoArray = videoArray.filter(video => video.id <= 8)
  
  const loadMore = () => {
    switch (videos.length) {
      case (8):
        setVideos(videoArray.filter(video => video.id <= 12))
        break;
      case (12):
        setVideos(videoArray.filter(video => video.id <= 16))
        switchBtn.innerHTML = "SHOW LESS"
        break;
      case (15):
        setVideos(videoArray.filter(video => video.id <= 8))
        switchBtn.innerHTML = "SHOW MORE"
        break;
      default:
        console.log("button error")
        break;
    }
  }
  
  const [videos, setVideos] = useState (filterVideoArray);
  
  return (
    <Flex w={"100%"} flexDirection={"column"} alignItems={"center"}>
      <Grid
      w={"100%"}
      h={"100%"}
      templateRows={{base: "repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
      templateColumns={{base: "repeat(1, 1fr)", md:"repeat(2, 1fr)"}}
      gap={4}
      >
        {videos.map(video => {
        return (
          <GridItem key={video.id} rowSpan={2} minH={{base:"300px", sm: "320px", lg:"350px"}} colSpan={1}>
            <Box pb={2} h={{base:"80%", sm:"85%"}}>
              <iframe
                className="opacityVideoEfx"
                width={"100%"}
                height={"100%"}
                src={video.iframeLink}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen 
                >
              </iframe>
            </Box>
            <Box>
              <Text fontSize={{base:"sm", lg: "md"}} >
                {video.description}
              </Text>
            </Box>
          </GridItem>
        )
        })}
      </Grid>
      <Button _active={{textDecoration:"none"}} _hover={{textDecoration:"none"}} className="seeMoreBtn" onClick={loadMore} bg={"none"} color="font.darkViolet" fontWeight={"semibold"} fontSize={{base: "md", sm:"lg", lg:"2xl"}} my={6} p={0}>SHOW MORE</Button>
    </Flex>
  )
}

export default Videos;



