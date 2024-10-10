import Texts from "../../../texts/Texts";
import heroImage from "../../../../assets/heroImage.webp";
import vanVector from "@/assets/vanVector.webp";
import heroIcon from "@/assets/homeHeroIcon.webp";
import { AnimatePresence, motion, Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import useRipple from "@/Animation/RippleEffect";

interface IVariants {
  [key: string]: Variant;
}

interface IProp {
  text: string;
  inview: boolean;
}

const HeroSection = () => {
  const heroHeader = [
    "Fast, Reliable",
    "Delivery Services;",
    "Medical Services",
  ];

  const containerVars: IVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });
    const { buttonRef, createRipple } = useRipple();


  return (
    <div className=" relative h-[90vh] max-[700px]:h-auto flex flex-col items-center justify-center ">
      <div
        ref={ref}
        style={{
          backgroundImage: `url(${vanVector})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
        }}
        className="relative flex min-[1800px]:w-[1500px] max-[1800px]:w-[85%]  max-[700px]:flex-col max-[700px]:justify-center min-[700px]:justify-between items-start gap-[10px] max-[700px]:w-[100%] min-[700px]:h-[90%] max-[700px]:h-[100%] m-auto "
      >
        <div className=" h-full flex flex-col items-start max-[700px]:items-center justify-center max-[700px]:mx-auto  max-[700px]:text-center  max-[700px]:w-[95%] max-[700px]:mt-[60px]">
          <div ref={ref}>
            <AnimatePresence>
              {heroHeader.map((text, index: number) => (
                <motion.div
                  key={index}
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  className="max-[600px]:w-[100%] max-[600px]:block max-[600px]:ml-auto overflow-hidden"
                >
                  <Staggered text={text} inview={inView} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Texts
            className="leading-7 max-w-[310px] min-[1800px]:text-[22px] min-[1800px]:leading-[30px] text-[18px] font-light max-[700px]:font-medium [&:not(:first-child)]:my-4 max-[700px]:w-full max-[700px]:mx-auto "
            // weight="light"
          >
            Get your packages delivered on time, every time.{" "}
          </Texts>
          <div className=" max-[700px]:w-full flex justify-center max-[700px]:mt-3">
              <div className="bg-bgPrimary drop-shadow-lg rounded-lg flex items-center w-fit py-4 px-3 ">
            <div className="flex max-w-fit h-[50px] items-center">
              <Input
                className="bg-[#F6F7F8] text-md w-[300px] max-[900px]:w-full h-full placeholder:px-1 placeholder:font-montserrat placeholder:text-[#3C3737] placeholder:text-[12px] text-[#3C3737] outline-none focus-visible:ring-0 rounded-none border-none"
                type="email"
                placeholder="Enter your tracking number"
              />
              <Button
                ref={buttonRef}
                className="relative overflow-hidden bg-black h-full w-[200px] text-white rounded-md"
                type="submit"
                onMouseDown={createRipple}
              >
              Track your package
              </Button>
            </div>
            </div>
            {/* <TrackYourPackageBtn seen={true} /> */}
          </div>

          <ul className="flex items-center max-[700px]:justify-center w-full flex-wrap gap-4 mt-4 max-[700px]:my-[30px]">
            <li className="flex items-center gap-1 min-[1800px]:text-[20px] font-montserrat">
              <span>
                <svg
                  color="#508CCF"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
              </span>
              <span>Reliability </span>{" "}
            </li>
            <li className="flex items-center gap-1 min-[1800px]:text-[20px] font-montserrat">
              <span>
                <svg
                  color="#508CCF"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
              </span>
              <span>Speed </span>{" "}
            </li>
            <li className="flex items-center gap-1 min-[1800px]:text-[20px] font-montserrat">
              <span>
                <svg
                  color="#508CCF"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>{" "}
              </span>
              <span>Customer Satisfaction </span>{" "}
            </li>
          </ul>
        </div>
        <div
          ref={ref}
          className="relative min-[1200px]:w-[600px] max-[1200px]:w-[500px] max-[980px]:w-[400px] max-[700px]:w-[90%] max-[600px]:w-[90%] max-[700px]:mx-auto  h-[100%]"
        >
          <div className="relative z-[1] min-[1200px]:w-full max-[1200px]:w-[100%] max-[600px]:h-[450px] ml-auto h-full">
            <img
              className="w-full h-full object-cover"
              src={heroImage}
              alt="img"
            />
          </div>

          <img
            className="absolute z-[1] min-[700px]:w-[40px] max-[700px]:w-[25px] left-[-60px] min-[700px]:top-[-10px] max-[700px]:top-[-30px] max-[700px]:left-[10px] rounded-full "
            src={heroIcon}
            alt="img"
          />
          <span className="absolute min-[700px]:left-[-40px] max-[700px]:right-[-20px] min-[700px]:top-[50px]  max-[700px]:top-[20px] bg-primary rounded-full h-[20px] w-[20px] max-[700px]:w-[15px] max-[700px]:h-[15px]"></span>
          <span className=" absolute min-[700px]:right-[-40px] max-[700px]:right-[70px] top-[-20px] bg-primary rounded-full h-[25px] w-[25px] max-[700px]:w-[15px] max-[700px]:h-[15px] "></span>
          <span className=" absolute z-[2] min-[700px]:right-[-30px] max-[700px]:right-[-20px] bottom-[-50px] bg-primary h-[70px] w-[70px] max-[700px]:w-[60px] max-[700px]:h-[60px] "></span>
        </div>
      </div>
      {/* <BookNow /> */}
    </div>
  );
};

const Staggered = ({ text, inview }: IProp) => {
  const mobileLinkVars: IVariants = {
    initial: {
      opacity: 0,
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <motion.h1
      variants={mobileLinkVars}
      initial="initial"
      animate={inview ? "open" : "initial"}
      className="scroll-m-20 font-TenorSans min-[1700px]:text-[80px] min-[900px]:text-[50px] max-[900px]:text-[40px] font-medium tracking-tight leading-[70px] min-[1800px]:leading-[90px] min-[1500px]:text-[60px] max-[700px]:text-center max-[700px]:mx-auto  max-[700px]:w-full"
    >
      {text}
    </motion.h1>
  );
};

export default HeroSection;
