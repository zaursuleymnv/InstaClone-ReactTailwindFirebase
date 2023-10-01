import { useField } from 'formik';
import React, { useState } from 'react'
import classNames from "classnames"

export default function Input({label, type, value, ...props}) {

    const [field, meta, helpers] = useField(props);
    const [show, setShow] = useState(false)
    const inputType = type === 'password' ? (show ? 'text' : 'password') : type;

  return (
    <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
        <input type={inputType} {...field} {...props} className={classNames({
          "px-2 outline-none text-xs w-full h-[38px] bg-transparent": true,
          "pt-[10px]": field.value
        })} />
        <small className={classNames({
          "absolute left-[9px] cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all": true,
          "text-[10px] top-2.5": field.value,
          "text-xs top-1/2": !field.value,

        })}>{label}</small>
        {type === 'password' && field.value && (
            <div onClick={() => setShow(show => !show)} className='h-full pr-2 flex items-center text-sm font-semibold cursor-pointer'>
                {show ? 'Hide' : 'Show'}
            </div>
        )}
    </label>
  )
}
