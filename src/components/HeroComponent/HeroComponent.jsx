import Container from "../Container/Container.jsx";
import rightSmallIcon from "../../assets/icons/arrow-right-small.svg";
import rightBigIcon from "../../assets/icons/arrow-right-big.svg";
import phoneImage from "../../assets/images/phone.png";
import heroBackgroundImage from "../../assets/images/hero-background.png";

const HeroComponent = () => {
  return (
    <div className="relative pb-[28px]">
      <div
        className="absolute inset-x-0 -top-[40px] h-full  bg-no-repeat bg-center z-[-1]"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      ></div>
      <Container>
        <div className="mb-[34.44px]">
          <h1 className="text-[#000] text-center font-medium leading-[72px] text-[54px] mb-[24px]">
            Smart Crypto Management
          </h1>
          <p className="text-[#585858] max-w-[577px] text-center leading-[22.4px] text-[16px] mx-auto">
            Unlock the power of Lime and take control of your crypto portfolio
            like never before. With intuitive tools and insightful analytics.
          </p>
        </div>
        <div className="flex gap-[12px] justify-center items-baseline mb-[70px]">
          <button className="flex items-center gap-[7.69px] py-[9px] px-[18px] shadow-md border-[1px] border-[#F3F5F7] border-solid bg-white rounded-[30px]">
            <span className="text-[#000] text-[14px] leading-[16.8px]">
              Contact Us
            </span>
            <span>
              <img src={rightSmallIcon} alt="right icon" />
            </span>
          </button>
          <button className="flex items-center gap-[7.69px] py-[9px] px-[18px] shadow-md bg-[#D2FF00] rounded-[30px]">
            <span className="text-[#000] text-[14px] leading-[16.8px]">
              Download App
            </span>
            <span>
              <img src={rightBigIcon} alt="right icon" />
            </span>
          </button>
        </div>
        <div className="flex justify-center z-[20]">
          <img src={phoneImage} alt="phone image" />
        </div>
      </Container>
    </div>
  );
};

export default HeroComponent;
