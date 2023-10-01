import React from 'react'
import Icon from '../../components/Icon'
import Button from '../../components/Button'

export default function Inbox() {
  return (
    <div className='w-full h-full flex gap-y-1 flex-col justify-center items-center'>
      <Icon name="direct-empty" size={96}/>
      <h2 className='text-[22px] font-light'>Your Messages</h2>
      <p className='text-sm text-[#8e8e8e]'>
        Send private photos and messages to a friend or group.
      </p>
      <div>
        <Button>Send Message</Button>
      </div>
    </div>
  )
}
