import Navbar from "./Navbar";

const Hero = () => {
  const bgtransparent = true;
  return (
    <div>
      {/* tailwindcss background image */}
      <div className="">
        <div className="w-full h-screen overflow-y-hidden bg-cover bg-center bg-[url('../images/esc1.jpg')]">
          <div className="herocover">
            <Navbar bgtransparent={bgtransparent} />
            <div className="px-16 md:grid grid-cols-2 flex flex-col w-full h-[calc(100vh-80px)]">
              <div className="w-full justify-center items-center flex flex-col">
                <div className="space-y-6">
                  <h1 className="text-5xl text-white leading-[60px] font-semibold tracking-wide">
                    Tailored List Development and{" "}
                    <span className="text-orange-500">Cutting-Edge</span>{" "}
                    Escalator Solutions
                  </h1>
                  <p className="text-white text-lg">
                    Jebmasters Ltd is a leading provider of escalator solutions
                    and tailored list development services. Our team of experts
                    is dedicated to delivering innovative and efficient
                    solutions to meet the needs of our clients.
                  </p>

                  <button className="bg-orange-500 rounded-md p-2 px-6 text-white">
                    Explore Our Services
                  </button>
                </div>
              </div>
              <div className="w-full md:flex hidden md:px-16 space-y-6 overflow-y-hidden flex flex-row space-x-16 items-center">
                <div className="flex flex-col space-y-2">
                  <img
                    src="../images/esc2.jpg"
                    className="rounded-full object-cover h-[300px] w-[200px]"
                    alt=""
                  />
                  <img
                    src="../images/esc3.jpeg"
                    className="rounded-full object-cover h-[300px] w-[200px]"
                    alt=""
                  />
                </div>
                <img
                  src="../images/esc5.jpeg"
                  className="rounded-full object-cover h-[500px] w-[300px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
