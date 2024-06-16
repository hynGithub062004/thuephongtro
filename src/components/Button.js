import { memo } from "react"

const Button = ({text, bgColor, textColor,Icons,func, full}) => {
  return (
    <div>
      <button 
        type="button"
        className={`${bgColor} ${textColor} ${full && 'w-full'} p-2 outline-none rounded-md hover:underline flex justify-center items-center gap-1`}
        onClick={func}
      >
          {Icons && <Icons />}{text} 
      </button>
    </div>
  )
}

export default memo(Button)
