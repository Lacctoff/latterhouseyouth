import { COLORS, galleryData } from "../assets/data"
import RotatedLabel from "../components/RotatedLabel"

const OurWorkSection = () => {
  return (
    <section className="py-10 sm:py-20 flex flex-col items-center justify-center">
      <RotatedLabel 
        text="Youth Sunday Gallery"
        bgColor={COLORS.yellow}
        textColor="text-gray-900"
        className="mb-10 -rotate-3"
      />
      

      {/* Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 sm:mt-12 w-full max-w-5xl px-8 lg:px-4">
        {galleryData.map((item) => (
          <div key={item.id} className={`relative bg-white p-4 rounded shadow-xl transform ${item.rotation} hover:rotate-0 transition-all duration-300 max-h-fit`}>
            <div style={{
              backgroundImage: `url(${item.imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}  className="h-65 lg:70 bg-gray-200 flex items-center justify-center overflow-hidden">
              <span className="text gray-400">
                {item.imgUrl === null && "Mock Image 1"}
              </span>

              {/* Bandage Image */}
                <img src="/bandage.svg" alt="decorative-image" className={`absolute ${item.bagePosition ? item.bagePosition : "-bottom-6 -right-7 rotate-10 size-20"}`} />
            </div>

            <p className="text-gray-900 text-lg font-bold mt-4">
              {item.title}
            </p>

            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Btns */}
      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl  transition-all duration-200 mt-16 cursor-pointer hover:bg-transparent hover:text-zinc-50 border-2 border-transparent border-dashed hover:border-zinc-100 ease-in hover:rotate-3">
        View more
      </button>
    </section>
  )
}

export default OurWorkSection