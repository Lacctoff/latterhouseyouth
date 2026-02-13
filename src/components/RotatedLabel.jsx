const RotatedLabel = ({
  text,bgColor,clipColor,textColor = "text-gray-900",className="",pinPosition
}) => {
  return (
    <span style={{backgroundColor: `${bgColor}`,}} className={`relative inline-block px-3 py-1 sm:px-4 sm:py-2 text-4xl sm:text-5xl md:text-7xl font-extrabold ${textColor} transform -rotate-3 shadow-lg ${className} rounded -z-10`}>
      {text}

      {/* pin hole */}
      <div className="absolute size-3 top-1 left-1 bg-cyan-950 rounded-full"></div>

      {/* Clip Mask */}
      <div className={`absolute h-10 w-14 md:h-12 md:w-16 -top-9 sm:-top-16 -right-9 rotate-50 ${clipColor ? clipColor : "bg-cyan-950"}`}></div>

      {/* Pin */}
      <img src="./clipper.png" alt="clipper-image" className={`absolute w-6 ${pinPosition ? pinPosition : "-top-8 right-10 rotate-16"}`} />
    </span>
  )
}

export default RotatedLabel