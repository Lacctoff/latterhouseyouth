import { COLORS, whyUsData } from "../assets/data"
import LayeredCard from "../components/LayeredCard"
import MobileStatCard from "../components/MobileStatCard"
import RotatedLabel from "../components/RotatedLabel"

const WhyUsSection = () => {
  return (
    <section className={`relative py-10 bg-[${COLORS.darkbgTeal}] sm:py-20 rounded-md flex flex-col items-center justify-center`}>
      <RotatedLabel text="why we Stand Out?" bgColor={COLORS.lightGreen} className="mb-10 -rotate-6 z-10" clipColor="bg-[#02242E]" pinPosition="left-25 -top-7 rotate-20" />

      <div className="grid md:grid-cols-2 gap-12 w-full max-w-4xl mt-8 md:mt-12">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-2xl sm:text-3xl font-bold leading-snug">
            We are a generation <br /> committed to: <br /> Christlike Character, <br /> Spiritual Growth, <br /> Academic and <br /> Career Excellence
          </p>

          <div className="border-2 p-2 border-dashed w-fit rounded-full mt-6">
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl rotate-3 transition-all saturate-200 ease-in hover:bg-transparent hover:text-zinc-50 border border-transparent hover:border-zinc-300 cursor-pointer">
              Join Us
            </button>
          </div>
        </div>



        {/* Mobile Layout for Stats */}
        <div className="flex flex-col space-y-4 md:hidden px-4">
          <MobileStatCard value="60+" label="Church Family Members" rotation="rotate-2" className="self-end" />
          <MobileStatCard value="25+" label="Active Youth Participants" rotation="-rotate-3" className="self-start" />
          <MobileStatCard value="5+" label="Years of Youth Fellowship" rotation="rotate-1" className="self-end" />
          <MobileStatCard value="100%" label="Committed to Christlike Living" rotation="-rotate-2" className="self-start" />
        </div>

        {/* Desktop Layout for Stats */}
        <div className="hidden md:block relative h-72">
          {
            whyUsData.map(({id,value,label,desc,classes}) => (
              <LayeredCard 
                key={id}
                value={value}
                label={label}
                desc={desc}
                className={classes}
              />
            )) 
          }
        </div>
      </div>


      {/* Decoration Image */}
      <img src="./path-3.svg" alt="decorative-image" className="absolute -bottom-92 pointer-events-none" />
    </section>
  )
}

export default WhyUsSection