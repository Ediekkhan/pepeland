import { FaTwitter, FaTelegram } from "react-icons/fa";
export default function Community() {
  return (
    <>
      <div
        className="container mx-auto py-4 md:py-16 px-3 md:px-0 bg-secondary rounded-3xl flex flex-col items-center gap-6"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="font-primary text-tertiary font-bold text-2xl md:text-6xl text-center">
          Join Our Community
        </h1>
        <p className="text-center text-tertiary text-base md:text-xl">
          Meet the company team and community for platform updates,
          announcements, and more ...
        </p>
        <a className="bg-primary text-tertiary hover:bg-transparent hover:border-tertiary border-primary text-base md:text-xl px-6 py-3 border-2 rounded-full font-primary font-bold transition-all flex items-center gap-2" href="https://x.com/WarsofPepeSol">
          <FaTwitter size={28}  /> Launch Twiter
        </a>

        <a className="bg-primary text-tertiary hover:bg-transparent hover:border-tertiary border-primary text-base md:text-xl px-6 py-3 border-2 rounded-full font-primary font-bold transition-all flex items-center gap-2" href="https://t.me/warsofpepeofficial">
          <FaTelegram size={28}  /> Launch TG
        </a>
      </div>
    </>
  );
}
