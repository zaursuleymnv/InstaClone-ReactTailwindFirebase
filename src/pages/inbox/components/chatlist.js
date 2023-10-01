import classNames from 'classnames'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

export default function ChatList() {

    const {conversationId} = useParams()

    const chats = [
        {
            id: 1,
            user: {
                avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A',
                name: 'Zaur Suleymanov'
            },
            lastMessage: "Hello Zaur"
        },
        {
            id: 2,
            user: {
                avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/333292770_3352666998289712_8597528398118172149_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7k32jSByotEAX8_ws1B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfAm8yEoJKmGjavZtMyRrbNMMxVxY3Rc07LzyN-_5Sm-fw&oe=651A10CE',
                name: 'Elchin Mirzayev'
            },
            lastMessage: "I sent you a new video 😂😂"
        },
        {
            id: 3,
            user: {
                avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/355850540_145974391834864_4363845071146344226_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZXifgh4E4TsAX-PyNR0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDIhRIBbSWi0bOiI4NgvswRskiHlRmDeFVFUH6UK9wuIw&oe=6519F713',
                name: 'Mehdixan Məmmədli'
            },
            unread: true,
            lastMessage: "Comment my last post please 💪"
        },
        {
            id: 4,
            user: {
                avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/253852115_618551909500357_1629181979766020890_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZcEwkYA1wYAX_hK1-c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfA6kRrZJm9Kz5P4KJGPp5rWWeKzkxhrlNF9atUPqpU3EA&oe=6519C486',
                name: 'Əşrəf Əmirov'
            },
            lastMessage: "Do you have a plan for tonight? 😋"
        }
    ]

  return (
    <div className='h-[calc(100vh-60px)] overflow-auto py-3'>
        <header className='flex justify-between items-center px-5 mb-1'>
            <h6 className='text-base font-semibold'>Messages</h6>
            <button className='text-brand text-sm font-semibold'>Requests (5)</button>
        </header>
        {chats.map(chat => (
            <NavLink
                className={classNames({
                    "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5": true,
                    "font-semibold": chat?.unread,
                    "!bg-[#efefef]": +conversationId === chat.id
                })}
                key={chat.id} 
                to={`/inbox/${chat.id}`}
            >
                <img src={chat.user.avatar} className='w-14 h-14 rounded-full' alt="" />
                <div>
                    <h6 className='text-sm'>{chat.user.name}</h6>
                    <p className={`text-sm ${!chat?.unread && 'text-[#8e8e8e]'}`}>
                        {chat.lastMessage}
                    </p>
                </div>
            </NavLink>
        ))}
    </div>
  )
}
