import { COLORS, keySpeakers } from "../assets/data"
import RotatedLabel from "../components/RotatedLabel"

const OurKeynoteSpeakers = () => {
  return (
    <section className="py-15 pt-2 sm:pt-2 sm:pb-10 flex flex-col items-center justify-center">
          <RotatedLabel
            text="Our Keynote Speakers"
            bgColor={COLORS.yellow}
            textColor="text-gray-900"
            className="mb-10 -rotate-3 text-3xl sm:text-4xl md:text-5xl"
          />
          
    
          {/* speakers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 sm:mt-12 w-full max-w-5xl px-8 lg:px-4  justify-center">
            {keySpeakers.map((item) => (
              <div key={item.id} className={`relative bg-white p-4 rounded shadow-xl transform ${item.rotation} hover:rotate-0 transition-all duration-300 max-h-fit max-w-xl sm:max-w-none`}>
                <div style={{
                  backgroundImage: `url(${item.imgUrl})`,
                  // backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}  className="h-52 lg:h-70 bg-gray-200 flex items-center justify-center overflow-hidden bg-cover sm:bg-cover bg-no-repeat">
                  <span className="text gray-400">
                    {item.imgUrl === null && "Mock Image 1"}
                  </span>
    
                  {/* Bandage Image */}
                    <img src="/bandage.svg" alt="decorative-image" className={`absolute ${item.bagePosition ? item.bagePosition : "-bottom-6 -right-7 rotate-10 size-20"}`} />
                </div>
    
                <p className="text-gray-900 text-lg font-bold mt-4 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
  )
}

export default OurKeynoteSpeakers