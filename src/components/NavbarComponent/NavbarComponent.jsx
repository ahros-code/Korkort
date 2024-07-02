import logo from "../../assets/images/logo.svg";

const NavbarComponent = () => {
  return (
    <div className={"flex items-center justify-between py-[23.5px] mb-[44px]"}>
      <div>
        <img src={logo} alt={"logo"} />
      </div>
      <div>
        <button
          className={
            "pl-[25px] pt-[7.6px] pr-[24.66px] pb-[8.4px] bg-[#ECF0F6] rounded-[30px] border-[1px] border-solid border-[#F3F5F7] shadow-md"
          }
        >
          <span className={"text-[14px] leading-[16.8px] text-[#000]"}>
            Sign in
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavbarComponent;
