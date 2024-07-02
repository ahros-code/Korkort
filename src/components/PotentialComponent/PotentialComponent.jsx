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
          "text-[#000] text-center font-medium leading-[72px] text-[52.5px] max-w-[774.16px] mx-auto pt-[88px] pb-[60px]"
        }
      >
        Unleashing the Potential: ever- evolving world of crypto
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-[80vh] md:h-[100vh]">
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="col-span-2 row-span-2 border-solid border border-[#E7E7E7] rounded-[24px] shadow-md bg-white">
            <img
              src={firstColumnBigImage}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
            <div className={"h-[30%] pl-[41px] pr-[59px] pb-[20px]"}>
              <h3
                className={
                  "font-medium text-[19.77px] leading-[26.4px] mb-[7.54px]"
                }
              >
                AI Chatting like never before
              </h3>
              <p className={"text-[#585858] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </div>
          </div>
          <div className="row-span-2 row-start-3 border-solid border border-[#E7E7E7] rounded-[24px] shadow-md bg-white">
            <img
              src={firstColumnSmallImage1}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
            <div className={"h-[30%] pl-[41px] pb-[48px]"}>
              <h3
                className={
                  "font-medium text-[19.77px] leading-[26.4px] mb-[7.54px]"
                }
              >
                Support Chat
              </h3>
              <p className={"text-[#585858] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="row-span-2 row-start-3 border-solid border border-[#E7E7E7] rounded-[24px] shadow-md bg-white">
            <img
              src={firstColumnSmallImage2}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
            <div className={"h-[30%] pl-[41px] pb-[48px]"}>
              <h3
                className={
                  "font-medium text-[19.77px] leading-[26.4px] mb-[7.54px]"
                }
              >
                Integrations
              </h3>
              <p className={"text-[#585858] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="row-span-2 border border-[#E7E7E7] rounded-[24px] shadow-md border-solid bg-white">
            <img
              src={secondColumnSmallImage1}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
            <div className={"h-[30%] pl-[41px] pb-[48px]"}>
              <h3
                className={
                  "font-medium text-[19.77px] leading-[26.4px] mb-[7.54px]"
                }
              >
                Receive
              </h3>
              <p className={"text-[#585858] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-3 border border-[#E7E7E7] rounded-[24px] shadow-md border-solid bg-[#0B0B16]">
            <div className={"h-[30%] pl-[23px] pr-[77px] pt-[32px]"}>
              <h3
                className={
                  "font-medium text-[16.45px] leading-[21.6px] mb-[7.85px] text-white"
                }
              >
                Supercharge your money fast.
              </h3>
              <p className={"text-[#C0C0C0] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur. Molestie lorem arcu
                egestas varius donec.
              </p>
            </div>
            <img
              src={secondColumnBigImage}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-1 border border-[#E7E7E7] rounded-[24px] shadow-md border-solid bg-white">
            <img
              src={secondColumnSmallImage2}
              alt="image"
              className={"h-[70%] rounded-[24px] mx-auto w-[100%]"}
            />
            <div className={"h-[30%] pl-[41px] pb-[48px]"}>
              <h3
                className={
                  "font-medium text-[19.77px] leading-[26.4px] mb-[7.54px]"
                }
              >
                Card Support
              </h3>
              <p className={"text-[#585858] text-[16px] leading-[22.4px]"}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialComponent;
