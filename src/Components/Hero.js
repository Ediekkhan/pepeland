import Button from "./Button";
// import Spline from "@splinetool/react-spline";
import side from "../assets/img/canvas.jpeg"
// import bg from "../assets/img/bgImage28.jpeg"



export default function Hero() {
  return (
    <>
      <div className="bg-tertiary py-20 md:py-10 " > 

        {/* <img  src={bg} alt="bg"  className="w-full h-60 sm:h-5/6 md:h-5/6 lg:h-5/6 "/> */}
        <div className="grid grid-cols-1 bg-opacity-50 md:grid-cols-2 container mx-auto">
          <div
            className="  flex flex-col gap-8 text-center items-center md:text-left md:items-start pt-40"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-primary font-semibold text-primary">
              {" "}
              <span className="text-secondary underline decoration-solid">
               Wars
              </span>{" "}
              Of{" "}
              <span className="text-secondary underline decoration-solid font-semibold">
                Pepe
              </span>
            </h1>
            <p className="text-primary lg:text-5xl md:text-xl">
              The rise of Pepe
            </p>
           
            <div>
              <Button text="Join Now" size="lg" variant="primary-outline" />
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
           <img src={side} alt="side " className="w-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
