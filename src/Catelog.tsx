import * as React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Pause,
  PlayArrow,
} from "@mui/icons-material";
import { styled } from "@mui/system";

/* const Thumbnail = styled("img")({
  objectFit: "cover",
  height: "90%",
  width: "90%",
   opacity: "1",
  borderRadius: "20px",
  transition: "all 0.3s",
  "&.active": {
    transform: "scale(1.1)",
  
  },
   
}); */
const Thumbnail = styled("img")({
  objectFit: "cover",
  height: "90%",
  width: "90%",
  opacity: "1",
  borderRadius: "20px",
  transition: "all 0.3s",
  filter: "grayscale(100%)",
  "&.active": {
    transform: "scale(1.1)",
    filter: "none",
  },
  "&:hover": {
    cursor: "pointer",
  },
});



const MainImage = styled("img")({
  objectFit: "cover",
  height:"45%",
  borderRadius:"50px"
});

interface Image {
  url: string;
  title: string;
  details: string;
}

const images: Image[] = [
  {
    url: "../pexels-pixabay-161309.jpg",
    title: "Tokyo Tower",
    details:
      "Tokyo Tower is a communications and observation tower located in Minato, Tokyo, Japan.\
              It was completed in 1958 and stands at 332.9 meters (1,092 feet) tall, making it one of the tallest towers in the world.\
              The tower was inspired by the Eiffel Tower in Paris and is painted in white and international orange to comply with air safety regulations.\
              Tokyo Tower has two observation decks that offer panoramic views of Tokyo and the surrounding areas. The lower observation deck is located at 150 meters (492 feet) and the higher observation deck is located at 250 meters (820 feet). \
              There is also a small amusement park, known as FootTown, located at the base of the tower which includes restaurants, souvenir shops, and an aquarium.\
             Tokyo Tower serves as a major tourist attraction in Tokyo and has been featured in various movies, TV shows, and anime series.\
              It also serves as a critical communications hub for the city, broadcasting both analog and digital signals for TV and radio stations.",
  },
  {
    url: "../pexels-jeshootscom-442579.jpg",
    title: "Dubai",
    details:
      "Dubai is a city located in the United Arab Emirates (UAE), on the southeast coast of the Persian Gulf. It is the most populous city in the UAE and is known for its luxurious and extravagant lifestyle, modern architecture, and thriving business environment.\
            Dubai is home to many world-renowned attractions, including the Burj Khalifa, the world's tallest building; the Dubai Mall, one of the largest shopping centers in the world; the Dubai Fountain, the world\
           largest choreographed fountain system; and the Palm Jumeirah, an artificial island in the shape of a palm tree.",
  },
  {
    url: "../pexels-jannet-serhan-2803276.jpg",
    title: "Bali",
    details:
      "Bali is an Indonesian island located in the westernmost end of the Lesser Sunda Islands, lying between Java to the west and Lombok to the east. It is known for its beautiful beaches, lush greenery, and rich cultural heritage. Bali is a popular tourist destination, attracting millions of visitors every year\
      Bali is surrounded by stunning natural landscapes, including beautiful beaches, volcanic mountains, and rice paddies. The island's most popular beaches include Kuta, Legian, and Seminyak, which offer excellent surfing opportunities. The volcano Mount Batur is a popular hiking destination and offers stunning views of the surrounding landscape.",
  },
  {
    url: "../pexels-tom-fisk-1653823.jpg",
    title: "China wall",
    details:
      'The Great Wall of China, often referred to as simply the "Great Wall," is a series of fortifications and walls that were built over the course of many centuries in northern China to protect the country against invading armies. \
    The wall is the world\'s longest wall and is made up of many sections and fortifications built by various Chinese emperors, with some sections dating back to the 7th century BC.The Great Wall of China is one of the most popular tourist attractions in China and is a UNESCO World Heritage Site. Many visitors come to the wall to hike, take photos, and learn about its history and significance. Some of the most popular sections of the wall to visit include Badaling, Mutianyu, and Jinshanling.',
  },
  {
    url: "../pexels-kin-pastor-777059.jpg",
    title: "Singapore",
    details:
      "Singapore is a global financial center and has one of the busiest ports in the world, making it an important hub for international trade and commerce. The city-state is also known for its efficient public transportation system, clean streets, and strict laws.\
            Singapore is a multicultural society with a diverse population, comprising of Chinese, Malay, Indian, and other ethnic groups. The city-state has a rich history and is home to many cultural landmarks and attractions, including the Merlion statue, which is a symbol of Singapore, and the historic Chinatown and Little India neighborhoods.",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
   
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2} sx={{ height: "400px", width: "100%" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: "20px",
              maxWidth: "100%",
            }}
          >
            <MainImage
              src={images[currentIndex].url}
              alt={images[currentIndex].title}
              sx={{ height: "80%", maxWidth: "100%", objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "",
            }}
          >
            <Box>
              <IconButton onClick={handlePreviousClick}>
                <ArrowBackIos />
              </IconButton>
            </Box>

            <Box sx={{ paddingRight: "20px", paddingLeft: "20px" }}>
              <ImageList cols={3} sx={{ justifyContent: "center" }}>
                {images
                  .slice(currentIndex, currentIndex + 3)
                  .map((image, index) => (
                    <ImageListItem
                      key={index}
                      onClick={() => handleThumbnailClick(currentIndex + index)}
                    >
                      <Thumbnail
                        src={image.url}
                        alt={image.title}
                        className={
                          currentIndex + index === currentIndex ? "active" : ""
                        }
                      />
                    </ImageListItem>
                  ))}
              </ImageList>
            </Box>

            <Box>
              <IconButton onClick={handleNextClick}>
                <ArrowForwardIos />
              </IconButton>
            </Box>
            <Box sx={{ paddingLeft: "20%" }}>
              <IconButton
                onClick={handlePlayPauseClick}
                sx={{ backgroundColor: "#00ffff", borderRadius: "100%" }}
              >
                {isPlaying ? <Pause /> : <PlayArrow />}
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: "center", paddingTop: "40px" }}>
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].details}</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
