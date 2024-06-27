import Button from "./Button";


export default function Collections() {
  return (
    <>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-3xl md:text-5xl">
            About Us 
          </h1>
          <Button text="View More" variant="secondary" />
        </div>

      </div>

      <div className="text-white p-6 mx-auto">
          <p className="p-6 mx-auto w-50">
          Long ago in the vibrant land of Memes, ruled by the beloved Pepe the Frog, peace was shattered when the Doge clan, led by the Shiba Inu, challenged Pepe's governance. This dissent was echoed by the WIF clan and Floki clans, each vying for control. As tensions escalated, the once-united kingdom fractured into factions, each supporting their own meme character.
          </p>
            <br/>
            
            <br/>
          <p className="p-6 mx-auto w-50">
          Pepe rallied his loyal followers, the Pepes, to defend his rule, while the Doge clan launched a surprise attack on Pepe City. The Pepes, known for their resilience, used their adaptability to counter the assault. The WIF and Floki clans joined the conflict, employing unique tactics in the ongoing struggle.
          </p>
        </div>
    </>
  );
}
