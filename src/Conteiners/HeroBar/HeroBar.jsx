import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { selectPopular } from '../../redux/actions/selectFunction';

import { HeroSlideContent } from '../../Components/HeroSlideContent/HeroSlideContent';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroBar = () => {

  const popularMovies = useSelector(selectPopular);
    console.log(popularMovies)
  return (
      <div>
           <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          
          <div>
            {
              popularMovies.slice(0,8).map((movie) => {
                return (
                  <div key={movie.id}>
                    <SwiperSlide>
                      <HeroSlideContent title={movie.original_title} imageSrc={movie.backdrop_path} overview={movie.overview} movieId={movie.id} />
                    </SwiperSlide>
                    </div>
               ) 
              })
            }
          </div>
      
        
      </Swiper>
    </>
    </div>
  )
}

export  {HeroBar}