import React, { useState } from 'react'
import Header from './components/header'
import Reply from './components/reply'
import Messages from './components/messages'

export default function Chat() {

  const user = {
    name: 'Zaur Suleymanov',
    avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
  }

  const [messages, setMessages] = useState([
    {
      from: {
        id: '5aA4hoXJKhT4EcMD7FnKyNbuYMf2',
        name: 'Zaur Suleymanov',
        username: 'zaur.suleymnv',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
      },
      message: 'group'
    },

    {
      from: {
        id: 'VnSpperwhib1VTPFCrBA7GAfzXV2',
        name: 'Elchin Mirzayev',
        username: 'elchin.mirzayev',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/333292770_3352666998289712_8597528398118172149_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7k32jSByotEAX8_ws1B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfAm8yEoJKmGjavZtMyRrbNMMxVxY3Rc07LzyN-_5Sm-fw&oe=651A10CE'
      },
      message: 'I sent you a new video 😂😂'
    },

    {
      from: {
        id: '',
        name: 'Mehdixan Memmedli',
        username: 'm_mamedovv',
        avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/355850540_145974391834864_4363845071146344226_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZXifgh4E4TsAX-PyNR0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDIhRIBbSWi0bOiI4NgvswRskiHlRmDeFVFUH6UK9wuIw&oe=6519F713'
      },
      message: 'Comment my last post please 💪'
    },

    {
      from: {
        id: '',
        name: 'Əşrəf Əmirov',
        username: 'esrefemirov',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/253852115_618551909500357_1629181979766020890_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZcEwkYA1wYAX_hK1-c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfA6kRrZJm9Kz5P4KJGPp5rWWeKzkxhrlNF9atUPqpU3EA&oe=6519C486'
      },
      message: 'Do you have a plan for tonight? 😋'
    },

    {
      from: {
        id: '5aA4hoXJKhT4EcMD7FnKyNbuYMf2',
        name: 'Zaur Suleymanov',
        username: 'zaur.suleymnv',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
      },
      message: "I've crafted an Instagram-like UI using React, Tailwind, and Firebase – a fusion of modern technologies resulting in an elegant, user-friendly platform."
    },

    {
      from: {
        id: '5aA4hoXJKhT4EcMD7FnKyNbuYMf2',
        name: 'Zaur Suleymanov',
        username: 'zaur.suleymnv',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
      },
      message: 'group'
    },

    {
      from: {
        id: 'VnSpperwhib1VTPFCrBA7GAfzXV2',
        name: 'Elchin Mirzayev',
        username: 'elchin.mirzayev',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/333292770_3352666998289712_8597528398118172149_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7k32jSByotEAX8_ws1B&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfAm8yEoJKmGjavZtMyRrbNMMxVxY3Rc07LzyN-_5Sm-fw&oe=651A10CE'
      },
      message: 'I sent you a new video 😂😂'
    },

    {
      from: {
        id: '',
        name: 'Mehdixan Memmedli',
        username: 'm_mamedovv',
        avatar: 'https://scontent.cdninstagram.com/v/t51.2885-19/355850540_145974391834864_4363845071146344226_n.jpg?stp=dst-jpg_s100x100&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZXifgh4E4TsAX-PyNR0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDIhRIBbSWi0bOiI4NgvswRskiHlRmDeFVFUH6UK9wuIw&oe=6519F713'
      },
      message: 'Comment my last post please 💪'
    },

    {
      from: {
        id: '',
        name: 'Əşrəf Əmirov',
        username: 'esrefemirov',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/253852115_618551909500357_1629181979766020890_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=iZcEwkYA1wYAX_hK1-c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfA6kRrZJm9Kz5P4KJGPp5rWWeKzkxhrlNF9atUPqpU3EA&oe=6519C486'
      },
      message: 'Do you have a plan for tonight? 😋'
    },

    {
      from: {
        id: '5aA4hoXJKhT4EcMD7FnKyNbuYMf2',
        name: 'Zaur Suleymanov',
        username: 'zaur.suleymnv',
        avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/337157409_170548222466511_4429289295450886702_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=sULiBUa1xyQAX81P_4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfBumNIi6e5t_U8J251gyHeGB4fzzW65KUlAj_utGSHdcg&oe=6518FD7A'
      },
      message: "I've crafted an Instagram-like UI using React, Tailwind, and Firebase – a fusion of modern technologies resulting in an elegant, user-friendly platform."
    },
  ])

  return (
    <div className='flex-1'>
      <Header user={user}/>
      <Messages messages={messages} />
      <Reply setMessages={setMessages}/>
    </div>
  )
}
