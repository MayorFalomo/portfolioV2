import TrackYourPackageBtn from "@/components/Button/TrackYourPackage";
import React from "react";
import getPackage from "@/assets/gettingPackage.webp";
import rectOne from "@/assets/rectOne.webp";
import rectTwo from "@/assets/rectTwo.webp";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceHero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    // triggerOnce: true,
  });

  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${getPackage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="relative w-full max-[750px]:w-[90%] mx-auto max-[750px]:mt-[30px] max-[750px]:bg-center h-[60vh]"
        >
          <img className="w-full h-full " src={rectOne} alt="img" />
          <img
            className="absolute left-0 top-0 w-full h-full"
            src={rectTwo}
            alt="img"
          />
          <div className="absolute left-[10%] min-[1800px]:left-[19%] top-1/2 z-20 flex justify-between items-end min-[1800px]:w-[1500px] w-[80%] m-auto  ">
            <div ref={ref} className=" flex flex-col gap-[10px]">
              <h1 className="flex flex-col gap-2 text-white text-[40px] leading-10 font-tenorSans scroll-m-20 font-bold tracking-wide">
                <span>Courier </span>
                <span>Services</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: inView ? 300 : 0 }}
                  transition={{ duration: 0.7 }}
                  className=" h-[1px] mt-2 w-[300px] bg-white"
                ></motion.span>
              </h1>
            </div>
            <div className=" max-[750px]:hidden">
              <TrackYourPackageBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
