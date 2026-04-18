import RotatedLabel from "../components/RotatedLabel";
import { COLORS } from "../assets/data";
import { PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative text-center pt-10 pb-15 sm:pt-20 sm:pb-32">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mx-2">
        Raising Purposeful Youths Through <br /> <RotatedLabel text="Healthy" bgColor={COLORS.lightGreen} textColor="text-gray-900" className="inline-block mx-1 sm:mx-2"/>{" "}Living
      </h1>

      {/* Decor */}
      <img src="./scribble.svg" alt="image" className="absolute hidden lg:block bottom-10 -rotate-22 left-10" />
      <img src="./scribble.svg" alt="image" className="absolute hidden lg:block top-5 -rotate-22 right-10" />

      <p className="text-base sm:text-xl mt-6 sm:mt-8 opacity-70 max-w-2xl mx-2 md:mx-auto ">
        {/* Join us this Sunday, 15th February, as we explore what it truly means to live as Christ-like youths in today&apos;s generation. */}
        Join us this Sunday, 19th April, as we learn how to live healthy, balanced lives as Christian youths.
      </p>
    </section>
  )
}

export default HeroSection