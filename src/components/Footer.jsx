import { COLORS } from "../assets/data"

const Footer = () => {
  return (
    <footer className={`relative z-10 p-4 md:p-6 max-7xl mx-auto flex flex-col-reverse md:flex-row justify-between gap-8 font-medium opacity-70 border-t border-gray-700 mt-8 bg-[${COLORS.darkbgTeal}]`}>
      {/* LOGO */}
      <div className="flex flex-col space-x-2 mb-0 sm:mb-0 font-extralight">

        {/* text */}
        <span className="text-xs mb-2">
          RCCG LatterHouse Parish Youth Church © {new Date().getFullYear()}
        </span>

        <span className="text-xs">
          Jesus Christ Yesterday, Today, and Forever
        </span>
      </div>

      {/* LINKS */}
      <div className="flex space-x-4 md:space-x-6">
        {["Home", "Why Us?", "Gallery", "Blog", "Contact"].map((item, index) => (
          <a key={index} href="#" className="hover:opacity-100 transition-all duration-200 ease-in hover:text-lime-300 hover:underline underline-offset-2 hover:-translate-y-1">
            {item}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer