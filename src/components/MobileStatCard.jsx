const MobileStatCard = ({value, label, rotation, className}) => {
  return (
    <div className={`p-4 rounded-xl shadow-2xl transform ${rotation} bg-white w-full max-w-xs mx-auto border-4 border-gray-100 ${className}`}>
      <p className="2xl font-extrabold text-gray-900">
        {value}
      </p>
      <p className="text-sm text-gray-600">
        {label}
      </p>
    </div>
  )
}

export default MobileStatCard