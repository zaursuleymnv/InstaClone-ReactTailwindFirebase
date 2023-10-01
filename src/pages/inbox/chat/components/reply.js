import React, { useState } from 'react'
import Icon from '../../../../components/Icon'

export default function Reply({setMessages}) {

  const [message, setMessage] = useState('')

  const sendMessage = e => {
    e.preventDefault()

    setMessages(messages => [
      ...messages,
      {
        from: {
          id: '5aA4hoXJKhT4EcMD7FnKyNbuYMf2',
          name: 'Zaur Suleymanov',
          username: 'zaur.suleymnv',
          avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
        },
        message
      },
    ])

    setMessage('')
  }

  return (
    <footer className='h-[84px] flex items-center justify-center px-6'>
      <form onSubmit={sendMessage} className='h-[44px] w-full border rounded-full flex items-center pl-[11px] pr-[8px]'>
        <button type='button' className='w-[40px] h-[42px] flex justify-center items-center'>
            <Icon name="emoji" size={24}/>
        </button>
        <input value={message} onChange={e => setMessage(e.target.value)} className='flex-1 h-[40px] text-sm placeholder:text-gray-500 focus:placeholder:text-gray-300 outline-none px-[9px]' placeholder='Message...' />
        {!message && (
          <>
            <button type='button' className='w-[40px] h-[42px] flex justify-center items-center'>
              <Icon name="voice" size={24}/>
            </button>
            <button type='button' className='w-[40px] h-[42px] flex justify-center items-center'>
              <Icon name="picture" size={24}/>
            </button>
            <button type='button' className='w-[40px] h-[42px] flex justify-center items-center'>
              <Icon name="notification" size={24}/>
            </button>
          </>
        )}
        {message && (
          <button type='submit' className='text-brand font-semibold text-sm px-2.5'>Send</button>
        )}
      </form >
    </footer>
  )
}
