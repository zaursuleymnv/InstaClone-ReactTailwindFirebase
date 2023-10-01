import React from 'react'
import Icon from '../../../../components/Icon'

export default function Header({user}) {
  return (
    <header className='h-[60px] border-b border-gray-300 flex justify-between items-center px-6'>
        <button className='flex items-center gap-x-4'>
            <img src={user.avatar} className='w-7 h-7 rounded-full' alt="" />
            <h6 className='text-base font-semibold'>{user.name}</h6>
        </button>
        <button className='flex gap-x-4'>
            <Icon name="audio-call" size={24}/>
            <Icon name="video-call" size={24}/>
            <Icon name="info" size={24}/>
        </button>
    </header>
  )
}
