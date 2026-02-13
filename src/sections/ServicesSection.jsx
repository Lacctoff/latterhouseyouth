import { COLORS, servicesData } from "../assets/data"
import RotatedLabel from "../components/RotatedLabel"

const ServicesSection = () => {
  return (
    <section className={`py-10 bg-[${COLORS.darkbgTeal}] rounded-md sm:py-20 flex flex-col items-center justify-center`}>
      <p className="text-lg sm:text-xl opacity-75 mb-4">
        More than just a youth gathering
      </p>

      <RotatedLabel text="Our Core Focus" bgColor={COLORS.lightGreen} className="-rotate-6 mb-12 z-10" clipColor="bg-[#02242E]" />

      <p className="text-lg sm:text-xl opacity-75 -mt-8">
        Faith. Character. Leadership. Growth.
      </p>

      {/* SERVICES CARD SECT */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sm:mt-16 w-full max-w-5xl px-8">
        {
          servicesData.map((item) =>(
            <div key={item.id} className={`relative p-4 rounded ${item.rotation ? item.rotation : "-rotate-6"} shadow-xl cursor-pointer flex flex-col hover:rotate-0 transition-all duration-300 ease-in-out items-center bg-zinc-100 max-h-fit text-cyan-950`}>
              {/* icon */}
              <div className={`absolute left-2 size-10 lg:size-16 ${item.iconColor} rounded-full flex items-center justify-center -mt-12 mb-4 border-2 border-white border-dotted`}>
                {item.icon}
              </div>

              {/* text */}
              <p className="text-xl font-bold mb-2">
                {item.title}
              </p>
              <p className="text-center text-sm lg:text-lg leading-tight opacity-70">
                {item.desc}
              </p>

              {/* Decorative image */}
              <div className={`absolute -bottom-4 -right-4 size-12 md:size-16 ${item.decorColor} rounded-full opacity-30 blur-md`} />
            </div>
          ))
        }
      </div>


      <div className="self-end mt-16 p-2 mr-30 rounded-full border-2 border-zinc-100 border-dashed">
        <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl -rotate-3 hover:rotate-0 transition-all saturate-200 duration-200 ease-in hover:bg-transparent hover:text-zinc-50 border border-transparent hover:border-zinc-300 cursor-pointer">
          Join Us
        </button>
      </div>
    </section>
  )
}

export default ServicesSection