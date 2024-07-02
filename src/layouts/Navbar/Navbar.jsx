import logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <div>
        <img src={logo} alt={"logo"} />
      </div>
      <div>
        <button>
          <span>Sign in</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
