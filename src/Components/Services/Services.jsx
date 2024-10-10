import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";

function Services() {
  const { theme } = useContext(ThemeContext);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoaderVisible(false);
      
    }, 1000);

    return () => clearTimeout(loaderTimer); 
  }, []);

  const services = [
    {
      title: "Cloud Services",
      description:
        "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-1.png",
    },
    {
      title: "IT Management ",
      description:
        "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-2.png",
    },
    {
      title: "Software Renew",
      description:
        "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-3.png",
    },
    {
      title: "Machine Learning",
      description:
        "Develop and implement machine learning models to automate processes and drive intelligent decision-making.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-4.png",
    },
    {
      title: "Digital Marketing",
      description:
      "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-5.png",
    },
    {
      title: "Web Development",
      description: 
      "Design and build responsive, high-performance websites using the latest web technologies.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-6.png",
    },
    {
      title: "Cyber Security",
      description:
      "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-7.png",
    },
    {
      title: "Data Analytic",
      description:
      "Transform raw data into valuable insights, enabling informed and strategic business decisions.",
      imgSrc: "https://zidio.in/assets/images/service-inner/service-icon-8.png",
    }
  ];

  return (
    <div>
      {/* Full Page Loader */}
      {isLoaderVisible && (
        <div className="full-loader">
          <div className="loader">
            <div className="dot"></div>
            <div className="dot" style={{ animationDelay: "0.2s" }}></div>
            <div className="dot" style={{ animationDelay: "0.4s" }}></div>
          </div>
        </div>
      )}
      {/* Video and text section */}
      <div className="relative bg-center bg-cover h-[500px] sm:h-[400px] md:h-[600px] lg:h-[700px] z-[-1]">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="8865877-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <h1 className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-orange-200 font-extrabold text-5xl shadow-lg z-10 bg-black bg-opacity-50 rounded-lg p-2">
          Our Services
        </h1>
        <div className="w-[230px] h-[50px] border ml-24 justify-center flex items-center text-white font-sans-serif space-x-4 rounded-md z-10">
          <span>Home</span>
          <span>{">"}</span>
          <span>Services</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="relative z-10 text-white font-normal text-center">
        <h4
          className={`text-center ${
            theme === "light" ? "text-blue-700" : "text-white"
          }`}
        >
          What We Provides?
        </h4>
        <br />
        <h4
          className={`text-center ${
            theme === "light" ? "text-black" : "text-blue-600"
          } font-extrabold text-[52px]`}
        >
          Provide Interactive IT Solution & Business Services
        </h4>

        {/* SwiperJS and Cards Section */}
        <div className="my-12">
          <Swiper
            navigation={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}  
            spaceBetween={30}  
            coverflowEffect={{
              rotate: 30,    
              stretch: 0,   
              depth: 300,    
              modifier: 1,   
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            speed={1200}  
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-lg shadow-lg p-6 max-w-sm mx-auto h-[500px] relative flex flex-col items-center justify-center ${
                    theme === "light"
                      ? "bg-gray-800 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="absolute top-[30px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px]"
                  />
                  <h2 className="text-xl font-bold mt-10">{service.title}</h2>
                  <br />
                  <p>{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Services;
