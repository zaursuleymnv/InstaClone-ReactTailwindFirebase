import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import { getUserInfo } from '../../firebase'
import Header from './components/Header'
import Icon from '../../components/Icon'
import classNames from 'classnames'
import ProfileNotFound from './notfound'
import { Helmet } from 'react-helmet'


export default function ProfileLayout() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const {username} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getUserInfo(username)
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        setUser(false)
      })
  }, [])

  if(user === false) {
    return <ProfileNotFound/>
  }

  if(user === null) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return user && (
    <div>
      <Helmet>
        <title>{user ? `${user.fullName} (@${user.username}) • Instagram photos and videos` : "Instagram photos and videos"}</title>
      </Helmet>
      <Header user={user}/>
      <nav className='border-t flex justify-center items-center gap-x-16'>
        <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
          "text-xs tracking-widest flex items-center gap-x-1.5 py-5 font-semibold border-t -mt-px": true,
          "text-[#8e8e8e] border-transparent": !isActive,
          "text-black border-black": isActive

        })}>
          <Icon name="post" size={12}/>
          POSTS
        </NavLink>
        <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
          "text-xs tracking-widest flex items-center gap-x-1.5 py-5 font-semibold border-t -mt-px": true,
          "text-[#8e8e8e] border-transparent": !isActive,
          "text-black border-black": isActive

        })}>
          <Icon name="tag" size={12}/>
          TAGGED
        </NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}