import { COLORS } from "../assets/data"
import RotatedLabel from "../components/RotatedLabel"

const CTASection = () => {
  return (
    <section className={`relative py-10 bg-[${COLORS.darkbgTeal}] rounded-md sm:py-20 flex flex-col items-center justify-center text-center`}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter">
        this is our <RotatedLabel text="identity" bgColor={COLORS.lightGreen} textColor="text-gray-900" className="inline-block mx-1 sm:mx-2 z-10" clipColor="bg-[#02242E]" /> <br />{" "}in Christ. <br />
        <RotatedLabel text="LatterHouse Youth" bgColor={COLORS.lightBlue} textColor="text-gray-900" className="inline-block mt-4 sm:mt-0 z-0" clipColor="bg-[#02242E]" />
      </h2>

      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl  transition-all duration-200 cursor-pointer hover:bg-transparent hover:text-zinc-50 border-2 border-transparent border-dashed hover:border-zinc-100 ease-in hover:rotate-3 mt-10 hover:animate-wiggle">
        Join Us Today
      </button>
    </section>
  )
}

export default CTASection