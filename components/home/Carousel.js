// Import Swiper React components
import { useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ArtistCard from "./ArtistCard";
import ArtistData from "./data/ArtistData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  return (
      <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        grabCursor
        keyboard={{ enabled: true}}
        slidesPerView={matchesMD ? 3 : matchesSM ? 2 : 1}
        navigation={matchesMD ? true : false}
        loop
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}>
        {ArtistData.map(data => (
          <SwiperSlide key={data.index}>
            <ArtistCard image={data.image} name={data.name} song={data.song} url={data.song_link} />
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default Carousel;
