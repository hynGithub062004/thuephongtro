
const InputForm = ({label}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs">{label}</label>
      <input className="outline-none bg-[#e8f0fe] rounded-sm px-2 py-2"/>
    </div>
  )
}

export default InputForm
