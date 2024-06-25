
const InputForm = ({label, value, setValue, type, invalidFiled, setInvalidField}) => {
  return (
    <div className="flex flex-col">
      <label className="text-xs">{label}</label>
      <input 
        className="outline-none bg-[#e8f0fe] rounded-sm px-2 py-2"
        value={value}
        type={type === 'password' ? 'password' : 'text'}
        onChange={(e) => setValue(prev => ({...prev, [type]: e.target.value}))}
        onFocus={() => setInvalidField([])}
      />
      {invalidFiled && invalidFiled.length > 0 && invalidFiled.some(item => item.name === type) && <small className=" text-red-600 italic">{invalidFiled.find(i => i.name===type).msg}</small>}
    </div>
  )
}

export default InputForm
