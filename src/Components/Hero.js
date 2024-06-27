import Button from "./Button";
import side from "../assets/img/canvas.jpeg"

export default function Hero() {
  return (
    <>
      <div className="bg-tertiary py-2 md:py-10"> 
        <div className="grid grid-cols-1 bg-opacity-50 md:grid-cols-2 container mx-auto">
          <div
            className="flex flex-col gap-8 text-center items-center md:text-left md:items-start "
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
            className="flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img src={side} alt="side" className="w-full md:w-auto mt-20 lg:mt-0" />
          </div>
        </div>
      </div>
    </>
  );
}
