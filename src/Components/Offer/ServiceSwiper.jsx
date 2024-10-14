import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { ThemeContext } from "../../ThemeContext";

function ServiceSwiper() {
  const { theme } = useContext(ThemeContext);
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
    },
  ];

  return (
    <div className="my-12">
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
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
              {/* Service Number */}
              <div
                className="absolute top-2 right-2 rounded-full w-[40px] h-[40px] flex items-center justify-center"
                style={{ backgroundColor: "#E6EEFB", color: "blue" }}
              >
                {index + 1}
              </div>

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
  );
}

export default ServiceSwiper;
