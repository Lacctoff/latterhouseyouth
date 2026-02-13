const LayeredCard = ({value,label,desc,className}) => {
  return (
    <div className={`cursor-pointer hover:animate-border border-2 border-transparent hover:opacity-100 hover:-rotate-10 transition-all duration-400 ease-in-out hover:bg-white hover:z-50 ${className ? className : "absolute top-0 right-0 w-64 h-40 bg-white p-4 rounded-lg shadow-xl transform"}`}>
      <p className="text-2xl font-bold text-gray-900">
        {value}
      </p>

      <p className="text-sm text-gray-600">
        {label}
      </p>

      <p className="text-xs text-gray-400 mt-2">
        {desc}
      </p>
    </div>
  )
}

export default LayeredCard