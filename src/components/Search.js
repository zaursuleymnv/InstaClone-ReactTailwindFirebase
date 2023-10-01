import React, { useState } from 'react'
import Icon from './Icon'
import {AiFillCloseCircle} from "react-icons/ai"
import classNames from "classnames"

export default function Search() {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-[268px] relative group'>
      <span className={classNames({
        'absolute top-0 left-0 pointer-events-none text-[#8e8e8e] w-9 h-9 flex justify-center items-center': true,
        'hidden': open 
      })}>
        <Icon name="search"/>
      </span>
      <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} type="text" placeholder='Search' className='w-full outline-none focus:pl-3 pl-9 h-9 rounded bg-[#efefef]' />
      <button className={classNames({
        'absolute top-0 right-0 hidden text-[#c7c7c7] w-9 h-9 justify-center items-center': true,
        '!flex': open

      })}>
        <AiFillCloseCircle/>
      </button>
    </div>
  )
}
