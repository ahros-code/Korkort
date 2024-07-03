import firstColumnBigImage from "../../assets/images/potential/firstColumnBigImage.png";
import secondColumnBigImage from "../../assets/images/potential/secondColumnBigImage.png";
import firstColumnSmallImage1 from "../../assets/images/potential/firstColumnSmallImage1.png";
import firstColumnSmallImage2 from "../../assets/images/potential/firstColumnSmallImage2.png";
import secondColumnSmallImage1 from "../../assets/images/potential/secondColumnSmallImage1.png";
import secondColumnSmallImage2 from "../../assets/images/potential/secondColumnSmallImage2.png";

const PotentialComponent = () => {
  return (
    <div className={"pb-[88px]"}>
      <h1
        className={
          "text-center font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-screen-lg mx-auto pt-8 pb-6"
        }
      >
        Unleashing the Potential: ever- evolving world of crypto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 ">
        <div className="grid grid-rows-2 space-y-4 md:space-y-8 ">
          {/* 1 */}
          <div
            className="border  bg-white rounded-3xl shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="rounded-3xl">
              <img
                src={firstColumnBigImage}
                alt="image"
                className="w-full rounded-[24px]"
              />
            </div>
            <div className="space-y-2 px-5 md:px-10 pb-5">
              <div className="text-base md:text-xl md:font-semibold">
                AI Chatting like never before
              </div>
              <p className="text-sm md:text-base text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="grid grid-cols-2  gap-4 md:gap-8">
            {/* 2.1 */}
            <div
              className="border bg-white rounded-3xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className=" overflow-hidden h-40 md:h-80">
                <img
                  src={firstColumnSmallImage1}
                  alt="image"
                  className="w-full h-full  object-contain rounded-[24px]"
                />
              </div>
              <div className="space-y-2 px-5 pb-5">
                <div className="text-base md:text-xl md:font-semibold">
                  AI Chatting like never before
                </div>
                <p className="text-xs md:text-base text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            {/* 2.2 */}
            <div
              className="border bg-white rounded-3xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className=" overflow-hidden h-40 md:h-80">
                <img
                  src={firstColumnSmallImage2}
                  alt="image"
                  className="w-full h-full  object-contain rounded-[24px]"
                />
              </div>
              <div className="space-y-2 px-5 pb-5">
                <div className="text-base md:text-xl md:font-semibold">
                  AI Chatting like never before
                </div>
                <p className="text-xs md:text-base text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 space-y-4 md:space-y-8">
          {/* 2 */}
          <div className="grid grid-cols-2  gap-4 md:gap-8">
            {/* 2.1 */}
            <div
              className="border bg-white rounded-3xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className=" overflow-hidden h-40 md:h-80">
                <img
                  src={secondColumnSmallImage1}
                  alt="image"
                  className="w-full h-full  object-contain rounded-[24px]"
                />
              </div>
              <div className="space-y-2 px-5 pb-5">
                <div className="text-base md:text-xl md:font-semibold">
                  AI Chatting like never before
                </div>
                <p className="text-xs md:text-base text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            {/* 2.2 */}
            <div
              className="border bg-white rounded-3xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className=" overflow-hidden h-40 md:h-80">
                <img
                  src={secondColumnSmallImage2}
                  alt="image"
                  className="w-full h-full  object-contain rounded-[24px]"
                />
              </div>
              <div className="space-y-2 px-5 pb-5">
                <div className="text-base md:text-xl md:font-semibold">
                  AI Chatting like never before
                </div>
                <p className="text-xs md:text-base text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div
            className=" border border-[#090B15] bg-[#090B15] rounded-3xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="space-y-2 px-5 md:px-10 pt-5 text-white">
              <div className="text-base md:text-xl md:font-semibold ">
                AI Chatting like never before
              </div>
              <p className="text-sm md:text-base text-gray-400 ">
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </div>
            <div className="rounded-3xl">
              <img
                src={secondColumnBigImage}
                alt="image"
                className="w-full rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialComponent;
