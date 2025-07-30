import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  
   {
    "id": 1,
    "image": "https://i.ibb.co/21x7BJc2/image-8.png",
    "title": "FGC RustFree Fencing Poles",
    "subtitle": "₹499.00 – ₹1,589.00"
  },
  {
    "id": 2,
    "image": "https://i.ibb.co/jPcVCjtT/image-Copy.png",
    "title": "PVC COATED WIRE MESH",
    "subtitle": "₹1,260.00 – ₹10,750.00"
  },
  {
    id: 3,
    image: "https://i.ibb.co/VY4kxMQj/image-2.png",
    title: "Powerful Barbed Wire",
    subtitle: "JF Barbed Wire- 270 GSM",
  },
  {
    "id": 4,
    "image": "https://i.ibb.co/j9QZLnPG/image-1.png",
    "title": "JF Bluelink Mesh",
    "subtitle": "₹3,067.50 – ₹6,362.50"
  },
  {
    "id": 5,
    "image": "https://i.ibb.co/4ZQNFgX1/service-1.jpg",
    "title": "JF Truck",
    "subtitle": "₹1000.50 – ₹3362.50"
  },
 
  {
    "id": 6,
    "image": "https://i.ibb.co/rGjK46Fv/service-d-2-1.jpg",
    "title": "JF Water pamp",
    "subtitle": "₹2000.50 – ₹6,362.50"
  }
 
  
];

const HeroCard= () => {
  return (
    <div className="w-full h-[80vh] my-3 rounded-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white px-4"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCard;
