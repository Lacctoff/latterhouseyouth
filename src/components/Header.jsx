import { Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and click is outside menu AND outside hamburger button
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = ["Home", "Why Us?", "Gallery", "Blog", "Contact"]

  return (
    <header className="relative z-50 p-4 sm:p-6 max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm font-medium">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="./rccg-logo.png" alt="church-logo" className="size-8 md:size-16 saturate-100" />
        <span className="opacity-90 text-base">Latterhouse Parish Youth</span>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex space-x-6 opacity-75">
        {
          menuItems.map((item, index) => (
            <a key={index} href="#" className="hover:opacity-100 hover:text-lime-300 hover:-translate-y-1 antialiased hover:underline underline-offset-2 transition-all duration-200 ease-in">
              {item}
            </a>
          ))
        }
      </nav>

      {/* Hamburger menu button */}
      <button 
        ref={buttonRef}
        onClick={toggleMenu}
        className="md:hidden cursor-pointer z-50 relative"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="text-white size-6" />
        ) : (
          <Menu className="text-white size-6" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      <div 
        ref={menuRef}
        className={`
          md:hidden absolute top-full left-0 right-0 mt-2 mx-4
          glass bg-[#01303C] rounded-lg shadow-lg z-[9999]
          transition-all duration-300 ease-in-out origin-top
          ${isMenuOpen 
            ? 'opacity-100 scale-y-100 visible' 
            : 'opacity-0 scale-y-0 invisible'
          }
        `}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              onClick={() => setIsMenuOpen(false)}
              className="text-white opacity-75 hover:opacity-100 hover:text-lime-300 hover:translate-x-2 antialiased hover:underline underline-offset-2 transition-all duration-200 ease-in py-2"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header