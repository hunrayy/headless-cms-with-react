import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"; // Custom styles

const carousel = () => {
  const slides = [
    {
      id: 1,
      title: "Discover the Future of Technology",
      subtitle: "Stay ahead with the latest trends in AI, Web Development, and more.",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsb2clMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      title: "Master Web Development",
      subtitle: "Learn tips and tricks to elevate your coding skills.",
      image: "https://images.unsplash.com/photo-1494830723470-a8f5b3918a99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvdmVyfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      title: "UI/UX Design Simplified",
      subtitle: "Create user-friendly interfaces with practical design tips.",
      image: "https://images.unsplash.com/photo-1569738713551-2958195b458a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGNvdmVyfGVufDB8fDB8fHww",
    },
    {
    id: 4,
    title: "UI/UX Design Simplified",
    subtitle: "Create user-friendly interfaces with practical design tips.",
    image: "https://img.freepik.com/premium-psd/mockup-various-devices-with-creativity-workspace-concept_23-2147957204.jpg?ga=GA1.1.374979560.1726224332&semt=ais_hybrid",
    },
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators
        interval={5000}
        transitionTime={800}
      >
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img src={slide.image} alt={slide.title} />
            <div className="carousel-overlay">
              <div className="carousel-text">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default carousel;
