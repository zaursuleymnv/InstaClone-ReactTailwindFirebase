import React from 'react'

export default function Header({user}) {
  return (
    <header className='flex items-center px-24 gap-x-24 py-4 pb-10'>
        <img src="/no-avatar.jpeg" className='w-[150px] h-[150px] rounded-full' alt="" />
        <div>
            <div className='mb-4'>
              <h1 className='text-[28px] font-light'>{user.username}</h1>
            </div>
            <nav className='flex items-center gap-x-10'>
                <div><span className='font-semibold'>{user.post}</span> posts</div>
                <div><span className='font-semibold'>{user.followers?.length}</span> followers</div>
                <div><span className='font-semibold'>{user.followers?.length}</span> following</div>
            </nav>
        </div>
    </header>
  )
}
